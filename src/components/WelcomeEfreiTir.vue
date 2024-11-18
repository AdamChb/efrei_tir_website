<template>
    <div id="accueil">
        <div>
            <img src="../assets/logo/logo_EFREI_Tir.png" id="logo_accueil" alt="Logo EFREI Tir">
            <router-link to="/rejoindre" id="join_us_button">Nous Rejoindre</router-link>
        </div>
    </div>
</template>

<style scoped>
#accueil {
    display: flex;
    padding: 0;
    background-image: url(../assets/image/img_homepage.jpg);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 82vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#accueil div {
    display: flex;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
}

#logo_accueil {
    width: 36vmin;
}

#join_us_button {
    display: flex;
    font-size: 2.5vh;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 6vh;
    width: 14vw;
    border-radius: 10px;
    background-color: black;
    color: white;
    transition: 0.3s;
}

#join_us_button:hover {
    background-color: #3EC5F0;
    color: black;
    box-shadow: 0px 0px 30px rgba(0, 0, 0);
}

@media only screen and (max-width: 480px) {
    #accueil {
        height: 89vh;
    }

    #join_us_button {
        width: 50vw;
    }
}
</style>