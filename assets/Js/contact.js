const btnRedes = document.getElementById("btnRedes");
const redesColapsar = document.getElementById("redesColapsar");
btnRedes.addEventListener("click",  () => {
    if(redesColapsar.classList.contains('disabled')){
        redesColapsar.classList.remove('disabled');
        btnRedes.innerHTML = 'Redes sociales <i class="bi bi-chevron-up"></i>';
    }
    else{
        redesColapsar.classList.add('disabled');
        btnRedes.innerHTML = 'Redes sociales <i class="bi bi-chevron-down"></i>';
    }
});
const btnContacto = document.getElementById("btnContacto");
const contactoColapsar = document.getElementById("contactoColapsar");
btnContacto.addEventListener("click",  () => {
    if(contactoColapsar.classList.contains('disabled')){
        contactoColapsar.classList.remove('disabled');
        btnContacto.innerHTML = 'Contactanos <i class="bi bi-chevron-up"></i>';
    }
    else{
        contactoColapsar.classList.add('disabled');
        btnContacto.innerHTML = 'Contactanos <i class="bi bi-chevron-down"></i>';
    }
});