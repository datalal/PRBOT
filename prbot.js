// let buffer = new Tone.Buffer();

Tone.context.resume();

const context2 = new Tone.Context();
const context3 = new Tone.Context();
const context4 = new Tone.Context();

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
    
console.log(("Filename: '" + files[ 0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
console.log(player.buffer.duration);
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

var p1loopStart = Math.floor(Math.random() * 201) + 1;;
var p2loopStart = Math.floor(Math.random() * 201) + 1;
var p3loopStart = Math.floor(Math.random() * 201) + 1; 
var p4loopStart = Math.floor(Math.random() * 201) + 1;

var p1loopLength = 3;
var p2loopLength = 3;
var p3loopLength = 3;
var p4loopLength = 3;

var p1stopped = true;
var p2stopped = true;
var p3stopped = true;
var p4stopped = true;

var muteAll = false;

var reverb1on = false;
var reverb2on = false;
var reverb3on = false;
var reverb4on = false;

const reverb = new Tone.Reverb(5).toDestination();
const reverb2 = new Tone.Reverb(5).toDestination();
const reverb3 = new Tone.Reverb(5).toDestination();
const reverb4 = new Tone.Reverb(5).toDestination();

// var colorAccentHue1, colorAccentHue2, colorAccentHue3, colorAccentHue4;
// let player2 = new Tone.Player({
//     url: mp3,
//     context: context2,
//     autostart: true
// });

let player = new Tone.Player(mp3, ()=> {
 document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading').textContent = '';
  document.querySelector('#loading').insertAdjacentHTML('beforeend','loaded');
}).toDestination();

let player2 = new Tone.Player(mp3, ()=> {
    document.querySelectorAll('button').forEach((e)=>e.disabled = false)
     document.querySelector('#loading2').textContent = '';
     document.querySelector('#loading2').insertAdjacentHTML('beforeend','loaded');
   }).toDestination();

let player3 = new Tone.Player(mp3, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading3').textContent = '';
  document.querySelector('#loading3').insertAdjacentHTML('beforeend','loaded');
}).toDestination();

let player4 = new Tone.Player(mp3, ()=> {
document.querySelectorAll('button').forEach((e)=>e.disabled = false)
  document.querySelector('#loading4').textContent = '';
  document.querySelector('#loading4').insertAdjacentHTML('beforeend','loaded');
}).toDestination();

player.playbackRate = 1;
player2.playbackRate = 1;
player3.playbackRate = 1;
player4.playbackRate = 1;

player.reverse = false;
player2.reverse = false;
player3.reverse = false;
player4.reverse = false;

var sVal1;


document.querySelector('#start').addEventListener('click',  (time)=> {
    console.log(Tone.context.state);
    if( Tone.context.state === 'suspended') {
        console.log(Tone.context.state);
        Tone.context.resume();
        if(Tone.Transport.state === "stopped") {Tone.Transport.start();}
        player.start(0, p1loopStart);

        document.querySelector('#start').className = 'ui button active';
        document.querySelector('#stop').className = 'ui button';

    } else {
        console.log(Tone.context.state);
        Tone.context.resume();
        if(Tone.Transport.state === "stopped") {Tone.Transport.start();}
        player.start(0, p1loopStart);

        document.querySelector('#start').className = 'ui button active';
        document.querySelector('#stop').className = 'ui button';    


    }

    colorAccentHue1 = Math.floor(Math.random() * 250) + 1;
    sVal1 = Math.floor(Math.random() * 100) + 1;
    p1stopped = false;
    console.log(p1stopped);


});


document.querySelector('#start').addEventListener('touchstart',  (time)=> {
    console.log(Tone.context.state);
    if( Tone.context.state === 'suspended') {
        console.log(Tone.context.state);
        // Tone.context2.resume();
        if(Tone.Transport.state === "stopped") {Tone.Transport.start();}

        player.start(0, p1loopStart);
        // Tone.Transport.start();       

        document.querySelector('#start').className = 'ui button active';

    } else {
        console.log(Tone.context.state);
        Tone.context.resume();
        if(Tone.Transport.state === "stopped") {Tone.Transport.start();}

        // Tone.Transport.start();       
         player.start(0, p1loopStart);

2
    }
    // await player.start(0, p1loopStart);

    colorAccentHue1 = Math.floor(Math.random() * 250) + 1;
    sVal1 = Math.floor(Math.random() * 100) + 1;
    // console.log("current time: ", player.now());
    // console.log("start time: ", p1loopStart);
    p1stopped = false;
    console.log(p1stopped);


});


document.querySelector('#start2').addEventListener('click',  (time)=> {
    console.log(Tone.context.state);
    if( Tone.context.state === 'suspended') {
        // console.log(Tone.context.state);
        Tone.context.resume();
        if(Tone.Transport.state === "stopped") {Tone.Transport.start();}
        player2.start(0, p2loopStart);
       

        document.querySelector('#start2').className = 'ui button active';
        document.querySelector('#stop2').className = 'ui button';

    } else {
        // console.log(Tone.context.state);
        Tone.context.resume();
        if(Tone.Transport.state === "stopped") {Tone.Transport.start();}
        player2.start(0, p2loopStart);

        document.querySelector('#start2').className = 'ui button active';
        document.querySelector('#stop2').className = 'ui button';    


    }

    colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
    sVal2 = Math.floor(Math.random() * 100) + 1;
    p2stopped = false;
    console.log(p2stopped);


});


document.querySelector('#start2').addEventListener('touchstart',  (time)=> {
    console.log(Tone.context.state);
    if( Tone.context.state === 'suspended') {
        console.log(Tone.context.state);
        Tone.context.resume();
        if(Tone.Transport.state === "stopped"){
            Tone.Transport.start();
        }

        player2.start(0, p2loopStart);

        // schedulePattern2();

        // Tone.Transport.start();       

        document.querySelector('#start2').className = 'ui button active';

    } else {
        console.log(Tone.context.state);
        Tone.context.resume();
        if(Tone.Transport.state === "stopped"){
            Tone.Transport.start();
        }

        player2.start(0, p2loopStart);

        // schedulePattern2();
        // player.start(0, p1loopStart);


    }
    // await player.start(0, p1loopStart);

    colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
    sVal2 = Math.floor(Math.random() * 100) + 1;
    // console.log("current time: ", player.now());
    // console.log("start time: ", p1loopStart);
    p2stopped = false;
    console.log(p2stopped);


});



// document.querySelector('#start2').addEventListener('click', ()=> {
//     colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
//     sVal2 = Math.floor(Math.random() * 100) + 1;
//     player2.start()});
    

document.querySelector('#start3').addEventListener('click', ()=> {
    colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
    sVal3 = Math.floor(Math.random() * 100) + 1;
    player3.start()});
  

document.querySelector('#start4').addEventListener('click', ()=> {
    colorAccentHue4 = Math.floor(Math.random() * 250) + 1;
    sVal4 = Math.floor(Math.random() * 100) + 1;
    player4.start()});

// connect the UI with the components
// document.querySelector("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
// document.querySelector("tone-play-toggle").addEventListener("stop", () => {
//     Tone.Transport.stop();
//     player.stop();

// });

// document.querySelector('#start2').addEventListener('click', ()=> player2.start());

// document.querySelector('#start3').addEventListener('click', ()=> player3.start());

// document.querySelector('#start4').addEventListener('click', ()=> player4.start());
document.querySelector('#reverse1').addEventListener('click', ()=> {
    if(player.reverse == true) {
        player.reverse = false;
        document.querySelector('#reverse1').textContent = 'reverse';

    } else {
        player.reverse = true;
        document.querySelector('#reverse1').textContent = 'forward';

    }
    

    // document.querySelector('#column1').style.backgroundColor = '#aaa';

});

document.querySelector('#reverse2').addEventListener('click', ()=> {
    if(player2.reverse == true) {
        player2.reverse = false;
        document.querySelector('#reverse2').textContent = 'reverse';

    } else {
        player2.reverse = true;
        document.querySelector('#reverse2').textContent = 'forward';

    }
    

    // document.querySelector('#column1').style.backgroundColor = '#aaa';

});


document.querySelector('#stop').addEventListener('click', ()=> {
    p1stopped = true;
    player.stop();
    document.querySelector('#stop').className = 'ui button active';
    document.querySelector('#start').className = 'ui button';

    // document.querySelector('#column1').style.backgroundColor = '#aaa';

});

document.querySelector('#stop2').addEventListener('click', ()=> {
    p2stopped = true;

    player2.stop()
    document.querySelector('#stop2').className = 'ui button active';
    document.querySelector('#start2').className = 'ui button';
});


document.querySelector('#stop3').addEventListener('click', ()=> {
    p3stopped = true;

    player3.stop()
    document.querySelector('#stop3').className = 'ui button active';
    document.querySelector('#start3').className = 'ui button';
});

document.querySelector('#stop4').addEventListener('click', ()=> {
    p3stopped = true;

    player4.stop();
    document.querySelector('#stop4').className = 'ui button active';
    document.querySelector('#start4').className = 'ui button';
});

document.querySelector('#mute1').addEventListener('click', ()=> {
  if(player1isMuted){
      player.mute = false;
      player1isMuted = false;
      document.querySelector('#mute1').className = 'mini ui black basic button';


  } else {
      player.mute = true;
      player1isMuted = true;
      document.querySelector('#mute1').className = 'mini ui red basic button';

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

document.querySelector('#muteAll').addEventListener('click', ()=> {
    if(muteAll){
        Tone.Destination.mute = false;
        muteAll = false;
        document.querySelector('#muteAll').className = 'mini ui black basic button';

    } else {
        Tone.Destination.mute = true;
        muteAll = true;
        document.querySelector('#muteAll').className = 'mini ui red basic button';

    }
    
  }, false)


  document.querySelector('#reverb1').addEventListener('click', ()=> {
    if(reverb1on){
        player.disconnect(reverb)
        reverb1on = false;
        document.querySelector('#reverb1').className = 'mini ui black basic button';
  
    } else {
        player.connect(reverb)
        reverb1on = true;
        document.querySelector('#reverb1').className = 'mini ui inverted blue button';
    }
    
  }, false)

  document.querySelector('#reverb2').addEventListener('click', ()=> {
    if(reverb2on){
        player2.disconnect(reverb2)
        reverb2on = false;
        document.querySelector('#reverb2').className = 'mini ui black basic button';
  
    } else {
        player2.connect(reverb2)
        reverb2on = true;
        document.querySelector('#reverb2').className = 'mini ui inverted blue button';
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
  p1stopped = false;
  console.log(p1loopStart);
  player.stop();
  player.start(0, p1loopStart);
//   player.restart(0, p1loopStart);

}, false)

document.querySelector('#reloop2').addEventListener('click', ()=> {
  p2loopStart = Math.floor(Math.random() * 101) + 1;
  colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
  sVal2 = Math.floor(Math.random() * 100) + 1;
  console.log('reloop p2loopStart');
  p2stopped = false;
  console.log(p2loopStart);
  player2.stop();
  player2.start(0, p1loopStart);
//   player2.loopStart = p2loopStart;
//   player2.loopEnd = p2loopStart + 3;
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

document.querySelector('#loopLength1').addEventListener('input', (e)=> {
    let val = e.currentTarget.value;
    document.querySelector('#loopLength1val').value = val;
    Tone.Transport.cancel(0);
    p1loopLength = val;
    console.log(p1loopLength);
    schedulePattern1();
    schedulePattern2();


  }, false)

  document.querySelector('#loopLength2').addEventListener('input', (e)=> {
    let val = e.currentTarget.value;
    document.querySelector('#loopLength2val').value = val;
    Tone.Transport.cancel(0);
    p2loopLength = val;
    console.log(p2loopLength);
    schedulePattern1();
    schedulePattern2();

  }, false)



// player.loopStart = p1loopStart;
// player2.loopStart = p2loopStart;
// player3.loopStart = p3loopStart;
// player4.loopStart = p4loopStart;

// player.loopEnd = p1loopStart + 3;
// player2.loopEnd = p2loopStart + 3;
// player3.loopEnd = p3loopStart + 3;
// player4.loopEnd = p4loopStart + 3;

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

// var loop = new Tone.Loop(function(time){
// 	//triggered every eighth note. 
//     player.restart(0);
// 	console.log("3 sec"); 
//     console.log(time);
//     console.log('restart p1loopStart');

//     console.log(p1loopStart);
// }, 3).sync().start(0);

// var loop2 = new Tone.Loop(function(time){
// 	//triggered every eighth note. 
//     player2.restart();
// 	console.log("loop2 3 sec"); 
//     console.log(time);

// }, p2loopLength).sync(0).start();

Tone.Transport.scheduleRepeat((time) => {
	// use the callback time to schedule events
    // player.restart(time);
    // player.unsync().stop().sync().start(p1loopStart, 0)
    if(p1stopped == false){
        player.stop();
        player.start(0, p1loopStart);
        console.log('restart p1loopStart');
        console.log(p1loopLength);

    }
}, p1loopLength);

Tone.Transport.scheduleRepeat((time) => {
	// use the callback time to schedule events
    // player.restart(time);
    // player.unsync().stop().sync().start(p1loopStart, 0)
    if(p2stopped == false){
        player2.stop();
        player2.start(0, p2loopStart);
        console.log('restart p2loopStart');
        console.log(p2loopLength);

    }
}, p2loopLength);

let schedulePattern1 = () => {
    Tone.Transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        // player.restart(time);
        // player.unsync().stop().sync().start(p1loopStart, 0)

        if(p1stopped == false){
            player.stop();
            player.start(0, p1loopStart);
            console.log('restart p1loopStart');
            console.log(p1loopLength);
    
        }
    }, p1loopLength);
}

let schedulePattern2 = () => {
    Tone.context.transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        // player.restart(time);
        // player.unsync().stop().sync().start(p1loopStart, 0)

        if(p1stopped == false){
            player2.stop();
            player2.start(0, p2loopStart);
            console.log('restart p2loopStart');
            console.log(p2loopLength);
    
        }
    }, p2loopLength);
}

console.log(Tone.Transport);