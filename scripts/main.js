// =================================================================
// 1. Base de données des projets
// =================================================================
import { projetsData } from './data.js';

// =================================================================
// 2. Éléments du DOM
// =================================================================
const projectsGrid = document.getElementById('projectsGrid');
const searchBar = document.getElementById('searchBar');
const sortSelect = document.getElementById('sortSelect');
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const filterCheckboxes = document.querySelectorAll('.filter-cb');
const seeMoreContainer = document.getElementById('seeMoreContainer');
const seeMoreBtn = document.getElementById('seeMoreBtn');
const seeMoreText = seeMoreBtn.querySelector('span');
const projectCountEl = document.getElementById('projectCount');

// =================================================================
// 3. Fonctions principales
// =================================================================

let isExpanded = false;
const INITIAL_LIMIT = 6; // Nombre de projets affichés par défaut
let currentFilteredProjects = []; // Stocke le résultat du filtre actuel

// Générer le HTML d'une carte projet
function creerCarteProjet(projet) {
    // On utilise tagsCarte pour l'aperçu rapide
    const tagsHtml = projet.tagsCarte.map(tag => `<span>${tag}</span>`).join('');
    
    return `
        <article class="project-card" data-id="${projet.id}">
            <div class="project-media">
                <img src="${projet.image}" alt="Aperçu de ${projet.titre}">
                <span class="project-date">${projet.dateStr}</span>
            </div>
            <div class="project-info">
                <h3>${projet.titre}</h3>
                <p>${projet.description}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
            </div>
        </article>
    `;
}
// Mettre à jour l'affichage de la grille avec le système de limite
function afficherProjets(projetsAffiches) {
    currentFilteredProjects = projetsAffiches;

    const count = projetsAffiches.length;
    projectCountEl.textContent = `${count} réalisation${count > 1 ? 's' : ''}`;
    // On injecte les projets
    projectsGrid.innerHTML = projetsAffiches.map(creerCarteProjet).join('');
    
    if (projetsAffiches.length === 0) {
        projectsGrid.innerHTML = "<p>Aucun projet ne correspond à vos critères.</p>";
        seeMoreContainer.classList.add('hidden');
        projectsGrid.classList.remove('is-collapsed');
        return;
    }

    // S'il y a plus de 3 projets, on gère la coupe
    if (projetsAffiches.length > 3) {
        seeMoreContainer.classList.remove('hidden');
        
        if (!isExpanded) {
            // Mode "Recroquevillé" (Coupe au milieu de la 2ème ligne)
            projectsGrid.classList.add('is-collapsed');
            seeMoreContainer.classList.add('is-collapsed');
            seeMoreText.textContent = "Voir plus";
            seeMoreBtn.classList.remove('open');
        } else {
            // Mode "Déplié" (Affiche tout)
            projectsGrid.classList.remove('is-collapsed');
            seeMoreContainer.classList.remove('is-collapsed');
            seeMoreText.textContent = "Voir moins";
            seeMoreBtn.classList.add('open');
        }
    } else {
        // 3 projets ou moins : on déplie tout
        seeMoreContainer.classList.add('hidden');
        projectsGrid.classList.remove('is-collapsed');
        seeMoreContainer.classList.remove('is-collapsed');
    }
}
// Fonction maîtresse : Filtrer et Trier
function filtrerEtTrierProjets() {
    const termeRecherche = searchBar.value.toLowerCase();
    const filtresCoches = Array.from(filterCheckboxes)
                               .filter(cb => cb.checked)
                               .map(cb => cb.value);

    let projetsFiltres = projetsData.filter(projet => {
        // Recherche textuelle incluant les technos et les tags de la carte
        const correspondTexte = projet.titre.toLowerCase().includes(termeRecherche) || 
                                projet.description.toLowerCase().includes(termeRecherche) ||
                                projet.technos.some(t => t.toLowerCase().includes(termeRecherche)) ||
                                projet.tagsCarte.some(t => t.toLowerCase().includes(termeRecherche));
        
        // Filtrage par cases à cocher utilisant le tableau caché "filtres"
        const correspondTags = filtresCoches.length === 0 || filtresCoches.every(filtre => projet.filtres.includes(filtre));

        return correspondTexte && correspondTags;
    });

    const critereTri = sortSelect.value;
    projetsFiltres.sort((a, b) => {
        if (critereTri === 'new') return b.dateUnive - a.dateUnive;
        if (critereTri === 'old') return a.dateUnive - b.dateUnive;
        if (critereTri === 'az') return a.titre.localeCompare(b.titre);
        if (critereTri === 'za') return b.titre.localeCompare(a.titre);
        return 0;
    });

    // À chaque fois qu'on modifie un filtre ou qu'on recherche, on replie la liste
    isExpanded = false; 
    afficherProjets(projetsFiltres);
}

// =================================================================
// 4. Écouteurs d'événements (Event Listeners)
// =================================================================

// Gestion de l'ouverture/fermeture du panneau de filtres avec animation de la flèche
filterBtn.addEventListener('click', () => {
    filterPanel.classList.toggle('hidden');
    filterBtn.classList.toggle('open'); // Ajoute/retire la classe pour tourner le SVG
});

// Relancer le filtrage/tri à chaque frappe, clic ou changement
searchBar.addEventListener('input', filtrerEtTrierProjets);
sortSelect.addEventListener('change', filtrerEtTrierProjets);
filterCheckboxes.forEach(cb => {
    cb.addEventListener('change', filtrerEtTrierProjets);
});
seeMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded; // Inverse l'état (ouvert/fermé)
    afficherProjets(currentFilteredProjects); // Réaffiche avec le nouvel état
    
    // Si on vient de fermer, on remonte légèrement pour voir le début des projets
    if (!isExpanded) {
        document.getElementById('realisations').scrollIntoView({ behavior: 'smooth' });
    }
});

// =================================================================
// 5. Initialisation au chargement de la page
// =================================================================
filtrerEtTrierProjets();


// =================================================================
// 6. Scroll Spy (Mise en évidence du menu dans le Header)
// =================================================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Nouvelle configuration : crée une "ligne de détection" virtuelle au milieu de l'écran
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Le déclencheur est exactement à 50% de la hauteur de la fenêtre
    threshold: 0 // On détecte dès que la section touche cette ligne centrale
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            // Retirer la classe active de tous les liens
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Ajouter la classe active au lien correspondant à la section visible
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observer toutes les sections qui ont un ID
sections.forEach(section => {
    if(section.id) {
        sectionObserver.observe(section);
    }
});



// =================================================================
// 7. Effet Parallax et Transition
// =================================================================
const bgShapesContainer = document.getElementById('bg-shapes-container');
const parallaxLayers = document.querySelectorAll('.bg-shapes-global .parallax-layer');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const triggerHeight = window.innerHeight * 0.8;

    if (scrolled > triggerHeight) {
        bgShapesContainer.classList.add('scrolled');
    } else {
        bgShapesContainer.classList.remove('scrolled');
    }

    // Gérer l'effet Parallax - Amplitude réduite
    parallaxLayers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));
        // Le multiplicateur * 0.15 maintient les formes dans le champ de vision
        const yPos = -(scrolled * speed * 0.15); 
        layer.style.transform = `translateY(${yPos}px)`;
    });
});

// =================================================================
// 8. Gestion de la Modale des projets
// =================================================================
const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModalBtn');

const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalCarousel = document.getElementById('modalCarousel');
const modalTags = document.getElementById('modalTags');

// Délégation d'événement : On écoute les clics sur la grille globale
projectsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    
    if (card) {
        const projectId = parseInt(card.getAttribute('data-id'));
        const projet = projetsData.find(p => p.id === projectId);
        
        if (projet) {
            modalTitle.textContent = projet.titre;
            modalDescription.textContent = projet.descriptionLongue || projet.description;
            
            // Carrousel gérant objets et chaînes simples
            const imagesToDisplay = projet.images && projet.images.length > 0 ? projet.images : [projet.image];
            
            modalCarousel.innerHTML = imagesToDisplay.map(item => {
                const isObject = typeof item === 'object';
                const src = isObject ? item.src : item;
                const link = isObject ? item.link : null;
                const caption = isObject ? item.caption : null;

                const imgHtml = `<img src="${src}" alt="Visuel de ${projet.titre}">`;
                const captionHtml = caption ? `<figcaption>${caption}</figcaption>` : '';

                if (link) {
                    return `
                        <figure class="carousel-item">
                            <a href="${link}" target="_blank" rel="noopener noreferrer" title="Ouvrir le fichier">
                                ${imgHtml}
                            </a>
                            ${captionHtml}
                        </figure>
                    `;
                } else {
                    return `
                        <figure class="carousel-item">
                            ${imgHtml}
                            ${captionHtml}
                        </figure>
                    `;
                }
            }).join('');
            
            // Affichage des technologies
            modalTags.innerHTML = projet.technos.map(tech => `<span>${tech}</span>`).join('');
            
            // Afficher la modale
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }
});

closeModalBtn.addEventListener('click', fermerModale);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fermerModale();
    }
});

function fermerModale() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}