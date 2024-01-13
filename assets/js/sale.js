const ventaSection = document.getElementById('venta');

propiedadesVenta.forEach(propiedades => {
    // console.log(propiedades);
    const card = createCard(propiedades);
    ventaSection.appendChild(card);
}); 


