

<script>
export default {
    name: 'FooterEfreiTir',
    methods: {
        linkToFFA() {
            var res = confirm("Vous allez être redirigé vers le site de la Fédération Française Airsoft. \nÊtes-vous sûr de vouloir continuer ?");
            if (res) window.open("https://www.ffairsoft.org/", "_blank");
        },
        linkToEFREITir() {
            window.location.href = "https://www.efreitir.fr/";
        },
        linkToEFREI() {
            var res = confirm("Vous allez être redirigé vers le site Web officiel de EFREI Tir. \nÊtes-vous sûr de vouloir continuer ?");
            if (res) window.open("https://www.efrei.fr/", "_blank");
        }
    }
}
</script>

<template>
    <footer>
        <div id="footer_img">
            <img src="../assets/logo/logo_FFA.png" alt="Logo FFAirsoft" class="footer_logo" onclick="linkToFFA()">
            <img src="../assets/logo/logo_EFREI_Tir.png" alt="Logo EFREI Tir" id="footer_EFREI_Tir" onclick="linkToEFREITir()">
            <img src="../assets/logo/logo_EFREI.png" alt="Logo EFREI" class="footer_logo" onclick="linkToEFREI()">
        </div>
        
        <div>
            <p><router-link to="/about">A propos</router-link> - Site développé par Laura DONATO et Adam CHABA</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: rgb(70, 76, 80);
    text-align: center;
    margin-top: 7vh;
}

footer div {
    display: flex;
    vertical-align: top;
    padding-top: 5vh;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}

footer p {
    font-size: 2vh;
}

footer a {
    color: black;
    text-decoration: none;
}

#footer_EFREI_Tir {
    height: 14vh;
    width: auto;
    transition: .3s;
}

#footer_EFREI_Tir:hover {
    transform: scale(1.15);
    cursor: pointer;
}

.footer_logo {
    height: 10vh;
    width: auto;
    transition: .3s;
}

.footer_logo:hover {
    transform: scale(1.15);
    cursor: pointer;
}

@media only screen and (max-width: 480px) {
    #footer_EFREI_Tir {
        height: 7vh;
    }

    .footer_logo {
        height: 5vh;
    }

    footer div {
        padding-top: 3vh;
    }
}
</style>