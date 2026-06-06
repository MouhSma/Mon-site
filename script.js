// ═══════════════════════════════════════
//   script.js — SpareParts
//   Connexion + Inscription
// ═══════════════════════════════════════

function rouge(input) {
    input.style.borderColor = 'red';
    input.style.outline = 'none';
}

function vert(input) {
    input.style.borderColor = 'green';
    input.style.outline = 'none';
}

function reset(input) {
    input.style.borderColor = '';
}

// ══════════════════════════════════════
//   PAGE CONNEXION
// ══════════════════════════════════════

const btnConnecter = document.querySelector('.connexion button');

if (btnConnecter) {

    const inputEmail    = document.querySelector('.connexion input[type="email"]');
    const inputPassword = document.querySelector('.connexion input[type="password"]');

    // Reset couleur quand l'utilisateur retape
    inputEmail.addEventListener('input', () => reset(inputEmail));
    inputPassword.addEventListener('input', () => reset(inputPassword));

    btnConnecter.addEventListener('click', function () {
        let valide = true;

        if (inputEmail.value.trim() === '' || !inputEmail.value.includes('@')) {
            rouge(inputEmail);
            valide = false;
        } else {
            vert(inputEmail);
        }

        if (inputPassword.value.trim() === '' || inputPassword.value.length < 6) {
            rouge(inputPassword);
            valide = false;
        } else {
            vert(inputPassword);
        }

        if (valide) {
            window.location.href = 'accueil.html';
        }
    });
}


// ══════════════════════════════════════
//   PAGE INSCRIPTION
// ══════════════════════════════════════

const btnCreer = document.querySelector('.relation button');

if (btnCreer) {

    const inputNom    = document.querySelector('input[placeholder="Nom"]');
    const inputPrenom = document.querySelector('input[placeholder="Prénom"]');
    const inputEmail2 = document.querySelector('input[type="email"]');
    const inputTel    = document.querySelector('input[placeholder="Numéro de téléphone"]');
    const inputMdp1   = document.querySelectorAll('input[type="password"]')[0];
    const inputMdp2   = document.querySelectorAll('input[type="password"]')[1];

    const tousLesInputs = [inputNom, inputPrenom, inputEmail2, inputTel, inputMdp1, inputMdp2];

    // Reset couleur quand l'utilisateur retape
    tousLesInputs.forEach(input => {
        input.addEventListener('input', () => reset(input));
    });

    btnCreer.addEventListener('click', function () {
        let valide = true;

        if (inputNom.value.trim() === '') {
            rouge(inputNom); valide = false;
        } else { vert(inputNom); }

        if (inputPrenom.value.trim() === '') {
            rouge(inputPrenom); valide = false;
        } else { vert(inputPrenom); }

        if (inputEmail2.value.trim() === '' || !inputEmail2.value.includes('@')) {
            rouge(inputEmail2); valide = false;
        } else { vert(inputEmail2); }

        if (inputTel.value.trim().length < 9) {
            rouge(inputTel); valide = false;
        } else { vert(inputTel); }

        if (inputMdp1.value.length < 6) {
            rouge(inputMdp1); valide = false;
        } else { vert(inputMdp1); }

        if (inputMdp2.value === '' || inputMdp2.value !== inputMdp1.value) {
            rouge(inputMdp2); valide = false;
        } else { vert(inputMdp2); }

        if (valide) {
            window.location.href = 'connexion.html';
        }
    });
}
