const ventaSection = document.getElementById('venta');
const alquilerSection = document.getElementById('alquiler');

propiedadesVenta.slice(0,3).forEach(propiedades => {
    console.log(propiedades)
    const card = createCard(propiedades);
    ventaSection.appendChild(card);
});


propiedadesAlquiler.slice(0,3).forEach(propiedades => {
    console.log(propiedades)
    const card = createCard(propiedades);
    alquilerSection.appendChild(card);
});


