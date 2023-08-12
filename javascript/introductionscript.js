let myBtn = document.getElementsByClassName('restart');
let myDiv = document.getElementById("changeContent")
let flag = 0;

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Have you ever wondered how a metronome works? Or a heartbeat?     Well, the IC555 astable mode is a lot like these things. It's a circuit that generates a continuous square wave, which is a waveform that has a constant amplitude and frequency. The frequency of the square wave is determined by the values of the resistors and capacitor in the circuit. So, by changing the values of the resistors and capacitor, we can change the frequency of the square wave.",
    answer: "",
    options: [
      "	",
      "",
      "",
      ""
    ]
  },
    {
    numb: 2,
    question:"In this experiment, we're going to build our own astable multivibrator circuit. We'll learn how to choose the right values of resistors and capacitors to create a square wave with a specific frequency. And we'll see how we can use the circuit to generate different types of signals.",
    answer: "Cascading Style Sheet",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  //   {
  //   numb: 3,
  //   question: "In this experiment, we're going to build our own astable multivibrator circuit. We'll learn how to choose the right values of resistors and capacitors to create a square wave with a specific frequency. And we'll see how we can use the circuit to generate different types of signals.",
  //   answer: "",
  //   options: [
  //     "	",
  //     "	",
  //     "",
  //     "	"
  //   ]
  // },


];
/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)

  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
      toggle.addEventListener('click', ()=>{
          // show navbar
          nav.classList.toggle('show')
          // change icon
          toggle.classList.toggle('bx-x')
          // add padding to body
          bodypd.classList.toggle('body-pd')
          // add padding to header
          headerpd.classList.toggle('body-pd')
      })
  }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  if(linkColor){
      linkColor.forEach(l=> l.classList.remove('active'))
      this.classList.add('active')
  }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

// Change html on click of continue button
function updateHTML(){
  console.log("clicked");
  flag++;
  if(flag == 1)
  {
    console.log(flag);
    myDiv.innerHTML = "Have you ever wondered how a metronome works? Or a heartbeat? Well, the IC555 astable mode is a lot like these things. It's a circuit that generates a continuous square wave, which is a waveform that has a constant amplitude and frequency. The frequency of the square wave is determined by the values of the resistors and capacitor in the circuit. So, by changing the values of the resistors and capacitor, we can change the frequency of the square wave. And they both use the same basic principle: a circuit that generates a continuous square wave. This circuit is called an astable multivibrator, and it can be built using an IC555 timer.";
  }
  else if(flag == 2)
  {
    console.log(flag);
    myDiv.innerHTML = "In this experiment, we're going to build our own astable multivibrator circuit. We'll learn how to choose the right values of resistors and capacitors to create a square wave with a specific frequency. And we'll see how we can use the circuit to generate different types of signals.";
  }
  else if(flag == 3)
  {
    console.log(flag);
    window.location.href = "../html/Theory.html";
  }
  else
  {
    flag = 0;
  }
}