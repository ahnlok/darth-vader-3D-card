// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const vader = document.querySelector('.vader img');
const description = document.querySelector('.description-role');
const descriptionPower = document.querySelector('.description-power');
const descriptionSaber = document.querySelector('.description-saber');
const descriptionName = document.querySelector('.description-name');
const button = document.querySelector('.button button');


// Moving animation event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});


// Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';
  // Pop Out
  title.style.transform ='translateZ(120px) rotateZ(-10deg)';
  vader.style.transform ='translateZ(150px) rotateZ(-10deg)';
  description.style.transform ='translateZ(75px) rotateZ(-10deg)';
  descriptionPower.style.transform ='translateZ(75px) rotateZ(-10deg)';
  descriptionSaber.style.transform ='translateZ(75px) rotateZ(-10deg)';
  descriptionName.style.transform ='translateZ(75px) rotateZ(-10deg)';
  button.style.transform ='translateZ(75px) rotateZ(-10deg)';
});

// Animate Out
container.addEventListener('mouseleave', e => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Pop Back
  title.style.transform = 'translateZ(0px) rotateZ(0deg)';
  vader.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px) rotate(0deg)';
  descriptionPower.style.transform = 'translateZ(0px) rotate(0deg)';
  descriptionSaber.style.transform = 'translateZ(0px) rotate(0deg)';
  descriptionName.style.transform = 'translateZ(0px) rotate(0deg)';
  button.style.transform = 'translateZ(0px) rotate(0deg)';
});

// Audio on Button Click
function playMusic() {
  var audio1 = document.getElementById("audio");
    if(audio1.paused) {
      audio1.play()
    } 
    else {
      audio1.pause();
    }
}