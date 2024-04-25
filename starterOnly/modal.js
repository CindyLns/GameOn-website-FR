function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let btnClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
btnClose.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Données saisies
let form = document.querySelector("form")
let balisePrenom = document.getElementById("first")
let valeurPrenom = balisePrenom.value;
let baliseNom = document.getElementById("last")
let valeurNom = baliseNom.value;

function verifierChamp(balise) {
    // Récupérer la valeur du champ "Prénom et Nom"
    let valeurNom = balise.value.trim();
    let valeurPrenom = balise.value.trim();
    let parentFormData = balise.parentElement.closest(".formData");

    if (valeurNom.length < 2 && valeurPrenom.length < 2 ) {
        parentFormData.classList.add("formData");
        parentFormData.setAttribute("data-error-visible", "true");
        parentFormData.setAttribute("data-error",  `Veuillez entrer 2 caractères ou plus pour ce champ`);
    } else {
        parentFormData.classList.remove("formData");
        parentFormData.removeAttribute("data-error-visible");
        parentFormData.removeAttribute("data-error");
    }
}

let baliseEmail = document.getElementById("email")
let email = baliseEmail.value

function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    email.classList.add("data-error")
  } else {
    email.classList.remove("data-error")
  }
}

let baliseLocation = document.querySelectorAll('input[name="location"]')

  function selectionnerRadio() {
    let selection = false;
    for (let i = 0; i < baliseLocation.length; i++) {
        if (baliseLocation[i].checked) {
            selection = true;
            break; 
        }
    }
    return selection;
    
}


// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
   event.preventDefault()
        verifierChamp(baliseNom)
        verifierChamp(balisePrenom)
        validerEmail(baliseEmail)

});


