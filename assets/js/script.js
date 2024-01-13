
function createCard(propiedad) {
    // Creacion Card con su clase de bootstrap
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-4 mb-4"; 

    const card = document.createElement("div");
    card.className = "card";

    // Creación elemento img
    const img = document.createElement("img");
    img.src = propiedad.src;
    img.className = "card-img-top";
    img.alt = "Imagen del departamento";

    // Creación elemento de clase card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Creación de título que se insertara en el elemento de clase card body
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = propiedad.nombre;

    // Creación de descripción que se insertara en el elemento de clase card body
    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = propiedad.descripcion;

    // Creación de descripción que se insertara en el elemento de clase card body
    const adress = document.createElement("p");
    adress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}`; 

    // Creación de habitaciones dentro de card body
    const room = document.createElement("p");
    room.innerHTML = `<i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banio} Baños`; 

    // Creación de precio dentro de card body
    const price = document.createElement("p");
    price.innerHTML = `<i class="fas fa-dollar-sign"></i> ${propiedad.costo}`; 

    // Creación de smoke dentro de card body
    const smoke = document.createElement("p");
    smoke.className = propiedad.smoke ? `text-success` : `text-danger`;
    smoke.innerHTML = propiedad.smoke ?  `<i class="fas fa-smoking"></i> Permitido Fumar` : `<i class="fas fa-smoking-ban"></i>  No se permite fumar`; 

    // Creación de mascotas dentro de card body
    const pets = document.createElement("p");
    pets.className = propiedad.pets ? `text-success` : `text-danger`;
    pets.innerHTML = propiedad.pets ?  `<i class="fas fa-paw"></i> Mascotas permitidas` : `<i class="fas fa-ban"></i>  No se permiten mascotas`; 
    

    cardBody.appendChild(title); 
    cardBody.appendChild(description);
    cardBody.appendChild(adress);
    cardBody.appendChild(room);
    cardBody.appendChild(price);
    cardBody.appendChild(smoke);
    cardBody.appendChild(pets);
    
    card.append(img);
    card.append(cardBody);

    cardDiv.appendChild(card);
    
    return cardDiv;

}; 
