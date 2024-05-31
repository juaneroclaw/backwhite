let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

async function ingresa() {
  try {
    fetch('../json/acceso.json')
    .then(response => response.json())
    .then(data =>{
      validar(data) 
    })
  } catch (error) {
    console.error('Error:', error);
  }
}

function validar(datos){
  const mail = document.getElementById('user').value;
  const password = document.getElementById('password').value;
  const validarUser = validarEmail(mail)
  var validarPass = !password ? 'El campo password es Obligatorio' : ''
  if(validarUser=='' && validarPass==''){
    const listUsuarios = datos.members.find(objeto => objeto.user === mail)
    if(!listUsuarios){
      validarUser = "El Usuario ingresado no corresponde a un cliente registrado, por favor regístrese para continuar"
    }else{
      if(listUsuarios.password != password){

        validarPass = "La contraseña ingresada es incorrecta"
      }
    }
  }
  if(validarUser!='' || validarPass!=''){
    viewModal(validarUser,validarPass);
  }else{
    window.location.href = "../index.html"; 
  }
}




function validarEmail(email){
  if(!email){
    return "El campo Usuario es Obligatorio";
  }
  const expresionRegular= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(!expresionRegular.test(email)){
    return "El correo ingresado es invalido";
  }
  return ''
}

function viewModal(textUser,textPass){

  if(textUser!=''){
    textUser = `<p class="text-danger">- ${textUser}</p>`
  }
  if(textPass!=''){
    textPass = `<p class="text-danger">- ${textPass}</p>`
  }
  document.getElementById('menssageContent').innerHTML=`${textUser} ${textPass}`
  const myModal = new bootstrap.Modal('#modalMenssage',{
    keyboard:false
  })
  myModal.show();
}