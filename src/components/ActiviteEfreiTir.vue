<script>
export default {
    name: 'ActiviteEfreiTir',
    mounted() {
        document.addEventListener('DOMContentLoaded', () => {
            const initCarroussel = (sport_name) => {
                // const carroussel = document.querySelector(`.section-carroussel.${sport_name}`);
                const slides = document.querySelectorAll(`.slide.${sport_name}`);
                const prev = document.querySelector(`.prev.${sport_name}`);
                const next = document.querySelector(`.next.${sport_name}`);
                const dots = document.querySelectorAll(`.dot.${sport_name}`);
                let index = 0;

                const activeSlide = n =>{
                    for (let slide of slides){
                        slide.classList.remove('active');
                    }
                    slides[n].classList.add('active');
                }

                const activeDot = n =>{
                    for (let dot of dots){
                        dot.classList.remove('active');
                    }
                    dots[n].classList.add('active');
                }

                const prepareCurrentSlide = ind =>{
                    activeSlide(ind);
                    activeDot(ind);
                }

                const nextSlide = () =>{
                    if (index == slides.length - 1){
                        index = 0;
                        prepareCurrentSlide(index);
                    } else{
                        index++;
                        prepareCurrentSlide(index);
                    }
                }

                const prevSlide = () =>{
                    if (index == 0){
                        index = slides.length - 1;
                        prepareCurrentSlide(index);
                    } else{
                        index--;
                        prepareCurrentSlide(index);
                    }
                }

                dots.forEach((item, indexDot) =>{
                    item.addEventListener('click', () =>{
                        index = indexDot;
                        prepareCurrentSlide(index);
                    })
                })

                if(next)next.addEventListener('click', nextSlide);
                if(prev)prev.addEventListener('click', prevSlide);
            }

            initCarroussel("airsoft");
            initCarroussel("tir_arc");
            initCarroussel("laser_game")
        })
    },
    methods: {
        modal (modal_name) {
            let modal = document.getElementById(modal_name);
            modal.style.display = "table";
            modal.style.position = "absolute";

            modal.style.top = `${window.scrollY}px`;
            modal.style.left = `${window.scrollX}px`;
            
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.overflow = "hidden";
        },
        unmodal (modal_name) {
            let modal = document.getElementById(modal_name);
            modal.style.display = "none";
            modal.style.position = "";

            document.body.style.overflow = "";
        },
    }
}
</script>

<template>
    <section>
        <h1>Nos activités</h1>

        <div id="activite_section">
            <div class="activite airsoft" @click="modal('modal_airsoft')">
                <img src="" alt="Image présentation Airsoft">
                <div>
                    <h3>Airsoft</h3>    
                    <p>L'Airsoft est une discipline phare de EFREI Tir. C'est par ici que tout à commencé, et grâce à cela que l'association c'est développée.</p>
                </div>
            </div>

            <div role="dialog" aria-modal="true"  id="modal_airsoft">
                <div class="modal_content">
                    <div class="exit_button" @click="unmodal('modal_airsoft')">
                        <div class="remove icon"></div>
                    </div>
                    <div class="modal_div">
                        <aside>
                            <div class="section-carroussel airsoft">
                                <div class="nav-box prev-box airsoft">
                                    <div class="navv prev airsoft">
                                        <p>&#10094;</p>
                                    </div>
                                </div>
                
                                <div class="slide airsoft active">
                                    <img src="" alt="Image Airsoft 1">
                                </div>
                    
                                <div class="nav-box next-box  airsoft">
                                    <div class="navv next  airsoft">
                                        <p>&#10095;</p>
                                    </div>
                                </div>
                
                                <div class="dots airsoft">
                                    <span class="dot airsoft dot1 active"></span>
                                </div>
                            </div>
                        </aside>
                        <article>
                            <h2 class="modal-heading">Airsoft</h2>
                            <div>
                                <img src="" alt="Calendrier"><p><b>Fréquence : </b>Une fois par mois, durant toute l'année scolaire</p>
                            </div>
                            <div style="margin-bottom: 2vh;">
                                <img src="" alt="Localisation"><p><b>Lieu : </b>Divers terrains d'airsoft autour de Paris</p>
                            </div>
                            <p>
                                Le pôle Airsoft est le pôle principal de EFREI Tir. Il est celui autour duquel a été créée l'association.
                                Il existe depuis sa fondation.
                            </p>
                            <p>
                                Avec notre affiliation à la Fédération Française d'Airsoft, nous pouvons fournir à nos membres des licences.
                                Grâce à cela, nous pouvons aussi pratiquer notre passion en toute sécurité.
                            </p>
                            <p>
                                Débutants ou passionnés, vous êtes les bienvenues !
                            </p>
                        </article>
                    </div>
                </div>
            </div>
    
            <div class="activite tir_arc" @click="modal('modal_tir_arc')">
                <div>
                    <h3>Tir à l'arc</h3>
                    <p>Dès sa création en 2022, le pôle Tir à l'Arc s'est imposé. Avec énormément de demandes chaque année, ce sont quelques dizaines de perosnnes qui sont refusées tous les ans.</p>
                </div>
                <img src="" alt="Image présentation Tir à l'arc">
            </div>

            <div role="dialog" aria-modal="true" id="modal_tir_arc">
                <div class="modal_content">
                    <div class="exit_button" @click="unmodal('modal_tir_arc')">
                        <div class="remove icon"></div>
                    </div>
                    <div class="modal_div">
                        <aside>
                            <div class="section-carroussel tir_arc">
                                <div class="nav-box prev-box tir_arc">
                                    <div class="navv prev tir_arc">
                                        <p>&#10094;</p>
                                    </div>
                                </div>
                
                                <div class="slide tir_arc active">
                                    <img src="" alt="Image Tir à l'arc 1">
                                </div>
                    
                                <div class="nav-box next-box itr_arc">
                                    <div class="navv next tir_arc">
                                        <p>&#10095;</p>
                                    </div>
                                </div>
                
                                <div class="dots tir_arc">
                                    <span class="dot tir_arc dot1 active"></span>
                                </div>
                            </div>
                        </aside>
                        <article>
                            <h2 class="modal-heading">Tir à l'arc</h2>
                            <div>
                                <img src="" alt="Calendrier"><p><b>Fréquence : </b>Toutes les jeudis soirs, de 20h à 22h</p>
                            </div>
                            <div style="margin-bottom: 2vh;">
                                <img src="" alt="Localisation"><p><b>Lieu : </b>58 Avenue Louis Aragon, Villejuif 94800</p>
                            </div>
                            <p>
                                Le pôle Tir à l'arc est un pôle important de EFREI Tir. Aujourd'hui, avec un peu moins de 20 membres par an, 
                                le pôle est le plus actif de nos pôles.
                            </p>
                            <p>
                                Grâce à un partenariat avec le club de Tir à l'arc de Villejuif, l'USV Tir à l'arc, nous avons la possibilité de tirer 
                                tout au long de l'année sur le pas de tir extérieur de la ville tout au long de l'année.
                            </p>
                            <p>
                                Nous avons à cœur de faire découvrir notre passion à des débutants curieux et motivés !
                            </p>
                        </article>
                    </div>
                </div>
            </div>
    
            <div class="activite laser_game" @click="modal('modal_laser_game')">
                <img src="" alt="Image présentation Laser Game">
                <div>
                    <h3>Laser Game</h3>
                    <p>Le Laser Game est une activité conviviale et pouvant accueillir tout le monde. Il semble donc évident que EFREI Tir propose à ses membres et à d'autres personnes de l'EFREI de venir s'amuser ensemble.</p>
                </div>
            </div>

            <div role="dialog" aria-modal="true" id="modal_laser_game">
                <div class="modal_content">
                    <div class="exit_button" @click="unmodal('modal_laser_game')">
                        <div class="remove icon"></div>
                    </div>
                    <div class="modal_div">
                        <aside>
                            <div class="section-carroussel laser_game">
                                <div class="nav-box prev-box laser_game">
                                    <div class="navv prev laser_game">
                                        <p>&#10094;</p>
                                    </div>
                                </div>
                
                                <div class="slide laser_game active">
                                    <img src="" alt="Image Laser Game 1">
                                </div>
                    
                                <div class="nav-box next-box itr_arc">
                                    <div class="navv next laser_game">
                                        <p>&#10095;</p>
                                    </div>
                                </div>
                
                                <div class="dots laser_game">
                                    <span class="dot laser_game dot1 active"></span>
                                </div>
                            </div>
                        </aside>
                        <article>
                            <h2 class="modal-heading">Laser Game</h2>
                            <div>
                                <img src="" alt="Calendrier"><p><b>Fréquence : </b>Une fois par mois, durant toute l'année scolaire</p>
                            </div>
                            <div style="margin-bottom: 2vh;">
                                <img src="" alt="Localisation"><p><b>Lieu : </b>COSMIC LASER, 3 Rue des Alouettes, 94320 Thiais</p>
                            </div>
                            <p>
                                Le pôle Laser Game est un pôle permettant à toute personne de l'EFREI à venir s'amuser avec du tir.
                            </p>
                            <p>
                                Le Laser Game est une discipline appréciée par les petits et les grands. C'est avec cette discipline ouverte à tous
                                que nous aimons accueillir les curieux au sein des activités de notre association.
                            </p>
                            <p>
                                Ce loisir permet à tous de découvrir une passion pour le tir de manière différente !
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.activite {
    display: flex;
    border-radius: 10px;
    background-color: whitesmoke;
    flex-direction: row;
    color: black;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 60vw;
    margin: 5vh;
    transition: 0.3s;
}

.activite:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.426);
    cursor: pointer;
    transition: 0.3s;
}

@media only screen and (max-width: 480px) {
    .activite.tir_arc {
        flex-direction: column-reverse;
    }
    
    .activite {
        flex-direction: column;
        padding-top: 20px;
    }

    .activite h3 {
        margin-top: 10px;
        text-align: center;
        padding: 0;
    }
}

#activite_section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#activite_section a {
    text-decoration: none;
}

.activite img {
    height: 25vmin;
    border-radius: 10px;
    /* border: solid 1px black; */
}

.activite div {
    padding-left: 4vh;
    padding-right: 4vh;
    text-align: justify;
}

.activite:nth-child(2) div {
    text-align: justify;
    justify-content: end;
}

#modal_airsoft, #modal_tir_arc, #modal_laser_game {
    display: none;
    width: 100%;
    height: 100vh;
    background-color: rgba(58, 64, 73, 0.557);
}

.modal_content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 70%;
    height: 80vh;
    margin: 10vh 15vw;
    border-radius: 10px;
    background-color: white;
}  

.modal_div {
    width: 94%;
    height: 97%;
    padding: 0 3% 3% 3%;
}

.modal-heading {
    padding-left: 6vw;
    margin: 4% 0 4% 0;
}

.modal_div aside {
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    width: 50%;
    height: 100%;
}

.modal_div article {
    float: left;
    width: 50%;
    height: 70%;
    font-size: 2.3vh;
}

@media only screen and (max-width: 480px) {
    #modal_airsoft, #modal_tir_arc, #modal_laser_game {
        width: 100vw;
        height: 100vh;
    }

    .modal_content {
        width: 100%;
        height: 100%;
        margin: 0;
        border-radius: 0;
    }  
    
    .modal_div {
        display: flex;
        flex-direction: column;
    }

    .modal_div aside, .modal_div article {
        width: 100%;
    }
}

.modal_div article img {
    height: 6vh;
    width: auto;
    margin-right: 5%;
}

.modal_div article div {
    display: flex;
    padding-left: 5%;
    margin-bottom: 2vh;
}

.modal_div article b {
    color: #3EC5F0;
}

.modal_div h2 {
    font-size: 6vh;
    margin-bottom: 4vh;
}

.modal_div p {
    padding-left: 3%;
    padding-right: 3%;
}

.section-carroussel{
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
}

@media only screen and (max-width: 480px) {
    .modal_div h2 {
        font-size: 5vh;
        margin-bottom: 2vh;
    }

    .modal_div p {
        font-size: 1.5vh;
    }

    .section-carroussel{
        height: 180px;
        margin-bottom: 30px;
    }

}

.section-carroussel .slide{
    width: 80%;
    height: 90%;
    display: none;
    overflow: hidden;
    border-radius: 10px;
    position: absolute;
    left: 10%;
}

.section-carroussel .slide img{
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.section-carroussel .slide.active{
    display: block;
}

.section-carroussel .nav-box{
    width: auto;
    height: 90%;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.section-carroussel .prev-box{
    right: 90%;
    -webkit-box-pack: right;
    -ms-flex-pack: right;
    justify-content: right;
}

.section-carroussel .next-box{
    left: 90%;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
}

.section-carroussel .navv{
    width: 35px;
    height: 70px;
    font-size: 25px;
    color: #3EC5F0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 10px;
}

.section-carroussel .navv:hover{
    cursor: pointer;
}

.dots{
    position: absolute;
    top: 90%;
    width: 100%;
    height: 10%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 10px;
}

.dots .dot{
    width: 12px;
    height: 12px;
    background-color: rgb(85, 84, 84);
    border-radius: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

@media only screen and (max-width: 480px) {
    .dots {
        margin-top: 5px;
    }

    .dots .dot {
        width: 8px;
        height: 8px;
    }
}

.dots .dot:hover{
    background-color: black;
}

.dots .dot.active{
    background-color: #3EC5F0;
}

.exit_button {
    width: 30px;
    height: 30px;
}

.remove.icon {
    color: rgb(119, 130, 137);
    position: absolute;
    margin-top: 16px;
    margin-left: 3px;
  }

.exit_button:hover {
    cursor: pointer;
}

.remove.icon:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
}

.remove.icon:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
}    
</style>