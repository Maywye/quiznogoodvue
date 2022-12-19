<template>
    <div class="flex flex-col h-screen bg-[#502F4C] "  v-show="shareMO" >
        
        <div v-show="scoreModalOpen" class="flex flex-col h-screen bg-[#502F4C]">
            <div class="bg-[#502F4C] flex-1">
                <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
            <button @click.prevent="toogleModalFS" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
        </div> <!--fin div bouton "x" fermeture modale-->

        <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
           
        <img @click="fermer()"  alt="logo" id="logo"  src="../assets/img/logo.png" class="mr-3 h-6 sm:h-9">
            
            
        </div>

        <h3 class="text-5xl text-center text-[#f4f5f9] py-12">RESULTAT</h3>

        <div class=" grid grid-cols-6 mb-10 h-4/6 mt-5">
            <div class="relative col-start-2 col-span-4 bg-[#f4f5f9] rounded-lg p-12">
                <p class="text-3xl text-center text-[#000000] text-bold font-bold">{{pseudo == '' ? "NAMELESS LOSER" : pseudo.toUpperCase()}}, vous avez obtenu le score de : </p>

                <p class="text-center text-6xl text-[##502F4C] mt-12"><span class="italic">{{bonnesRep}}/{{totalRep + 1}}</span></p>

                <div v-show="detailsDisplay">
                  <div >
                    <p class="mt-12 text-center text-2xl mb-8">Cliquez sur le numéro d'une question pour l'afficher : </p>
                    <p class="text-xl mb-2 "><span class="text-[#F9F4F5] text-center w-12 my-3 rounded-xl  bg-emerald-400 py-1 px-2">Si la case est verte,</span> vous avez correctement répondu (vous emballez pas, c'est que de la <span class="font-bold">chance</span> !)</p>
                    <p class="text-xl "><span class="text-[#F9F4F5] text-center w-12 my-3 rounded-xl  bg-rose-400 py-1 px-2">Si la case est rouge,</span> c'est que vous vous êtes <span class="font-bold">lamentablement</span> planté (aucune surprise ...)</p>
                    <div class="grid grid-cols-10 mt-12">
                        <div @click="displayCorpsQuest(quest.ordre)" v-for="quest in questRecap2" :key="quest.ordre" :class="quest.status == true ?' text-3xl text-[#F9F4F5] text-center aspect-square w-12 m-3 rounded-xl  bg-emerald-400 align-middle pt-1 cursor-pointer' : 'text-3xl text-[#F9F4F5] text-center aspect-square w-12 m-3 rounded-xl  bg-rose-400 align-middle pt-1 cursor-pointer' ">
                            {{quest.ordre}}
                        </div>
                    </div>
                  </div>  
                  <div>
                    <p v-show="questRecapDisplay" class="text-center text-xl mt-8 mb-16 sourceCode">{{questDisplay}}</p>
                  </div>
                </div>
                
                <button @click="rejouer()" class="px-12 py-4 bg-[#502F4C] rounded-lg absolute mt-44 bottom-6 right-12"> <span class="text-2xl  text-[#F9F4F5]">Rejouer</span> </button>

                <a @click="detailsDisplay=!detailsDisplay" href="#" class="underline absolute mt-52 bottom-10 left-20 text-2xl"> Détails</a>

              
            </div> <!-- fin div contenant le score-->
            
         </div> <!-- fin div générant les colones-->
            </div>
        </div>
        <main v-show="!scoreModalOpen" class="bg-[#502F4C] flex-1 mb-20">
            <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
                <button @click.prevent="toogleModalFS" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div> <!--fin div bouton "x" fermeture modale-->

            <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
                
                <a href="#" class="flex items-center">
                    <img @click="fermer()" alt="logo" id="logo"  src="../assets/img/logo.png" class=" mr-3 mt-6 h-9 sm:h-12">
                </a>
                <span v-show="cdwnStart" class="text-[#f4f5f9] text-4xl mt-5 mx-20 font-bold calibri">
                    <div id="countdown">
                    <div id="countdown-number">{{countDown}}</div>
                    <svg>
                        <circle :class="questCatCurrent == 'Izno - Snob' ? 'troisCinq' : 'deuxZer'" r="36" cx="40" cy="40"></circle>
                        <set restart="always"/>
                    </svg>
                    </div>
                </span>
                
            </div>

            <h3 v-show="questStart" class="text-5xl text-center text-[#f4f5f9] py-12">QUESTION <span class="ml-10 text-5xl">{{totalRep+1}}</span></h3>
            <h3 v-show="!questStart" class="text-5xl text-center text-[#f4f5f9] py-12">PRÊT À SOUFFRIR, {{pseudo == '' ? "NAMELESS LOSER" : pseudo.toUpperCase()}} ?</h3>

            <div class=" grid grid-cols-6 mb-10 h-4/6 mt-5">
                <div class="relative col-start-2 col-span-4 bg-[#f4f5f9] rounded-lg p-12">
                    <div v-show="!questStart">
                        <p class="text-center text-2xl">Choose your IznoChallenge</p>
                        <div class="mt-20 mx-5 grid grid-cols-2 gap-x-4 gap-y-8 ">
                            <span :class="selectedCat == 0 ? selected : unselected" @click="selectCat(0)">Izno - Geek</span>
                            <span :class="selectedCat == 1 ? selected : unselected" @click="selectCat(1)">Izno - Snob</span>
                            <span :class="selectedCat == 2 ? selected : unselected" @click="selectCat(2)">Izno - Culturé</span>
                            <span :class="selectedCat == 3 ? selected : unselected" @click="selectCat(3)">Izno - Dév</span>
                            <span :class="selectedCat == 4 ? selected : unselected" @click="selectCat(4)">Aléatoire</span>
                        </div>
                        <button  class="px-12 py-4 bg-[#502F4C] rounded-lg absolute bottom-4 left-5" @click="triche"> 
                            <span class="text-2xl italic text-[#F9F4F5] italic">Triche</span> 
                        </button>
                        <button  class="px-12 py-4 bg-[#502F4C] rounded-lg absolute bottom-4 right-5" @click="questAllGet"> 
                            <span class="text-2xl italic text-[#F9F4F5] italic">Commencer</span> 
                        </button>
                    </div>
                    <div v-show="questStart">
                        <p class="text-3xl text-center text-[#502F4C] text-bold font-bold">Catégorie : <span class="ml-10 text-base italic">{{questCatCurrent}}</span> </p>

                    <p class="text-center mt-12 text-2xl text-[#000000]">Question : <span class="ml-10 text-2xl">{{questCurrent}} </span></p>

                    <form >
                        <div class="mt-20 mx-5 grid grid-cols-2 gap-x-4 gap-y-8 ">
                        <span :class="selectedRep == 0 ? selected : unselected" @click.prevent="selectAnswer(0)"> {{questReponseCurrent[0]}}</span>
                        <span :class="selectedRep == 1 ? selected : unselected" @click="selectAnswer(1)"> {{questReponseCurrent[1]}}</span>
                        <span :class="selectedRep == 2 ? selected : unselected" @click="selectAnswer(2)"> {{questReponseCurrent[2]}}</span>
                        <span :class="selectedRep == 3 ? selected : unselected" @click="selectAnswer(3)"> {{questReponseCurrent[3]}}</span>
                        </div>
                        <div class="text-center grid grid-cols-5">
                            <p v-show="statusRep == 'goud'" class=" col-start-2 col-span-3 text-emerald-500 text-2xl mt-14 font-bold" >Bonne réponse, nullos !</p>
                            <p v-show="statusRep == 'izno'" class=" col-start-2 col-span-3  text-rose-600 text-2xl mt-14 font-bold" >Mauvaise réponse, bougre d'âne !!</p>
                            <button v-show="(selectedRep != -1)" class="px-12 py-4 bg-[#502F4C] rounded-lg absolute bottom-4 right-5" @click.prevent="questModif()"
                            > <span class="text-2xl italic text-[#F9F4F5] italic">Valider</span> </button>
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

            unselected: "ml-10 p-4 text-xl italic bg-[#C8B8DB] rounded-lg cursor-pointer",
            selected: "ml-10 p-4 text-xl italic bg-[#C8B8DB] rounded-lg cursor-pointer quest",

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
            console.log(this.questRecap[0].ordre);
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
            this.scoreModalOpen = ! this.scoreModalOpen
            this.questStart = !this.questStart
            this.cdwnStart = false
            this.totalRep = 0
            this.bonnesRep = 0
            this.selectedCat = -1
            this.countDown = 20
            this.questRecap = []
        },
        fermer(){
            this.rejouer()
            this.scoreModalOpen = false
            this.questStart = false
            this.cdwnStart = false
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