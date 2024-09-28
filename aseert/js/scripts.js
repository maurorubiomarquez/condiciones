document.addEventListener("DOMContentLoaded", function () {
    // Problema 1: Borde en imagen
    const img = document.querySelector("#problema1 img");
    img.addEventListener("click", function () {
        img.classList.toggle("borde-rojo");
    });

    // Problema 2: Contador de stickers
    const inputs = document.querySelectorAll(".sticker-input");
    const buttonCalcular = document.querySelector("#calcular");
    const resultado2 = document.querySelector("#resultado2");

    buttonCalcular.addEventListener("click", function () {
        let total = 0;
        inputs.forEach(input => {
            total += parseInt(input.value) || 0;
        });
        if (total <= 10) {
            resultado2.textContent = `Llevas ${total} stickers`;
        } else {
            resultado2.textContent = "Llevas demasiados stickers";
        }
    });

    // Problema 3: Validar contraseña
    const buttonIngresar = document.querySelector("#ingresar");
    const resultado3 = document.querySelector("#resultado3");

    buttonIngresar.addEventListener("click", function () {
        const select1 = document.querySelector("#select1").value;
        const select2 = document.querySelector("#select2").value;
        const select3 = document.querySelector("#select3").value;
        const password = select1 + select2 + select3;
        console.log(password);
        

        if (password === "135") {
            resultado3.textContent = "password 1 es correcto";
        } else if (password === "135") {
            resultado3.textContent = "password 2 es correcto";
        } else {
            resultado3.textContent = "password incorrecto";
        }
    });
});
