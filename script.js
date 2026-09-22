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
const sparadAnvandare = localStorage.getItem("inloggadAnvandare");

if (sparadAnvandare) {
    visaInloggadVy(sparadAnvandare);
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const inskrivetNamn = document.getElementById('namn').value;
    const inskrivetLosenord = document.getElementById('losenord').value;

    console.log('namn:', inskrivetNamn);
    console.log('losenord:', inskrivetLosenord);

    if (inskrivetNamn == namn && inskrivetLosenord == losenord) {
        visaInloggadVy(inskrivetNamn);
        localStorage.setItem("inloggadAnvandare", inskrivetNamn);

    } else {
        felMeddelande.textContent = "Felaktiga inloggningsuppgifter";

    }
});

function visaInloggadVy(inskrivetNamn) {
    valkomstText.textContent = "Välkommen " + inskrivetNamn + ", du är nu inloggad.";

    loginForm.classList.add("hidden");
    svampBild.classList.add("hidden");
    loginRubrik.classList.add("hidden");
    inloggadVy.classList.remove("hidden");
}

logoutKnapp.addEventListener("click", () => {
    inloggadVy.classList.add("hidden");

    loginForm.classList.remove("hidden");
    svampBild.classList.remove("hidden");
    loginRubrik.classList.remove("hidden");

    document.getElementById("namn").value = "";
    document.getElementById("losenord").value = "";
    felMeddelande.textContent = "";

    localStorage.removeItem("inloggadAnvandare");

});



