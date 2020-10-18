const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

// get values from html
const span = document.querySelector('.map-container span');

// create map
const map = L.map('mapid', options).setView([span.dataset.lat, span.dataset.lng], 14);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create and add markert
L.marker([span.dataset.lat, span.dataset.lng], { icon }).addTo(map);

/* image galley */

function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    
    /* Exemplo normal: */

    // buttons.forEach(removeActive);
    // function removeActive(button) {
    //     button.classList.remove("active");
    // }   
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    // selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    // atualizar o container de imagem
    imageContainer.src = image.src;

    // adicionar a classe .active para este botão
    button.classList.add("active");
}