<script>
export default {
    name: 'HeaderEfreiTir',
    methods: {
        toggleMenu() {
            var menu = document.getElementById("header_nav_burger");
            if (menu.style.display === "none") {
                menu.style.display = "flex";
            } else {
                menu.style.display = "none";
            }
        }
    }

}
</script>

<template>
    <header>
        <div id="pc">
            <router-link to="/" class="header_logo">
                <img class="header_img" src="../assets/logo/logo_EFREI_Tir.png" alt="Logo EFREI Tir">
            </router-link>
    
            <nav id="header_nav">
                <router-link to="/">Accueil</router-link>
                <router-link to="/histoire">Notre Histoire</router-link>
                <router-link to="/bureau">Notre Bureau</router-link>
                <router-link to="/contact">Nous contacter</router-link>
                <router-link to="/rejoindre">Nous Rejoindre</router-link>
            </nav>
        </div>
        <div id="tel">
            <div id="header_tel">
                <router-link to="/" class="header_logo">
                    <img class="header_img" src="../assets/logo/logo_EFREI_Tir.png" alt="Logo EFREI Tir">
                </router-link>
        
                <div id="menu_button" @click="toggleMenu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div>
    
            <nav id="header_nav_burger" style="display: none">
                <router-link to="/">Accueil</router-link>
                <router-link to="/histoire">Notre Histoire</router-link>
                <router-link to="/bureau">Notre Bureau</router-link>
                <router-link to="/contact">Nous contacter</router-link>
                <router-link to="/rejoindre">Nous Rejoindre</router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header #pc, #header_tel {
    background-color: rgb(70, 76, 80);
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

#pc {
    display: flex;
}

#tel {
    display: none;
    flex-direction: column;
}

.header_logo {
    display: flex;
    margin: 3vh;
    margin-left: 7vh;
    transition: 0.3s;
}

.header_img {
    width: auto;
    height: 12vh;
    transition: .3s;
}

.header_img:hover {
    transform: scale(1.15);
}

#header_nav {
    display: flex;
    padding-right: 3vw;
    align-items: center;
}

#header_nav a {
    margin-left: 1.4vw;
    font-size: 2.5vh;
    display: flex;
    width: 10vw;
    text-align: center;
    height: 5vh;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    text-decoration: none;
    transition: 0.3s;
}

#header_nav a:hover {
    color: #3EC5F0;
    font-size: 3vh;
    transition: 0.3s;
}

#header_nav a:last-child {
    margin-left: 2vw;
}

#header_nav a:last-child {
    display: flex;
    font-size: 2.5vh;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 6vh;
    width: 14vw;
    border-radius: 10px;
    background-color: #3EC5F0;
    color: black;
    transition: 0.3s;
}

#header_nav a:last-child:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0);
    transition: 0.3s;
}

#header_nav_burger {
    display: none;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    background-color: rgb(70, 76, 80);
    row-gap: 3vh;
    transition: 0.3s;
}

#header_nav_burger a {
    font-size: 2.5vh;
    display: flex;
    width: 100%;
    height: 5vh;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    text-decoration: none;
}

#header_nav_burger a:last-child {
    display: flex;
    font-size: 2.5vh;
    height: 6vh;
    background-color: #3EC5F0;
    color: black;
    transition: 0.3s;
}

#header_nav_burger a:last-child:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0);
    transition: 0.3s;
}

#header_nav_burger a:hover {
    color: #3EC5F0;
    transform: scale(1.15);
    transition: 0.3s;
}

#menu_button {
    height: 31px;
    width: 36px;
    margin-right: 4vw;
}

#menu_button div {
    height: 5px;
    width: 36px;
    margin-bottom: 8px;
    transition: 0.3s;
    background-color: white;
    border-radius: 2.5px;
}

@media only screen and (max-width: 480px) {
    .header_logo {
        margin-left: 3vw;
        margin: 2vh;
    }

    .header_img {
        height: 7vh;
    }

    #pc {
        display: none;
    }

    #tel, #header_tel {
        display: flex;
    }
}
</style>