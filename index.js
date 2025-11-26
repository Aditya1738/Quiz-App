const btnget = document.querySelector(".user-btn");
const inputget = document.querySelector("#inputget");
const show = document.querySelector("#show");
btnget.addEventListener('click',() =>{
 show.innerHTML = inputget.value;
});

// to calculate percentage
function percentageCalculation(score, attempt){
  var c = (parseFloat(score)/parseFloat(attempt))*100;
  return parseFloat(c);
}




let pcquestions = [{
   
  question: "Two pipes A and B can fill a tank in 15minutes and 20 minutesrespectively. Both the pipes are opened together but after 4 minutes, pipeA is turned off. What is the total time required to fill the tank?",
  options: ["10 min. 20 sec.","11 min. 45 sec.","11 min. 45 sec.","14 min. 40 sec.",],
  answer: 4,
},
{
 
  question:"A tap can fill a tank in 6 hours. Afterhalf the tank isfilled, three more similar taps are opened. What is the total time takento fill the tank completely?",
  options: ["3 hrs 15 min","3 hrs 45 min","4 hrs 15 min","4 hrs 1 min",],
  answer:2,

},
{
 
  question: "A pump can fill a tank with water in 2hours. Because of aleak, it took 2(1/3) hours to fill the tank. The leak can drain all thewater of the tank in:",
  options: ["7 hours","8 hours","12 hours","14 hours"],
  answer:4
},
{
 
  question: "A cistern is normally filled in 8 hoursbut takes two hourslonger to fill because of a leak in its bottom. If the cistern is full,the leak will empty it in ?",
  options: ["20 hrs","28 hrs","36 hrs","40hrs"],
  answer:1
},
{
 
  question: "Three taps A,B and C can fill a tank in12,15 and 20 hoursrespectively. If A is open all the time and B ,C are open for one houreach alternatively, the tank will be full in:",
  options: ["6 hrs","20/3 hrs","7 hrs","15/2 hrs"], 
  answer:3
},
{
 
  question:"12 buckets of water fill a tank when thecapacity of each tankis 13.5 liters. How many buckets will be needed to fill the same tank,ifthe capacity of each bucket is 9 liters?",
  options: ["8","15","16","18"],
  answer:4
},
{
 
question:"One pipe can fill a tank  three times asfast as another pipe.If together the two pipes can fill the tank in 36 min, then the sloweralone will be able to fill the tank in:",
  options: ["81 min","108 min","144 min","192 min"],
  answer:3
},
{
question:"Water flows into a tank which is 200 mlong and 150 m wide,through a pipe of cross-section (0.3m x 0.2m) at 20 km/h. In what timewill the water level be 12m ?",
  options: ["200 hrs","240 hrs","300 hrs","270 hrs"],
  answer:3
},
{

question:"A cistern has a leak which would emptythe cistern in 20minutes. A tap is turned on which admits 4 liters a minute into thecistern, and it is emptied in 24 minutes. How many liters does the cisternhold ?",
options: ["360 lit","480 lit"," 320 lit","460 lit"],
answer:2
},
{
question:"Two pipes A and B can fill a tank in 15 min and 20 minrespectively. Both the pipes are opened together but after 4 min, pipe Ais turned off. What is the total time required to fill the tank ?",
options: ["15 min 20 sec.","16 min 40 sec.","13 min 10 sec.","14 min 40 sec."],
answer:4
},]
 
 
  const infobox = document.querySelector(".info_box");  // linking first category info box of quiz
  const quizBox = document.querySelector(".quiz_box");  // linking second page quiz box of quiz
  const pcquestion = document.querySelector("#btn1");   // pipes and cisterns category button linked
  const quiztitle = document.querySelector("#title");   // second page tile of every category
  const net_btn = document.querySelector(".net_btn");   //
  const nextbtn = document.querySelector(".next_btn");
  const resultbox = document.querySelector(".result_box");
  const pquetext = document.querySelector(".que_text");
  const optionbox = document.querySelector(".optionbox"); 

 
                                //pipes and cisterns questions starts
// if startQuiz button clicked
pcquestion.onclick = function pcquiz(){
 
  infobox.style.display = "none";
  quizBox.style.display = "block";
  quiztitle.innerHTML = "Pipes and Cisterns";
  pquetext.style.display = "block";
  optionbox.style.display = "grid";
  printQuestion(index);
  time();
};
 
 let index =0;
 let attempt = 0;
 let wrong = 0;
 let score = 0;
 let number = 0;    
 let questions = pcquestions.sort(function(){
  return 0.5 - Math.random();
 });

 function time(){
  // timer code starts
  let totalTime = 300
  let min = 0;
  let sec = 0;
  let counter = 0;


  let timer = setInterval(function(){
  counter++;
  min = Math.floor((totalTime-counter)/60);
  sec = totalTime- min * 60 - counter;
  
  $("#timer span").text(min + ":" + sec);
  
  if(counter == totalTime){
    clearInterval(timer);
    stopInterval();
   
  } 
  
  },1000);

  var stopInterval = function(){
    alert("You are out of time!");
    showResult();
  }
 
  //timer code ends
  
};

  
//function to print question start
function printQuestion(i){
  number++;
  $(".que_text").text(questions[i].question);
  $(".quesno").text(number + "/10");
   $(".optionbox span").eq(0).text(questions[i].options[0]),
   $(".optionbox span").eq(1).text(questions[i].options[1]);
   $(".optionbox span").eq(2).text(questions[i].options[2]);
   $(".optionbox span").eq(3).text(questions[i].options[3]);
   nextbtn.style.display = "none";
  }
//function to print question end
//function to check answers start
 
  function check(options){
    attempt++;

    let optionClicked = $(options).data("opt");
  
    // console.log(questions[index]);
  
    if (optionClicked  ==  questions[index].answer){
      $(options).addClass("right");
      score++;
    } else{
     $(options).addClass("wrong");
     wrong++;
   }
    $("#score span").text(score);
    nextbtn.style.display = "inline";

    $(".optionbox span").attr("onclick", "");
  }
  //function to check answers end
  
// function for next question

function showNext(){
  if(index >= questions.length - 1){
    showResult();
    return;
  }
  index++;
  $(".optionbox span").removeClass();
  $(".optionbox span").attr("onclick", "check(this)");
  printQuestion(index);
}
//cfunction for next question ends

//function for Result start
function showResult(){
  $(".quiz_box").hide();
  $(".result_box").show();
  clearInterval();

  // $("#time_taken").text();
  $("#percentage").text(percentageCalculation(score,attempt) + "%");
  $("#attemptQuestion").text(attempt);
  $("#correctAnswers").text(score);
  $("#wrongAnswers").text(wrong);
}
//function for Result ends
const gotohome = document.querySelector(".gohome");

function refreshpage(){
  window.location.reload();
}


                                          //pipes and cisterns questions ends
                                          // probability questions category starts
 let probquestions = [ {
 
    question:"Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
    options: ["1/2","9/8","2/5","9/20",],
    answer:4,
  },
  {
  
    question:"A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
    options: ["10/22","10/21","3/7","2",],
    answer:2,
  },
  {
    
    question:"In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
    options: ["7","6","1/3","5"],
    answer:4,
  },
  {
  
    question:"What is the probability of getting a sum 9 from two throws of a dice?",
    options: ["1/9","1/3","2/3","1/18"],
    answer:1,
  },
  {  
  
    question:"Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
    options: ["3/5","1/5","3/4","4"],
    answer:3,
  },
  {
   
    question:"In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
    options: ["21/46","25/15","1/50","3/25"],
    answer:2,
  },
  {
   
    question:"In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",
    options: ["1/10","108","2/7","5/7"],
    answer:3,
  },
  {
   
    question:"From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",
    options: ["25/57","1/15","1/221","35/256"],
    answer:3,
  },
  {
  
    question:"Two dice are tossed. The probability that the total score is a prime number is:",
    options: ["1/16","5/12"," 1/2","7/8"],
    answer:2,
  },
  {
    
    question:"A card is drawn from a pack of 52 cards. The probability of getting a queen of club or a king of heart is:",
    options: ["1/28","1/52","1/56","1/26",],
    answer:4,
  },]


const pquestions = document.querySelector("#btn2");
const probquetext = document.querySelector(".probque_text");
const probbox = document.querySelector(".proboptionbox");
const probquestion = probquestions.sort(function(){
  return 0.5 - Math.random();
 });
let probindex = 0;


pquestions.onclick = function pquiz(){
  timer();
  PQuestion(probindex);
  infobox.style.display = "none";
  quizBox.style.display = "block";
  quiztitle.innerHTML = "Probability";
  probquetext.style.display = "block";
  probbox.style.display = "grid";
};

function timer(){
  // timer code starts
  let totalTime = 300
  let min = 0;
  let sec = 0;
  let counter = 0;


  let timer = setInterval(function(){
  counter++;
  min = Math.floor((totalTime-counter)/60);
  sec = totalTime- min * 60 - counter;
  
  $("#timer span").text(min + ":" + sec);
  
  if(counter == totalTime){
    clearInterval(timer);
    stopInterval();
   
  } 
  
  },1000);

  var stopInterval = function(){
    alert("You are out of time!");
    showREsult();
  }
 
  //timer code ends
  
};

//function to print question start
function PQuestion(j){
  number++;
  $(".probque_text").text(probquestion[j].question);
     $(".quesno").text(number + "/10");
   $(".proboptionbox span").eq(0).text(probquestion[j].options[0]),
   $(".proboptionbox span").eq(1).text(probquestion[j].options[1]);
   $(".proboptionbox span").eq(2).text(probquestion[j].options[2]);
   $(".proboptionbox span").eq(3).text(probquestion[j].options[3]);
   net_btn.style.display = "none";
  }

//function to print question end

//function to check answers start
 
function checked(option){
  attempt++;

  const optionClicked = $(option).data("oopt");

  // console.log(questions[index]);

  if (optionClicked  ==  probquestion[probindex].answer){
    $(option).addClass("right");
    score++;
  } else{
   $(option).addClass("wrong");
   wrong++;
 }
  $("#score span").text(score);
  net_btn.style.display = "inline";

  $(".proboptionbox span").attr("onclick", "");
}

//function to check answers end

function NextQ(){
  if(probindex >= probquestion.length - 1){
    showREsult();
    return;
  }
  probindex++;
  $(".proboptionbox span").removeClass();
  $(".proboptionbox span").attr("onclick", "checked(this)");
  PQuestion(probindex);
}


//function for Result start
function showREsult(){
  $(".quiz_box").hide();
  $(".result_box").show();
  clearInterval();

  // $("#time_taken").text();
  $("#percentage").text(percentageCalculation(score,attempt) + "%");
  $("#attemptQuestion").text(attempt);
  $("#correctAnswers").text(score);
  $("#wrongAnswers").text(wrong);
}
//function for Result ends

                                             //problems on age category

let agequestions = [{
   
  question: "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
  options: ["2","2 1/2","2 3/4","3",],
  answer: 1,
},
{
 
  question:"The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
  options: ["4","8","10","none",],
  answer:1,

},
{
 
  question: "A father said to his son,'I was as old as you are at the present at the time of your birth.'If the father's age is 38 years now, the son's age five years back was:",
  options: ["14","19","33","38"],
  answer:1
},
{
 
  question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
  options: ["7","8","9","10"],
  answer:4
},
{
 
  question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?:",
  options: ["24","25","29","30"], 
  answer:1
},
{
 
  question:"A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
  options: ["18","15","16","22"],
  answer:4
},
{
 
question:"Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
  options: ["17","15","16","18"],
  answer:3
},
{
question:"The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
  options: ["21","24","20","27"],
  answer:3
},
{

question:"At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
options: ["12","15"," 23","13"],
answer:2
},
{
question:"Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
options: ["24","26.5","25.5","24.5"],
answer:4
},]

const Agequestion = document.querySelector("#btn3");
const agequetext = document.querySelector(".ageque_text");
const agebox = document.querySelector(".ageoptionbox");
const NEXtbtn = document.querySelector(".nt_btn")
const agequestion = agequestions.sort(function(){
  return 0.5 - Math.random();
 });
let ageindex = 0;


Agequestion.onclick = function agequiz(){
  timer();
  AQuestion(ageindex);
  infobox.style.display = "none";
  quizBox.style.display = "block";
  quiztitle.innerHTML = "Problems on Age";
  agequetext.style.display = "block";
  agebox.style.display = "grid";
};


function AQuestion(k){
  number++;
  $(".ageque_text").text(agequestion[k].question);
  $(".quesno").text(number + "/10");
   $(".ageoptionbox span").eq(0).text(agequestion[k].options[0]),
   $(".ageoptionbox span").eq(1).text(agequestion[k].options[1]);
   $(".ageoptionbox span").eq(2).text(agequestion[k].options[2]);
   $(".ageoptionbox span").eq(3).text(agequestion[k].options[3]);
   NEXtbtn.style.display = "none";
  }
  //function to print question end

//function to check answers start
 
function picked(pick){
  attempt++;

  const optionClicked = $(pick).data("pt");

  // console.log(questions[index]);

  if (optionClicked  ==  agequestion[ageindex].answer){
    $(pick).addClass("right");
    score++;
  } else{
   $(pick).addClass("wrong");
   wrong++;
 }
  $("#score span").text(score);
  NEXtbtn.style.display = "inline";

  $(".ageoptionbox span").attr("onclick", "");
}

//function to check answers end

function NExtQ(){
  if(ageindex >= agequestion.length - 1){
    showRESult();
    return;
  }
  ageindex++;
  $(".ageoptionbox span").removeClass();
  $(".ageoptionbox span").attr("onclick", "picked(this)");
  AQuestion(ageindex);
}


//function for Result start
function showRESult(){
  $(".quiz_box").hide();
  $(".result_box").show();
  clearInterval();
  $("#percentage").text(percentageCalculation(score,attempt) + "%");
  $("#attemptQuestion").text(attempt);
  $("#correctAnswers").text(score);
  $("#wrongAnswers").text(wrong);
}
//function for Result ends



                                                                 //problems on age category
                                                                 //problems on profit and loss category

let PLquestions = [ {
 
  question:" A cycle is bought for Rs.900 and sold for Rs.1080, find the gain percent?",
  options: ["12","8","25","20",],
  answer:4,
},
{

  question:"An article is bought for Rs.675 and sold for Rs.900, find the gain percent?",
  options: ["30","10/21","331/3","162/2",],
  answer:3,
},
{
  
  question:"The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
  options: ["15","16","13","25"],
  answer:2,
},
{

  question:"If selling price is doubled, the profit triples. Find the profit percent.",
  options: ["100","130","231","118"],
  answer:1,
},
{  

  question:"In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
  options: ["30%","15%","70%","40%"],
  answer:3,
},
{
 
  question:"A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
  options: ["3","4","5","25"],
  answer:5,
},
{
 
  question:"On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
  options: ["50","10","70","60"],
  answer:4,
},
{
 
  question:"When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
  options: ["Rs. 21,000","Rs. 22,500","Rs. 25,300","Rs. 25,800"],
  answer:3,
},
{

  question:"A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
  options: ["1%","5%","8%","10%"],
  answer:2,
},
{
  
  question:"A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
  options: ["19","52","56","72",],
  answer:4,
},]


const lquestion = document.querySelector("#btn4");
const plquetext = document.querySelector(".plque_text");
const plbox = document.querySelector(".ploptionbox");
const NEXTbtn = document.querySelector(".n_btn")
const plquestion = PLquestions.sort(function(){
  return 0.5 - Math.random();
 });
let plindex = 0;



lquestion.onclick = function plquiz(){
  timer();
  infobox.style.display = "none";
  quizBox.style.display = "block";
  quiztitle.innerHTML = " Profit and Loss";
  plquetext.style.display = "block";
  plbox.style.display = "grid";
  plQuestion(plindex);
};

function plQuestion(l){
  number++;
  $(".plque_text").text(plquestion[l].question);
  $(".quesno").text(number + " /10");
   $(".ploptionbox span").eq(0).text(plquestion[l].options[0]),
   $(".ploptionbox span").eq(1).text(plquestion[l].options[1]);
   $(".ploptionbox span").eq(2).text(plquestion[l].options[2]);
   $(".ploptionbox span").eq(3).text(plquestion[l].options[3]);
   NEXTbtn.style.display = "none";
  }


  //function to check answers start
 
function pick(pic){
  attempt++;

  const optionClicked = $(pic).data("p");

  // console.log(questions[index]);

  if (optionClicked  ==  plquestion[plindex].answer){
    $(pic).addClass("right");
    score++;
  } else{
   $(pic).addClass("wrong");
   wrong++;
 }
  $("#score span").text(score);
  NEXTbtn.style.display = "inline";

  $(".ploptionbox span").attr("onclick", "");
}
//function to check answers end
function NEXtQ(){
  if(plindex >= plquestion.length - 1){
    showRESUlt();
    return;
  }
  plindex++;
  $(".ploptionbox span").removeClass();
  $(".ploptionbox span").attr("onclick", "pick(this)");
  plQuestion(plindex);
}

//function for Result start
function showRESUlt(){
  $(".quiz_box").hide();
  $(".result_box").show();
  clearInterval();
  $("#percentage").text(percentageCalculation(score,attempt) + "%");
  $("#attemptQuestion").text(attempt);
  $("#correctAnswers").text(score);
  $("#wrongAnswers").text(wrong);
}
//function for Result ends