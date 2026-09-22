const namn = "Kalle";
const losenord = "qwe123";

const loginForm = document.getElementById("loginForm");
const nameInput = document.getElementById("namn");
const losenordInpunt = document.getElementById("losenord");
const felMeddelande = document.getElementById("felMeddelande");
const inloggadVy = document.getElementById("inloggadVy");
const valkomstText = document.getElementById("valkomstText");
const logoutKnapp = document.getElementById("logoutKnapp");
const loginRubrik = document.getElementById("loginRubrik");
const svampBild = document.querySelector(".svamp");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const inskrivetNamn = document.getElementById('namn').value;
    const inskrivetLosenord = document.getElementById('losenord').value;

    console.log('namn:', inskrivetNamn);
    console.log('losenord:', inskrivetLosenord);

    if (inskrivetNamn == namn && inskrivetLosenord == losenord) {
        valkomstText.textContent = "Välkommen " + inskrivetNamn + ", du är nu inloggad";

        loginForm.classList.add("hidden");
        svampBild.classList.add("hidden");
        loginRubrik.classList.add("hidden");
        inloggadVy.classList.remove("hidden");

    } else {
        felMeddelande.textContent = "Felaktiga inloggningsuppgifter";

    }

});