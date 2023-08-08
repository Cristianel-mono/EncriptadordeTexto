        const textArea1 = document.getElementById("textoOriginal");
        const textArea2 = document.getElementById("textoEncriptado");
        const images = document.querySelectorAll(".imagen-muñeco, .imagen-mensaje");
        const newImage = document.querySelector(".new-image");
        const copyButton = document.getElementById("boton-copiar");

        function checkImagesVisibility() {
            const hasText = textArea2.value.trim() !== "";

            images.forEach(image => {
                image.style.display = hasText ? "none" : "block";
            });

            newImage.style.display = hasText ? "block" : "none";
        }

        textArea2.addEventListener("input", checkImagesVisibility);

        textArea2.addEventListener("paste", function() {
            setTimeout(checkImagesVisibility, 0);
        });

        function clearDefaultText(element) {
            if (element.value === element.getAttribute("placeholder")) {
                element.value = "";
            }
        }

        function clearPlaceholder(element) {
            if (element.value === element.getAttribute("placeholder")) {
                element.value = "";
            }
        }

        textArea1.addEventListener("click", function() {
            clearDefaultText(textArea1);
            clearPlaceholder(textArea1);
        });

        function encriptarTexto() {
            const textoOriginal = textArea1.value;
            const textoEncriptado = encriptarTextoReal(textoOriginal);
            textArea1.value = ""; // Limpiar el contenido del textarea 1
            textArea2.value = textoEncriptado;

            
            checkImagesVisibility();
        }

       
        function encriptarTextoReal(texto) {
            let textoEncriptado = "";

            for (let i = 0; i < texto.length; i++) {
                const charCode = texto.charCodeAt(i);
                textoEncriptado += String.fromCharCode(charCode + 1);
            }

            return textoEncriptado;
        }

        // ...

        // ...

    function desencriptarTexto() {
        const textoEncriptado = textArea1.value // Obtiene el texto encriptado del textarea2
        let textoDesencriptado = "";

        for (let i = 0; i < textoEncriptado.length; i++) {
            const charCode = textoEncriptado.charCodeAt(i);
            // Aplica la lógica para desencriptar el carácter y agrega al resultado
            const charDesencriptado = String.fromCharCode(charCode - 1);
            textoDesencriptado += charDesencriptado;
        }
        textArea1.value = "";
        textArea2.value = textoDesencriptado; // Muestra el texto desencriptado en textarea1
    }

// ...

    

        copyButton.addEventListener("click", function() {
            textArea2.select(); 
            document.execCommand("copy"); 
            textArea2.value= "";
        });

// ...
