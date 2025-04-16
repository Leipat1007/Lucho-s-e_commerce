const btnRedes = document.getElementById("btnRedes");
const redesColapsar = document.getElementById("redesColapsar");
btnRedes.addEventListener("click",  () => {
    if(redesColapsar.classList.contains('disabled')){
        redesColapsar.classList.remove('disabled', 'slide-Up');
        redesColapsar.classList.add('slide-down');
        btnRedes.innerHTML = 'Redes sociales <i class="bi bi-chevron-up"></i>';
    }
    else{
        redesColapsar.classList.remove('slide-down');
        redesColapsar.classList.add('slide-Up');
        redesColapsar.addEventListener('animationend', () => {
            redesColapsar.classList.add('disabled');
        }, {once: true});
        btnRedes.innerHTML = 'Redes sociales <i class="bi bi-chevron-down"></i>';
    }
});
const btnContacto = document.getElementById("btnContacto");
const contactoColapsar = document.getElementById("contactoColapsar");
btnContacto.addEventListener("click",  () => {
    if(contactoColapsar.classList.contains('disabled')){
        contactoColapsar.classList.remove('disabled', 'slide-Up');
        contactoColapsar.classList.add('slide-down');
        btnContacto.innerHTML = 'Contactanos <i class="bi bi-chevron-up"></i>';
    }
    else{
        contactoColapsar.classList.remove('slide-down');
        contactoColapsar.classList.add('slide-Up');
        contactoColapsar.addEventListener('animationend', () => {
            contactoColapsar.classList.add('disabled');
        }, {once: true});
        btnContacto.innerHTML = 'Contactanos <i class="bi bi-chevron-down"></i>';
    }
});