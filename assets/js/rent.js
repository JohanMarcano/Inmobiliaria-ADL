const alquilerSection = document.getElementById('alquiler');

propiedadesAlquiler.forEach(propiedades => {
    // console.log(propiedades);
    const card = createCard(propiedades);
    alquilerSection.appendChild(card);
}); 

