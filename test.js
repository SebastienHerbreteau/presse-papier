document.addEventListener("click", async () => {
    try {
      let text = await navigator.clipboard.readText();
      for (let caractere of text) {
        let event = new KeyboardEvent("keydown", {
          key: caractere,
        });
        document.dispatchEvent(event);
        console.log(event)
      }
    } catch (err) {
      console.error("Erreur lors de la lecture du presse-papiers :", err);
    }
  });
 