<template>
    <div class="flex flex-col h-screen bg-[#502F4C] "  v-show="shareMO" >
        
        <div v-show="scoreModalOpen" class="flex flex-col h-screen bg-[#502F4C]">
            <div class="bg-[#502F4C]">
                <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
            <button @click.prevent="toogleModalFS" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" class="w-8 h-8 m-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
        </div> 
        <!--fin div bouton "x" fermeture modale-->

        <div class=" flex flex-wrap justify-between items-center  mt-5 ml-6 md:ml-20 md:mr-2">
            <img @click="fermer()"  alt="logo" id="logo"  src="../../public/assets/img/logo.png" class="mr-3 h-6 md:h-9"> 
        </div>
        <h3 class="text-2xl p-9 text-center text-[#f4f5f9] md:p-12 md:text-5xl">RESULTAT</h3>

        <div class="grid grid-cols-1 h-5/6 mx-10 mb-10 md:mx-auto md:h-4/6 md:grid-cols-6 md:mt-5">
            <div class="relative bg-[#f4f5f9] rounded-lg pb-16 p-4 md:col-start-2 md:col-span-4 md:pb-12 md:pb-28">
                <p class="text-lg text-center text-[#000000] text-bold font-bold md:text-3xl">{{pseudo == '' ? "NAMELESS LOSER" : pseudo.toUpperCase()}}, vous avez obtenu le score de : </p>

                <p class="text-center text-4xl mt-6 md:text-6xl md:mt-12"><span class="italic">{{bonnesRep}}/{{totalRep + 1}}</span></p>

                <div v-show="detailsDisplay">
                  <div>
                    <p class="mt-6 text-lg mb-6 text-center md:mt-12 md:text-2xl md:mb-10">Cliquez sur le numéro d'une question pour l'afficher : </p>
                    <p class="text-sm mb-2 md:text-xl"><span class="text-[#F9F4F5] text-center w-12 my-3 rounded-xl  bg-emerald-400 py-1 px-2">Si la case est verte,</span> vous avez correctement répondu (vous emballez pas, c'est que de la <span class="font-bold">chance</span> !)</p>
                    <p class="text-sm mb-2 md:text-xl"><span class="text-[#F9F4F5] text-center w-12 my-3 rounded-xl  bg-rose-400 py-1 px-2">Si la case est rouge,</span> c'est que vous vous êtes <span class="font-bold">lamentablement</span> planté (aucune surprise ...)</p>
                    <div class="grid grid-cols-5 mt-4 md:mt-12 md:grid-cols-10">
                        <div @click="displayCorpsQuest(quest.ordre)" v-for="quest in questRecap2" :key="quest.ordre" :class="quest.status == true ?'  text-xl text-[#F9F4F5] text-center aspect-square w-10 m-2 rounded-xl  bg-emerald-400 align-middle pt-1 cursor-pointer md:text-3xl md:w-12 md:m-3' : 'text-xl text-[#F9F4F5] text-center aspect-square w-10 m-2 rounded-xl  bg-rose-400 align-middle pt-1 cursor-pointer md:text-3xl md:w-12 md:m-3' ">
                            {{quest.ordre}}
                        </div>
                    </div>
                  </div>  
                  <div>
                    <p v-show="questRecapDisplay" class="text-center text-md mb-8 mt-8 md:text-xl md:mb-16 sourceCodeB">{{questDisplay}}</p>
                  </div>
                </div>
                
                <button @click="rejouer()" class="px-6 py-2 bg-[#502F4C] rounded-lg absolute bottom-8 right-5 md:px-12 md:py-4 bottom-4"> <span class="text-lg italic text-[#F9F4F5] italic md:text-2xl">Rejouer</span> </button>

                <a @click="detailsDisplay=!detailsDisplay" href="#" class="underline absolute text-lg mt-52 bottom-10 left-5 md:left-20 md:text-2xl"> Détails</a>

              
            </div> 
            <!-- fin div contenant le score-->
            
         </div> 
         <!-- fin div générant les colones-->
            </div>
        </div>
        <main v-show="!scoreModalOpen" class="bg-[#502F4C] flex-1 mb-20">
            <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
                <button @click.prevent="toogleModalFS" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-8 h-8 m-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div> <!--fin div bouton "x" fermeture modale-->

            <div class=" flex flex-wrap justify-between items-center mt-5 ml-6 md:ml-20 md:mr-2">
                
                <a href="#" class="flex items-center">
                    <img @click="fermer()" alt="logo" id="logo"  src="../../public/assets/img/logo.png" class=" mr-3 mt-10 h-9 md:h-12">
                </a>
                <span v-show="cdwnStart" class="text-[#f4f5f9] text-4xl mt-5 mx-32 md:mx-20 font-bold calibri">
                    <div id="countdown">
                    <div id="countdown-number">{{countDown}}</div>
                    <svg>
                        <circle :class="questCatCurrent == 'Izno - Snob' ? 'troisCinq' : 'deuxZer'" r="36" cx="40" cy="40"></circle>
                        <set restart="always"/>
                    </svg>
                    </div>
                </span>
                
            </div>

            <h3 v-show="questStart" class="text-xl p-9 text-center text-[#f4f5f9] md:p-12 md:text-5xl">QUESTION <span class="ml-10 text-xl md:text-5xl">{{totalRep+1}}</span></h3>
            <h3 v-show="!questStart" class="text-xl p-9 text-center text-[#f4f5f9] md:p-12 md:text-5xl">PRÊT À SOUFFRIR, {{pseudo == '' ? "NAMELESS LOSER" : pseudo.toUpperCase()}} ?</h3>

            <div class="grid grid-cols-1 h-5/6 mx-10 md:mx-auto md:h-4/6 md:grid-cols-6 md:mt-5">
                <div class="relative mb-10 bg-[#f4f5f9] rounded-lg p-4 md:col-start-2 md:col-span-4 md:p-12">
                    <div v-show="!questStart">
                        <p class="text-center text-2xl">Choisi ton IznoChallenge</p>
                        <div class="grid grid-cols-1 gap-y-4 mt-10 pb-24 md:pb-2 md:grid-cols-2 md:gap-x-4 md:gap-y-8 md:my-20 md:mx-5 ">
                            <span :class="selectedCat == 0 ? selectedCateg : unselectedCateg" @click="selectCat(0)">Izno - Geek</span>
                            <span :class="selectedCat == 1 ? selectedCateg : unselectedCateg" @click="selectCat(1)">Izno - Snob</span>
                            <span :class="selectedCat == 2 ? selectedCateg : unselectedCateg" @click="selectCat(2)">Izno - Culturé</span>
                            <span :class="selectedCat == 3 ? selectedCateg : unselectedCateg" @click="selectCat(3)">Izno - Dév</span>
                            <span class="p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10 cursor-not-allowed opacity-25" title="En construction (mathématique)">Izno - Math</span>
                            <span class="p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10 cursor-not-allowed opacity-25" title="work in progress">Izno - Anglais</span>
                            <span class="p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10 cursor-not-allowed opacity-25" title="historiquement faux, mais ça arrive 👍">Izno - Histoire</span>
                            <span class="p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10 cursor-not-allowed opacity-25" title="on a pas encore décidé entre géometrie et geographie... (ou géologie ‽‽‽‽‽)">Izno - Géo</span>
                            <span class="p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10 cursor-not-allowed opacity-25" title="on est trop vieux pour trouver ces questions">Izno - Djeun's</span>
                            <span class="p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10 cursor-not-allowed opacity-25" title="on est trop jeunes vieux pour trouver ces questions">Izno - Anciens</span>
                            <span class="p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10 cursor-not-allowed opacity-25" title="ce sera un quiz sur les remix funk de morceaux de rap, et rien d'autre😤">Izno - Musique</span>
                            <span :class="selectedCat == 4 ? selectedCateg : unselectedCateg" @click="selectCat(4)">Aléatoire</span>

                        </div>
                        <button v-show="false" class="px-6 py-2 bg-[#502F4C] rounded-lg absolute bottom-8 left-5 md:px-12 md:py-4 md:bottom-6" @click="triche"> 
                            <span class="text-lg italic text-[#F9F4F5] italic md:text-2xl">Triche</span> 
                        </button>
                        <button  class="px-6 py-2 bg-[#502F4C] rounded-lg absolute bottom-8 right-5 md:px-12 md:py-4 md:bottom-6" @click="questAllGet"> 
                            <span class="text-lg italic text-[#F9F4F5] italic md:text-2xl">Commencer</span> 
                        </button>
                    </div>
                    <div v-show="questStart">
                        <p class=" text-lg text-center text-[#502F4C] text-bold font-bold md:text-3xl">Catégorie : <span class="ml-5 text-base italic md:ml-10">{{questCatCurrent}}</span> </p>

                    <p class="text-center mt-6 text-lg text-[#000000] md:mt-12 md:text-2xl">Question : <span class="ml-5 text-lg md:ml-10 md:text-2xl">{{questCurrent}} </span></p>

                    <form >
                        <div class="grid grid-cols-1 gap-y-4 mt-10 md:grid-cols-2 md:gap-x-4 md:gap-y-8 md:my-20 md:mx-5 ">
                        <span :class="selectedRep == 0 ? selected : unselected" @click.prevent="selectAnswer(0)"> {{questReponseCurrent[0]}}</span>
                        <span :class="selectedRep == 1 ? selected : unselected" @click="selectAnswer(1)"> {{questReponseCurrent[1]}}</span>
                        <span :class="selectedRep == 2 ? selected : unselected" @click="selectAnswer(2)"> {{questReponseCurrent[2]}}</span>
                        <span :class="selectedRep == 3 ? selected : unselected" @click="selectAnswer(3)"> {{questReponseCurrent[3]}}</span>
                        </div>
                        <div class="text-center grid grid-cols-5">
                            <p v-show="statusRep == 'goud'" class=" col-start-2 col-span-3 text-emerald-500 text-lg mt-14 font-bold md:text-2xl" >Bonne réponse, nullos !</p>
                            <p v-show="statusRep == 'izno'" class=" col-start-2 col-span-3  text-rose-600 text-lg mt-14 font-bold md:text-2xl" >Mauvaise réponse, bougre d'âne !!</p>
                            <button v-show="(selectedRep != -1)" class="px-6 py-2 bg-[#502F4C] rounded-lg absolute bottom-8 right-5 md:px-12 md:py-4 bottom-4" @click.prevent="questModif()"
                            > <span class="text-lg italic text-[#F9F4F5] italic md:text-2xl">Valider</span> </button>
                        </div>
                    </form>
                    </div><!-- fin div contenant v-show-->
                </div> <!-- fin div contenant questions&réponses-->
            </div> <!-- fin div générant les colones-->
        </main>
    </div>
</template>
<script>
import axios from "axios";
import {mapGetters} from 'vuex'
export default {
    name: "QuestionsModal.vue",
    props: ["pseudo"],
    data() {
        return {
            urlApiQuest: "http://localhost:3000/questions",

            questStart: false,
            cdwnStart: false,

            questAll: [],
            questCurrent: "",
            questReponseCurrent: [],
            questCatCurrent: "",
            questCorrectAnswer: -1,

            selectedCat: -1,
            questRandomIndex: -1,
            selectedRep: -1,
            bonnesRep: 0,
            totalRep: 0,

            scoreModalOpen: false,
            statusRep: "",

            countDown: 20,
            timer: null,

            detailsDisplay: false,
            questRecap:[],
            questRecap2: [],
            questDisplay : "",
            questRecapDisplay : false,

            unselected: "p-4 text-md break-words bg-[#C8B8DB] text-center sourceCode rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10",
            selected: "p-4 text-md break-words bg-[#C8B8DB] text-center sourceCode rounded-lg cursor-pointer quest md:text-xl md:ml-10 lg:text-2xl",
            unselectedCateg: "p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer md:text-xl lg:text-2xl md:ml-10",
            selectedCateg: "p-4 text-md break-words bg-[#C8B8DB] text-center sourceCodeB rounded-lg cursor-pointer quest md:text-xl md:ml-10 lg:text-2xl",

        };
    },
    methods: {
        async questAllGet() {
            this.questStart = !this.questStart;
            this.cdwnStart = !this.cdwnStart;
            this.questAll = await (await axios.get(this.urlApiQuest)).data.filter(quest => quest.question.length > 1);

            switch(this.selectedCat){
                case 0 :this.questAll = this.questAll.filter(q => q.cat == "Izno - Geek");
                    break;
                case 1 :this.questAll = this.questAll.filter(q => q.cat == "Izno - Snob");
                    break;
                case 2 :this.questAll = this.questAll.filter(q => q.cat == "Izno - Culturé");
                    break;
                case 3 :this.questAll = this.questAll.filter(q => q.cat == "Izno - Dév");
                    break;
                
            }
            this.RandomIndex(this.questAll);
            this.questCurrent = this.questAll[this.questRandomIndex].question;
            this.questReponseCurrent = this.questAll[this.questRandomIndex].answers;
            this.questCatCurrent = this.questAll[this.questRandomIndex].cat;
            this.questCorrectAnswer = this.questAll[this.questRandomIndex].correct_answer;
            clearTimeout(this.timer);
            if(this.questCatCurrent == "Izno - Snob"){
                this.countDown = 35  
            }else{
                this.countDown = 20;
            }
            this.countDownTimer();
            
            
        },
        triche(){
            this.scoreModalOpen = true
            this.questRecap2 = [{question: "blublu", ordre:1, status:true}, {question: "bloblo", ordre:2, status:false}, {question: "bleble", ordre:3, status:true}, {question: "Au plan pragmatico-énonciatif, quelle structure syntagmatique peut prétendre au statut d'unité minimale des discours monologaux par sa propension à la suffisance illocutoire ? ", ordre:4, status:false}]
        },
        questModif() {
            clearTimeout(this.timer);
            this.cdwnStart = false
            if (this.selectedRep == this.questCorrectAnswer) {
                this.bonnesRep++;
                this.statusRep = "goud";
                setTimeout(() => this.statusRep = "", 1250);
            }
            else {
                this.statusRep = "izno";
                setTimeout(() => this.statusRep = "", 1250);
            }
            this.recapQuest()
            this.selectedRep = -1
            setTimeout(() => {
                if (this.totalRep < 9) {
                    this.questAll.splice([this.questRandomIndex], 1);
                    this.RandomIndex(this.questAll);
                    this.questCurrent = this.questAll[this.questRandomIndex].question;
                    this.questReponseCurrent = this.questAll[this.questRandomIndex].answers;
                    this.questCatCurrent = this.questAll[this.questRandomIndex].cat;
                    this.questCorrectAnswer = this.questAll[this.questRandomIndex].correct_answer;
                    this.selectedRep = -1;
                    if(this.questCatCurrent == "Izno - Snob"){
                        this.countDown = 35  
                    }else{
                    this.countDown = 20;
                    }
                    this.totalRep++;
                    this.countDownTimer();
                    this.cdwnStart = true
                }
                else {
                    this.scoreModalOpen = !this.scoreModalOpen;
                    this.detailsDisplay = false
                    this.questRecap2 = this.questRecap
                }
                
                
            }, 1250);
            
        },
        RandomIndex(arr) {
            let tailleArr = arr.length;
            this.questRandomIndex = Math.floor(Math.random() * tailleArr);
        },
        selectAnswer(x) {
            if(this.statusRep == ''){
                this.selectedRep = x;
            }
        },
        selectCat(x) {
            this.selectedCat = x;
        },
        recapQuest(){
            if(this.statusRep == 'goud'){
                this.questRecap.push({question: this.questCurrent,
                                      ordre: this.totalRep+1,
                                      status: true
            })
            }else{
                this.questRecap.push({question: this.questCurrent,
                                      ordre: this.totalRep+1,
                                      status: false
            })
            }
        },
        countDownTimer() {
            if (this.countDown > 0) {
                this.timer = setTimeout(() => {
                    this.countDown -= 1;
                    this.countDownTimer();
                }, 1000);
            }
            else {
                if(this.questAll.length != 1){
                    this.questModif();
                }
            }
        },
        rejouer(){
            this.scoreModalOpen = false
            this.questStart = false
            this.cdwnStart = false
            this.detailsDisplay = false
            this.questRecapDisplay = false
            this.totalRep = 0
            this.bonnesRep = 0
            this.selectedCat = -1
            clearTimeout(this.timer)
            this.questRecap = []
        },
        fermer(){
            this.rejouer()
            this.scoreModalOpen = false
            this.questStart = false
            this.toogleModalFS()
        },
        displayCorpsQuest(x){
           if(this.questDisplay == this.questRecap2[x-1].question && this.questRecapDisplay ==true){
            this.questRecapDisplay = ! this.questRecapDisplay
           }else if(this.questDisplay != this.questRecap2[x-1].question && this.questRecapDisplay ==true){
            this.questDisplay = this.questRecap2[x-1].question
           }else{
            this.questDisplay = this.questRecap2[x-1].question
            this.questRecapDisplay = ! this.questRecapDisplay
           }

        },
        // ...mapActions(["toggleModal"]),
        toogleModalFS() {
        this.$store.commit('TOGGLE_MODAL')
        }
    },
    computed:{
      ...mapGetters(["shareMO"])
    }
    
}
</script>
<style>
    .quest{
        outline: solid 3px #502F4C;
    }

#countdown {
  position: relative;
  margin: auto;
  margin-top: 50px;
  height: 80px;
  width: 80px;
  text-align: center;
}

#countdown-number {
  color: white;
  display: inline-block;
  line-height: 80px;
}

svg {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
  stroke-dasharray: 226px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 4px;
  stroke: white;
  fill: none;
}
.troisCinq{
    animation: countdown 35s linear infinite forwards;
}
.deuxZer{
    animation: countdown 20s linear infinite forwards;
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 226px;
  }
}

</style>