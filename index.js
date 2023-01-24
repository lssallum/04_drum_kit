'use strict'; //Encontra más práticas e exibe como erro

//CRIA UM JSON COM OS SONS
const usSounds = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav',
}

//CRIA AS TECLAS
const usCreateDiv = (usContent) => {
  const usDiv = document.createElement('div');
  usDiv.classList.add('key');
  usDiv.textContent = usContent;
  usDiv.id = usContent;
  document.getElementById('container').appendChild(usDiv); 
}

const usShowSounds = () => Object.keys(usSounds).forEach(usCreateDiv);

//TOCA O SOM
const usPlaySound = (usKey) => {
  const usAudio = new Audio(`./sounds/${usSounds[usKey]}`)
  usAudio.play();
}
//CAPTURA O EVENTO DOS CLIQUES
const usAddCssEffect = (usKey) => document.getElementById(usKey)
                                        .classList.add('active');

const usRemoveCssEffect = (usKey) => {
  const usDiv = document.getElementById(usKey);
  const usRemoveActive = () => usDiv.classList.remove('active');
  usDiv.addEventListener('transitionend', usRemoveActive)
}

const usActive = (usEvent) => {
  const usKey = usEvent.type == 'click' ? usEvent.target.id : usEvent.key.toUpperCase();

  const usKeyAllowed = usSounds.hasOwnProperty(usKey);
  if (usKeyAllowed) {
   usAddCssEffect(usKey);
   usPlaySound(usKey);
   usRemoveCssEffect(usKey);
  }
}

usShowSounds();
document.getElementById('container')
        .addEventListener('click', usActive); //CAPTURA O EVENTO DAS CLIQUES

//CAPTURA O EVENTO DAS TECLAS
window.addEventListener('keydown', usActive);