function mostrarform(){
    const formularioPelicula = document.querySelector(".agregar-pelicula-form");

    agregarpeliculabutton.addEventListener("click", () => {
        if (formularioPelicula.style.display === "none" || formularioPelicula.style.display === "") {
            formularioPelicula.style.display = "block";
            formularioPelicula.style.animation = "fadeIn 0.5s ease-in";
        } else {
            formularioPelicula.style.animation = "fadeOut 0.5s ease-out";
            setTimeout(() => {
                formularioPelicula.style.display = "none";
            }, 500); 
        }
    });
}