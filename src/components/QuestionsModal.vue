<template>
    <div class="flex flex-col h-screen bg-[#502F4C] "  v-show="modalOpen" >
        <ScoreVue :score-modal-open="scoreModalOpen" :bonnes-rep="bonnesRep" :total-rep="totalRep"></ScoreVue>
        <main v-show="!scoreModalOpen" class="bg-[#502F4C] flex-1 mb-20">
            <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
                <button @click.prevent="toogleModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div> <!--fin div bouton "x" fermeture modale-->

            <div class=" flex flex-wrap justify-between items-center ml-20 mr-2">
                
                <a href="#" class="flex items-center">
                    <img alt="logo" id="logo"  src="../assets/img/logo.png" class=" mr-3 mt-6 h-9 sm:h-12">
                </a>
                <span class="text-[#f4f5f9] text-4xl mt-5 mx-20 font-bold calibri">
                    <div id="countdown">
                    <div id="countdown-number">{{countDown}}</div>
                    <svg>
                        <circle r="36" cx="40" cy="40"></circle>
                    </svg>
                    </div>
                </span>
                
            </div>

            <h3 class="text-5xl text-center text-[#f4f5f9] py-12">QUESTION <span class="ml-10 text-5xl">{{(totalRep+1)}}</span></h3>

            <div class=" grid grid-cols-6 mb-10 h-4/6 mt-5">
                <div class="relative col-start-2 col-span-4 bg-[#f4f5f9] rounded-lg p-12">
                    <div v-show="!questStart">
                        <p class="text-center text-2xl">Choose your IznoChallenge</p>
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
                            > <span class="text-2xl italic text-[#F9F4F5] italic">valider</span> </button>
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
import ScoreVue from "./ScoreVue.vue";

export default {
    name: "QuestionsModal.vue",
    props: ["modalOpen", "toogleModal"],
    data() {
        return {
            urlApiQuest: "http://localhost:3000/questions",

            questStart: false,

            questAll: {},
            questCurrent: "",
            questReponseCurrent: [],
            questCatCurrent: "",
            questCorrectAnswer: -1,

            questRandomIndex: -1,
            selectedRep: -1,
            bonnesRep: 0,
            totalRep: 0,

            scoreModalOpen: false,
            statusRep: "",

            countDown: 15,
            timer: null,

            unselected: "ml-10 p-4 text-xl italic bg-[#C8B8DB] rounded-lg cursor-pointer",
            selected: "ml-10 p-4 text-xl italic bg-[#C8B8DB] rounded-lg cursor-pointer quest"
        };
    },
    methods: {
        async questAllGet() {
            this.questStart = !this.questStart;
            this.questAll = await (await axios.get(this.urlApiQuest)).data;
            this.RandomIndex(this.questAll);
            this.questCurrent = this.questAll[this.questRandomIndex].question;
            this.questReponseCurrent = this.questAll[this.questRandomIndex].answers;
            this.questCatCurrent = this.questAll[this.questRandomIndex].cat;
            this.questCorrectAnswer = this.questAll[this.questRandomIndex].correct_answer;
            clearTimeout(this.timer);
            this.countDownTimer();
        },
        questModif() {
            clearTimeout(this.timer);
            this.totalRep++;
            if (this.selectedRep == this.questCorrectAnswer) {
                this.bonnesRep++;
                this.statusRep = "goud";
                setTimeout(() => this.statusRep = "", 1250);
            }
            else {
                this.statusRep = "izno";
                setTimeout(() => this.statusRep = "", 1250);
            }
            this.selectedRep = -1
            setTimeout(() => {
                if (this.questAll.length != 1) {
                    this.questAll.splice([this.questRandomIndex], 1);
                    this.RandomIndex(this.questAll);
                    this.questCurrent = this.questAll[this.questRandomIndex].question;
                    this.questReponseCurrent = this.questAll[this.questRandomIndex].answers;
                    this.questCatCurrent = this.questAll[this.questRandomIndex].cat;
                    this.questCorrectAnswer = this.questAll[this.questRandomIndex].correct_answer;
                }
                else {
                    this.scoreModalOpen = !this.scoreModalOpen;
                }
                this.selectedRep = -1;
                this.countDown = 15;
                this.countDownTimer();
            }, 1250);
        },
        RandomIndex(arr) {
            let tailleArr = arr.length;
            this.questRandomIndex = Math.floor(Math.random() * tailleArr);
        },
        selectAnswer(x) {
            this.selectedRep = x;
        },
        countDownTimer() {
            if (this.countDown > 0) {
                this.timer = setTimeout(() => {
                    this.countDown -= 1;
                    this.countDownTimer();
                }, 1000);
            }
            else {
                this.questModif();
            }
        }
    },
    components: { ScoreVue }
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
  animation: countdown 15s linear infinite forwards;
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