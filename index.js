let pass = document.querySelector("#password")
let generate = document.querySelector("#Generate")
let copy = document.querySelector("#copy")
let message = document.getElementById('message');

function generatePassword() {
    const length = 14;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    pass.value = password;
}

function copierTexte(event) {
  event.preventDefault();
  navigator.clipboard.writeText(pass.value).then(() => {
  console.log("Mot de passe copié avec succès !");
  message.style.display = "block";
  message.style.transition = "1s";
  message.classList.remove("hidden");

      
  setTimeout(() => {
    message.classList.add("hidden");
    setTimeout(() => {
      message.style.display = "none"; }, 500);
      }, 3000);
  })

}


copy.addEventListener('click' , copierTexte)
generate.addEventListener('click' , generatePassword)