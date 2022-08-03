let buffer = new Tone.Buffer();

// let player = new Tone.Player(mp3, ()=> {
// document.querySelectorAll('button').forEach((e)=>e.disabled = false)
//   document.querySelector('#loading2').textContent = '';
//   document.querySelector('#loading2').insertAdjacentHTML('beforeend','loaded');
// }).toMaster();

function readFile1(files) {
	var fileReader = new FileReader();
	fileReader.readAsArrayBuffer(files[0]);
	fileReader.onload = function(e) {
      var binaryData = [];
      binaryData.push(files[0]);
      var blob = window.URL.createObjectURL(new Blob(binaryData, {type: "audio/mpeg"}));
    
player.load(blob, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading1').textContent = '';
  document.querySelector('#loading1').insertAdjacentHTML('beforeend','loaded');
});   
    
console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
			}
	}

function readFile2(files) {
	var fileReader = new FileReader();
	fileReader.readAsArrayBuffer(files[0]);
	fileReader.onload = function(e) {
      var binaryData = [];
      binaryData.push(files[0]);
      var blob = window.URL.createObjectURL(new Blob(binaryData, {type: "audio/mpeg"}));
        
player2.load(blob, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading2').textContent = '';
  document.querySelector('#loading2').insertAdjacentHTML('beforeend','loaded');
});                                      

console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
			}
	}

function readFile3(files) {
	let fileReader = new FileReader();
	fileReader.readAsArrayBuffer(files[0]);
	fileReader.onload = function(e) {
      let binaryData = [];
      binaryData.push(files[0]);
      let blob = window.URL.createObjectURL(new Blob(binaryData, {type: "audio/mpeg"}));
                                     
player3.load(blob, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading3').textContent = '';
  document.querySelector('#loading3').insertAdjacentHTML('beforeend','loaded');
});  
     

console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
			}
	}
function readFile4(files) {
	var fileReader = new FileReader();
	fileReader.readAsArrayBuffer(files[0]);
	fileReader.onload = function(e) {
      var binaryData = [];
      binaryData.push(files[0]);
      var blob = window.URL.createObjectURL(new Blob(binaryData, {type: "audio/mpeg"}));
    
 player4.load(blob, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading4').textContent = '';
  document.querySelector('#loading4').insertAdjacentHTML('beforeend','loaded');
});  

console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
			}
	}


// let mp3 = new Tone.Buffer('https://www.mfiles.co.uk/mp3-downloads/handel-dead-march-from-saul.mp3');

const mp3 = 'https://www.mfiles.co.uk/mp3-downloads/handel-dead-march-from-saul.mp3';
var player1isMuted, player2isMuted, player3isMuted, player4isMuted;
// var p1loopStart = Math.floor(Math.random() * 101) + 1;
var p1loopStart = 0;

var p2loopStart = Math.floor(Math.random() * 201) + 1;
var p3loopStart = Math.floor(Math.random() * 201) + 1; 
var p4loopStart = Math.floor(Math.random() * 201) + 1;

var p1loopLength = 2;
var p2loopLength = 2;
var p3loopLength = 2;
var p4loopLength = 2;

Tone.Transport.bpm.value = 108;
Tone.Transport.loop = true;
Tone.Transport.loopStart = "4m";
Tone.Transport.loopEnd = "8m";

var colorAccentHue1, colorAccentHue2, colorAccentHue3, colorAccentHue4;

let player = new Tone.Player({
    url: mp3,
    loop: true
}).toDestination().sync().start(p1loopStart);

let player2 = new Tone.Player({
    url: mp3,
    loop: true
}).toDestination().sync().start(0);
// let player = new Tone.Player(mp3, ()=> {
//  document.querySelectorAll('button').forEach((e)=>e.disabled = false)
//   document.querySelector('#loading').textContent = '';
//   document.querySelector('#loading').insertAdjacentHTML('beforeend','loaded');
// }).toDestination().sync().start(0);
// let player2 = new Tone.Player(mp3, ()=> {
// document.querySelectorAll('button').forEach((e)=>e.disabled = false)
//   document.querySelector('#loading2').textContent = '';
//   document.querySelector('#loading2').insertAdjacentHTML('beforeend','loaded');
// }).toMaster();

let player3 = new Tone.Player(mp3, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading3').textContent = '';
  document.querySelector('#loading3').insertAdjacentHTML('beforeend','loaded');
}).toMaster();

let player4 = new Tone.Player(mp3, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading4').textContent = '';
  document.querySelector('#loading4').insertAdjacentHTML('beforeend','loaded');
}).toMaster();

player.playbackRate = 1;
player2.playbackRate = 1;
player3.playbackRate = 1;
player4.playbackRate = 1;

// player.loop = true;
// player2.loop = true;
player3.loop = true;
player4.loop = true;

var sVal1;

// document.querySelector('#start').addEventListener('click', ()=> {
//     colorAccentHue1 = Math.floor(Math.random() * 250) + 1;
//     sVal1 = Math.floor(Math.random() * 100) + 1;
//     player.sync().start(0)});


document.querySelector('#start2').addEventListener('click', ()=> {
    colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
    sVal2 = Math.floor(Math.random() * 100) + 1;
    player2.start()});
    

document.querySelector('#start3').addEventListener('click', ()=> {
    colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
    sVal3 = Math.floor(Math.random() * 100) + 1;
    player3.start()});
  

document.querySelector('#start4').addEventListener('click', ()=> {
    colorAccentHue4 = Math.floor(Math.random() * 250) + 1;
    sVal4 = Math.floor(Math.random() * 100) + 1;
    player4.start()});

// connect the UI with the components
document.querySelector("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
document.querySelector("tone-play-toggle").addEventListener("stop", () => Tone.Transport.stop());

// document.querySelector('#start2').addEventListener('click', ()=> player2.start());

// document.querySelector('#start3').addEventListener('click', ()=> player3.start());

// document.querySelector('#start4').addEventListener('click', ()=> player4.start());

document.querySelector('#stop').addEventListener('click', ()=> {
    player.stop()
    document.querySelector('#column1').style.backgroundColor = '#aaa';

});

document.querySelector('#stop2').addEventListener('click', ()=> player2.stop());

document.querySelector('#stop3').addEventListener('click', ()=> player3.stop());

document.querySelector('#stop4').addEventListener('click', ()=> player4.stop());

document.querySelector('#mute1').addEventListener('click', ()=> {
  if(player1isMuted){
      player.mute = false;
      player1isMuted = false;

  } else {
      player.mute = true;
      player1isMuted = true;
  }
  
}, false)

document.querySelector('#mute2').addEventListener('click', ()=> {
  if(player2isMuted){
      player2.mute = false;
      player2isMuted = false;

  } else {
      player2.mute = true;
      player2isMuted = true;
  }
  
}, false)

document.querySelector('#mute3').addEventListener('click', ()=> {
  if(player3isMuted){
      player3.mute = false;
      player3isMuted = false;

  } else {
      player3.mute = true;
      player3isMuted = true;
  }
  
}, false)

document.querySelector('#mute4').addEventListener('click', ()=> {
  if(player4isMuted){
      player4.mute = false;
      player4isMuted = false;

  } else {
      player4.mute = true;
      player4isMuted = true;
  }
  
}, false)

// document.querySelector('#p1loopLength').addEventListener('input', (e)=> {
//   let val = e.currentTarget.value;
//   document.querySelector('#p1loopLengthOutput').value = val;
//   p1loopLength = val;
// }, false)

document.querySelector('#reloop1').addEventListener('click', ()=> {
  p1loopStart = Math.floor(Math.random() * 101) + 1;
  colorAccentHue1 = Math.floor(Math.random() * 250) + 1;
  sVal1 = Math.floor(Math.random() * 100) + 1;
  console.log('reloop p1loopStart');

  console.log(p1loopStart);
  player.restart(22);

//   player.loopStart = p1loopStart;
//   player.loopEnd = p1loopStart + p1loopLength;
}, false)

document.querySelector('#reloop2').addEventListener('click', ()=> {
  p2loopStart = Math.floor(Math.random() * 101) + 1;
  colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
  sVal2 = Math.floor(Math.random() * 100) + 1;
  player2.loopStart = p2loopStart;
  player2.loopEnd = p2loopStart + 3;
}, false)

document.querySelector('#reloop3').addEventListener('click', ()=> {
  p3loopStart = Math.floor(Math.random() * 101) + 1;
  colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
  sVal3 = Math.floor(Math.random() * 100) + 1;
  player3.loopStart = p3loopStart;
  player3.loopEnd = p3loopStart + 3;
}, false)

document.querySelector('#reloop4').addEventListener('click', ()=> {
  p4loopStart = Math.floor(Math.random() * 101) + 1;
  colorAccentHue4 = Math.floor(Math.random() * 250) + 1;
  sVal4 = Math.floor(Math.random() * 100) + 1;
  player4.loopStart = p4loopStart;
  player4.loopEnd = p4loopStart + 3;
}, false)

document.querySelector('#pbrS').addEventListener('input', (e)=> {
  let val = e.currentTarget.value;
  document.querySelector('#pbrO').value = val;
  player.playbackRate = val;
}, false)

document.querySelector('#pbrS2').addEventListener('input', (e)=> {
  let val2 = e.currentTarget.value;
  document.querySelector('#pbr2').value = val2;
  player2.playbackRate = val2;
}, false)

document.querySelector('#pbrS3').addEventListener('input', (e)=> {
  let val3 = e.currentTarget.value;
  document.querySelector('#pbr3').value = val3;
  player3.playbackRate = val3;
}, false)

document.querySelector('#pbrS4').addEventListener('input', (e)=> {
  let val4 = e.currentTarget.value;
  document.querySelector('#pbr4').value = val4;
  player4.playbackRate = val4;
}, false)

document.querySelector('#p1Volume').addEventListener('input', (e)=> {
  let val = e.currentTarget.value;
  document.querySelector('#p1VolOut').value = val;
  player.volume.value = val;
}, false)

document.querySelector('#p2Volume').addEventListener('input', (e)=> {
  let val = e.currentTarget.value;
  document.querySelector('#p2VolOut').value = val;
  player2.volume.value = val;
}, false)

document.querySelector('#p3Volume').addEventListener('input', (e)=> {
  let val = e.currentTarget.value;
  document.querySelector('#p3VolOut').value = val;
  player3.volume.value = val;
}, false)

document.querySelector('#p4Volume').addEventListener('input', (e)=> {
  let val = e.currentTarget.value;
  document.querySelector('#p4VolOut').value = val;
  player4.volume.value = val;
}, false)

player.loopStart = p1loopStart;
player2.loopStart = p2loopStart;
player3.loopStart = p3loopStart;
player4.loopStart = p4loopStart;

player.loopEnd = p1loopStart + 3;
player2.loopEnd = p2loopStart + 3;
player3.loopEnd = p3loopStart + 3;
player4.loopEnd = p4loopStart + 3;

// console.log(player.state);
var lVal1 = 20;
var lVal2 = 20;
var lVal3 = 20;
var lVal4 = 20;

// setInterval(() => {
//     // let colorAccentHue = "240";
//     lVal1 = lVal1 + 2;
//     lVal2 = lVal2 + 2;
//     lVal3 = lVal3 + 2;
//     lVal4 = lVal4 + 2;

//     if(lVal1 > 55){
//         lVal1 = 20;
//     }

//     if(lVal2 > 55){
//         lVal2 = 20;
//     }

//     if(lVal3 > 55){
//         lVal3 = 20;
//     }

//     if(lVal4 > 55){
//         lVal4 = 20;
//     }


//     // document.querySelector('#column1').style.backgroundColor = `hsl(${colorAccentHue1}, ${sVal1}%, ${lVal1}%)`
//     // document.querySelector('#column2').style.backgroundColor = `hsl(${colorAccentHue2}, ${sVal2}%, ${lVal2}%)`
//     // document.querySelector('#column3').style.backgroundColor = `hsl(${colorAccentHue3}, ${sVal3}%, ${lVal3}%)`
//     // document.querySelector('#column4').style.backgroundColor = `hsl(${colorAccentHue4}, ${sVal4}%, ${lVal4}%)`


//     console.log("blockTime: ", Tone.Destination.blockTime);
//     console.log("progress", Tone.Transport.progress);
//     console.log("sampleTime", Tone.Transport.sampleTime);

//     // console.log(player.position);
//     // console.log(buffer);
//     // console.log(player.context.state);

// }, 400);

// Tone.Transport.scheduleRepeat((time) => {
//     console.log("scheduled");

// }, "1m");

var loop = new Tone.Loop(function(time){
	//triggered every eighth note. 
    player.restart(0);
	console.log("3 sec"); 
    console.log(time);
    console.log('restart p1loopStart');

    console.log(p1loopStart);
}, 3).sync().start(0);

// var loop2 = new Tone.Loop(function(time){
// 	//triggered every eighth note. 
//     player2.restart();
// 	console.log("loop2 3 sec"); 
//     console.log(time);

// }, p2loopLength).sync(0).start();