const formulario = document.querySelector('.formulario');
const botonEncriptar = document.querySelector('.botonEncriptar');
const textoEncriptador = document.querySelector('#textoEncriptador');
const botonDesencriptar = document.querySelector('.botonDesencriptar');
const textoCampo = document.querySelector('.textoCampo');
const copiarBtn = document.querySelector('.copiar');
const regex = /^[A-Za-z]+$/;


// Event listeners
botonEncriptar.addEventListener('click', (e) =>{
    e.preventDefault();
    if(textoEncriptador.value.trim() === ''){
        mostrarError();
        return;
    }
    let textoGuardado = textoEncriptador.value.trim().toLowerCase();
    encriptar(textoGuardado);
    formulario.reset();
});

botonDesencriptar.addEventListener('click', (e) =>{
    e.preventDefault();
    if(textoEncriptador.value === ''){
        mostrarError();
        return;
    }
    let textoGuardado = textoEncriptador.value.trim().toLowerCase();
    desencriptar(textoGuardado);
    formulario.reset();
});

copiarBtn.addEventListener('click', () => {
    const texto = document.querySelector('.resultado').textContent;
    navigator.clipboard.writeText(texto);
    copiarBtn.textContent = 'Copiado!';
    copiarBtn.disabled = true;
    copiarBtn.classList.add('disabled');

    setTimeout(() => {
        copiarBtn.textContent = 'Copiar';
        copiarBtn.disabled = false;
        copiarBtn.classList.remove('disabled');
    }, 2000);
});

// Funciones
function encriptar(textoGuardado){
    textoGuardado = textoGuardado.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    textoCampo.textContent = '';
    const resultado = document.createElement('p');
    resultado.classList.add('resultado');
    resultado.textContent = textoGuardado;
    textoCampo.appendChild(resultado);
    copiarBtn.style.display = 'block';
}

function desencriptar(textoGuardado){
    textoGuardado = textoGuardado.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    textoCampo.textContent = '';
    const resultado = document.createElement('p');
    resultado.classList.add('resultado');
    resultado.textContent = textoGuardado;
    textoCampo.appendChild(resultado);
}

function mostrarError(){
    const errorPrevio = document.querySelector('.error');
    if(errorPrevio){
        return;
    }
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Este campo no puede ir vacío';
    mensajeError.classList.add('error');
    formulario.insertBefore(mensajeError, formulario.children[1]);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}


