const buttons = document.querySelectorAll("section > button");

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          const content = button.nextElementSibling;
          const isOpen = content.style.maxHeight;

          // Fermer tous les autres
          document.querySelectorAll("section > div").forEach(div => {
            if (div !== content) div.style.maxHeight = null;
          });

          // Toggle celui cliqué
          content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";
        });
      });