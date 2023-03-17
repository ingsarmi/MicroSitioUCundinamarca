
const productos = [
  {
    titulo: "Catálogo Bibliográfico",
    imagen: "img/imagen1.png",
    descripcion: "Catálogo de títulos físicos que encontraras en los CGCA de las diferentes sedes y extensiones de la Universidad De Cundinamarca. Miles de libros enfocados a los diferentes programas que tiene nuestra Universidad.",
    enlace: "https://catalogo.ucundinamarca.edu.co/"
  },
  {
    titulo: "Repositorio Digital",
    imagen: "img/imagen2.png",
    descripcion: "Base de datos compuesta de un grupo de servicios destinados a cap- turar, almacenar, ordenar, preservar y redistribuir la documentación académica de la institución en formato digital",
    enlace: "https://repositorio.ucundinamarca.edu.co/"
  },
  // Agrega más productos aquí...
];

function mostrarProductos() {
  const productosContainer = document.getElementById("productos-container");
  
  productos.forEach(producto => {
    const productoHTML = `
      <div class="producto">
        <h2>${producto.titulo}</h2>
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <p>${producto.descripcion}</p>
        <a target="_blank" href="${producto.enlace}">Ver producto</a>
      </div>
    `;
    
    productosContainer.innerHTML += productoHTML;
  });
}
mostrarProductos(); 