// let buffer = new Tone.Buffer();


Tone.context.resume();

const context2 = new Tone.Context();
const context3 = new Tone.Context();
const context4 = new Tone.Context();
const context5 = new Tone.Context();

context2.resume();
context3.resume();
context4.resume();
context5.resume();

context2.name = "Context2";
context3.name = "Context3";
context4.name = "Context4";
context5.name = "Context5";

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

const reverb = new Tone.Reverb({
    context: context2,
    decay: 5
}).toDestination();
const reverb2 = new Tone.Reverb({
    context: context3,
    decay: 5
}).toDestination();
const reverb3 = new Tone.Reverb({
    context: context4,
    decay: 5
}).toDestination();
const reverb4 = new Tone.Reverb({
    context: context5,
    decay: 5
}).toDestination();

// var colorAccentHue1, colorAccentHue2, colorAccentHue3, colorAccentHue4;
// let player2 = new Tone.Player({
//     url: mp3,
//     context: context2,
//     autostart: true
// });


let player = new Tone.Player({
    url: mp3,
    context: context2,
    onload: ()=>{
        document.querySelectorAll('button').forEach((e)=>e.disabled = false)
        document.querySelector('#loading').textContent = '';
        document.querySelector('#loading').insertAdjacentHTML('beforeend','loaded');
    }

}).toDestination();

let player2 = new Tone.Player({
    url: mp3,
    context: context3,
    onload: ()=>{
        document.querySelectorAll('button').forEach((e)=>e.disabled = false)
        document.querySelector('#loading').textContent = '';
        document.querySelector('#loading').insertAdjacentHTML('beforeend','loaded');
    }

}).toDestination();

let player3 = new Tone.Player({
    url: mp3,
    context: context4,
    onload: ()=>{
        document.querySelectorAll('button').forEach((e)=>e.disabled = false)
        document.querySelector('#loading').textContent = '';
        document.querySelector('#loading').insertAdjacentHTML('beforeend','loaded');
    }

}).toDestination();

let player4 = new Tone.Player({
    url: mp3,
    context: context5,
    onload: ()=>{
        document.querySelectorAll('button').forEach((e)=>e.disabled = false)
        document.querySelector('#loading').textContent = '';
        document.querySelector('#loading').insertAdjacentHTML('beforeend','loaded');
    }

}).toDestination();

// let player2 = new Tone.Player(mp3, ()=> {
//     document.querySelectorAll('button').forEach((e)=>e.disabled = false)
//      document.querySelector('#loading2').textContent = '';
//      document.querySelector('#loading2').insertAdjacentHTML('beforeend','loaded');
// }).toDestination();

// let player3 = new Tone.Player(mp3, ()=> {
// document.querySelectorAll('button').forEach((e)=>e.disabled = false)
//   document.querySelector('#loading3').textContent = '';
//   document.querySelector('#loading3').insertAdjacentHTML('beforeend','loaded');
// }).toDestination();

// let player4 = new Tone.Player(mp3, ()=> {
// document.querySelectorAll('button').forEach((e)=>e.disabled = false)
//   document.querySelector('#loading4').textContent = '';
//   document.querySelector('#loading4').insertAdjacentHTML('beforeend','loaded');
// }).toDestination();

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
    console.log(context2.state);
    if( context2.state === 'suspended') {
        console.log(context2.state);
        context2.resume();
        if(context2.transport.state === "stopped"){context2.transport.start();}
        player.start(0, p1loopStart);
        schedulePattern1();

        document.querySelector('#start').className = 'ui button active';
        document.querySelector('#stop').className = 'ui button';

    } else {
        console.log(context2.state);
        context2.resume();
        if(context2.transport.state === "stopped"){context2.transport.start();}
        player.start(0, p1loopStart);
        schedulePattern1();

        document.querySelector('#start').className = 'ui button active';
        document.querySelector('#stop').className = 'ui button';    


    }

    

    colorAccentHue1 = Math.floor(Math.random() * 250) + 1;
    sVal1 = Math.floor(Math.random() * 100) + 1;
    p1stopped = false;
    console.log(p1stopped);


});

document.querySelector('#start').addEventListener('mousedown',  (time)=> {
    console.log(context2.state);
    if( context2.state === 'suspended') {
        console.log(context2.state);
        context2.resume();
        if(context2.transport.state === "stopped"){context2.transport.start();}
        player.start(0, p1loopStart);
        schedulePattern1();


        document.querySelector('#start').className = 'ui button active';
        document.querySelector('#stop').className = 'ui button';

    } else {
        console.log(context2.state);
        context2.resume();
        if(context2.transport.state === "stopped"){context2.transport.start();}
        player.start(0, p1loopStart);
        schedulePattern1();


        document.querySelector('#start').className = 'ui button active';
        document.querySelector('#stop').className = 'ui button';    


    }

    

    colorAccentHue1 = Math.floor(Math.random() * 250) + 1;
    sVal1 = Math.floor(Math.random() * 100) + 1;
    p1stopped = false;
    console.log(p1stopped);


});


document.querySelector('#start').addEventListener('touchstart',  (time)=> {
    console.log(context2.state);
    if( context2.state === 'suspended') {
        console.log(context2.state);
        // Tone.context2.resume();
        if(context2.transport.state === "stopped"){Tone.Transport.start();}

        player.start(0, p1loopStart);
        // Tone.Transport.start(); 
        schedulePattern1();
      

        document.querySelector('#start').className = 'ui button active';

    } else {
        console.log(Tone.context.state);
        context2.resume();
        if(context2.transport.state === "stopped"){Tone.Transport.start();}

        // Tone.Transport.start();       
         player.start(0, p1loopStart);
         schedulePattern1();

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
    console.log(context3.state);
    if( context3.state === 'suspended') {
        // console.log(Tone.context.state);
        context3.resume();
        if(context3.transport.state === "stopped"){context3.transport.start();}
        player2.start(0, p2loopStart);
        context2.transport.cancel(0);

        schedulePattern2();


        document.querySelector('#start2').className = 'ui button active';
        document.querySelector('#stop2').className = 'ui button';

    } else {
        console.log(Tone.context.state);
        context3.resume();
        if(context3.transport.state === "stopped"){context3.transport.start();}
        player2.start(0, p2loopStart);
        context2.transport.cancel(0);

        schedulePattern2();

        document.querySelector('#start2').className = 'ui button active';
        document.querySelector('#stop2').className = 'ui button';    

    }

    colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
    sVal2 = Math.floor(Math.random() * 100) + 1;
    p2stopped = false;
    console.log(p2stopped);


});

document.querySelector('#start2').addEventListener('mousedown',  (time)=> {
    console.log(context3.state);
    if( context3.state === 'suspended') {
        console.log(context3.state);
        context3.resume();
        if(context3.transport.state === "stopped"){context3.transport.start();}
        player2.start(0, p2loopStart);
        context2.transport.cancel(0);

        schedulePattern2();


        document.querySelector('#start2').className = 'ui button active';
        document.querySelector('#stop2').className = 'ui button';

    } else {
        console.log(context3.state);
        context3.resume();
        if(context3.transport.state === "stopped"){context3.transport.start();}
        player2.start(0, p2loopStart);
        context2.transport.cancel(0);

        schedulePattern2();

        document.querySelector('#start2').className = 'ui button active';
        document.querySelector('#stop2').className = 'ui button';    

    }

    colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
    sVal2 = Math.floor(Math.random() * 100) + 1;
    p2stopped = false;
    console.log(p2stopped);


});


document.querySelector('#start2').addEventListener('touchstart',  (time)=> {
    console.log(context3.state);
    if( context3.state === 'suspended') {
        console.log(Tone.context.state);
        context3.resume();
        if(context3.transport.state === "stopped"){
            context3.transport.start();
        }

        player2.start(0, p2loopStart);
        context2.transport.cancel(0);

        schedulePattern2();

        // schedulePattern2();

        // Tone.Transport.start();       

        document.querySelector('#start2').className = 'ui button active';

    } else {
        console.log(context3.state);
        context3.resume();
        if(context3.transport.state === "stopped"){
            context3.transport.start();
        }

        player2.start(0, p2loopStart);
        context2.transport.cancel(0);

        schedulePattern2();




    }

    colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
    sVal2 = Math.floor(Math.random() * 100) + 1;
    // console.log("current time: ", player.now());
    // console.log("start time: ", p1loopStart);
    p2stopped = false;
    console.log(p2stopped);


});

document.querySelector('#start3').addEventListener('click',  (time)=> {
    console.log(context4.state);
    if( context4.state === 'suspended') {
        // console.log(Tone.context.state);
        context4.resume();
        if(context4.transport.state === "stopped") {context4.transport.start();}
        player3.start(0, p3loopStart);
        context4.transport.cancel(0);

        schedulePattern3();


        document.querySelector('#start3').className = 'ui button active';
        document.querySelector('#stop3').className = 'ui button';

    } else {
        // console.log(Tone.context.state);
        context4.resume();
        if(context4.transport.state === "stopped") {context4.transport.start();}
        player3.start(0, p3loopStart);
        context4.transport.cancel(0);

        schedulePattern3();

        document.querySelector('#start3').className = 'ui button active';
        document.querySelector('#stop3').className = 'ui button';    


    }

    colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
    sVal3 = Math.floor(Math.random() * 100) + 1;
    p3stopped = false;
    console.log(p3stopped);


});

document.querySelector('#start3').addEventListener('mousedown',  (time)=> {
    console.log(context4.state);
    if( context4.state === 'suspended') {
        // console.log(Tone.context.state);
        context4.resume();
        if(context4.transport.state === "stopped") {context4.transport.start();}
        player3.start(0, p3loopStart);
        context4.transport.cancel(0);

        schedulePattern3();

        document.querySelector('#start3').className = 'ui button active';
        document.querySelector('#stop3').className = 'ui button';

    } else {
        // console.log(Tone.context.state);
        context4.resume();
        if(context4.transport.state === "stopped") {context4.transport.start();}
        player3.start(0, p3loopStart);
        context4.transport.cancel(0);

        schedulePattern3();

        document.querySelector('#start3').className = 'ui button active';
        document.querySelector('#stop3').className = 'ui button';    


    }

    colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
    sVal3 = Math.floor(Math.random() * 100) + 1;
    p3stopped = false;
    console.log(p3stopped);


});


document.querySelector('#start3').addEventListener('touchstart',  (time)=> {
    console.log(context4.state);
    if( context4.state === 'suspended') {
        console.log(context4.state);
        context4.resume();
        if(context4.transport.state === "stopped"){
            context4.transport.start();
        }

        player3.start(0, p3loopStart);
        context4.transport.cancel(0);

        schedulePattern3();

        // schedulePattern2();

        // Tone.Transport.start();       

        document.querySelector('#start3').className = 'ui button active';

    } else {
        console.log(Tone.context.state);
        context4.resume();
        if(context4.transport.state === "stopped"){
            context4.transport.start();
        }

        player3.start(0, p3loopStart);
        context4.transport.cancel(0);

        schedulePattern3();

        // schedulePattern2();
        // player.start(0, p1loopStart);


    }
    // await player.start(0, p1loopStart);

    colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
    sVal3 = Math.floor(Math.random() * 100) + 1;
    // console.log("current time: ", player.now());
    // console.log("start time: ", p1loopStart);
    p3stopped = false;
    // console.log(p2stopped);


});

document.querySelector('#start4').addEventListener('click',  (time)=> {
    console.log(context4.state);
    if( context5.state === 'suspended') {
        // console.log(Tone.context.state);
        context5.resume();
        if(context5.transport.state === "stopped") {context5.transport.start();}
        player4.start(0, p4loopStart);
        context5.transport.cancel(0);

        schedulePattern4();


        document.querySelector('#start4').className = 'ui button active';
        document.querySelector('#stop4').className = 'ui button';

    } else {
        // console.log(Tone.context.state);
        context5.resume();
        if(context5.transport.state === "stopped") {context5.transport.start();}
        player4.start(0, p4loopStart);
        context5.transport.cancel(0);

        schedulePattern4();

        document.querySelector('#start4').className = 'ui button active';
        document.querySelector('#stop4').className = 'ui button';    


    }

    colorAccentHue4 = Math.floor(Math.random() * 250) + 1;
    sVal4 = Math.floor(Math.random() * 100) + 1;
    p4stopped = false;
    // console.log(p3stopped);


});

document.querySelector('#start4').addEventListener('click',  (time)=> {
    console.log(context5.state);
    if( context5.state === 'suspended') {
        console.log(context5.state);
        context5.resume();
        if(context5.transport.state === "stopped") {context5.transport.start();}
        player4.start(0, p4loopStart);
        context5.transport.cancel(0);

       
        schedulePattern4();

        document.querySelector('#start4').className = 'ui button active';
        document.querySelector('#stop4').className = 'ui button';

    } else {
        console.log(context5.state);
        context5.resume();
        if(context5.transport.state === "stopped") {context5.transport.start();}
        player4.start(0, p4loopStart);
        context5.transport.cancel(0);

        schedulePattern4();

        document.querySelector('#start4').className = 'ui button active';
        document.querySelector('#stop4').className = 'ui button';    


    }

    colorAccentHue4 = Math.floor(Math.random() * 250) + 1;
    sVal4 = Math.floor(Math.random() * 100) + 1;
    p4stopped = false;
    // console.log(p3stopped);


});

// document.querySelector('#start2').addEventListener('click', ()=> {
//     colorAccentHue2 = Math.floor(Math.random() * 250) + 1;
//     sVal2 = Math.floor(Math.random() * 100) + 1;
//     player2.start()});
    

// document.querySelector('#start3').addEventListener('click', ()=> {
//     colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
//     sVal3 = Math.floor(Math.random() * 100) + 1;
//     player3.start()});
  

// document.querySelector('#start4').addEventListener('click', ()=> {
//     colorAccentHue4 = Math.floor(Math.random() * 250) + 1;
//     sVal4 = Math.floor(Math.random() * 100) + 1;
//     player4.start()});

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

document.querySelector('#reverse3').addEventListener('click', ()=> {
    if(player3.reverse == true) {
        player3.reverse = false;
        document.querySelector('#reverse3').textContent = 'reverse';

    } else {
        player3.reverse = true;
        document.querySelector('#reverse3').textContent = 'forward';

    }
    

    // document.querySelector('#column1').style.backgroundColor = '#aaa';

});

document.querySelector('#reverse4').addEventListener('click', ()=> {
    if(player4.reverse == true) {
        player4.reverse = false;
        document.querySelector('#reverse4').textContent = 'reverse';

    } else {
        player4.reverse = true;
        document.querySelector('#reverse4').textContent = 'forward';

    }
    

    // document.querySelector('#column1').style.backgroundColor = '#aaa';

});

document.querySelector('#stop').addEventListener('click', ()=> {
    p1stopped = true;
    player.stop();
    context2.transport.cancel(0);

    document.querySelector('#stop').className = 'ui button active';
    document.querySelector('#start').className = 'ui button';

    // document.querySelector('#column1').style.backgroundColor = '#aaa';

});

document.querySelector('#stop2').addEventListener('click', ()=> {
    p2stopped = true;

    player2.stop();
    context3.transport.cancel(0);

    document.querySelector('#stop2').className = 'ui button active';
    document.querySelector('#start2').className = 'ui button';
});


document.querySelector('#stop3').addEventListener('click', ()=> {
    p3stopped = true;

    player3.stop();
    context3.transport.cancel(0);

    document.querySelector('#stop3').className = 'ui button active';
    document.querySelector('#start3').className = 'ui button';
});

document.querySelector('#stop4').addEventListener('click', ()=> {
    p3stopped = true;

    player4.stop();
    context4.transport.cancel(0);

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
      document.querySelector('#mute2').className = 'mini ui black basic button';


  } else {
      player2.mute = true;
      player2isMuted = true;
      document.querySelector('#mute2').className = 'mini ui red basic button';

  }
  
}, false)

document.querySelector('#mute3').addEventListener('click', ()=> {
  if(player3isMuted){
      player3.mute = false;
      player3isMuted = false;
      document.querySelector('#mute3').className = 'mini ui black basic button';


  } else {
      player3.mute = true;
      player3isMuted = true;
      document.querySelector('#mute3').className = 'mini ui red basic button';

  }
  
}, false)

document.querySelector('#mute4').addEventListener('click', ()=> {
  if(player4isMuted){
      player4.mute = false;
      player4isMuted = false;
      document.querySelector('#mute4').className = 'mini ui black basic button';


  } else {
      player4.mute = true;
      player4isMuted = true;
      document.querySelector('#mute4').className = 'mini ui red basic button';

  }
  
}, false)

document.querySelector('#muteAll').addEventListener('click', ()=> {
    if(muteAll){
        context2.destination.mute = false;
        context3.destination.mute = false;
        context4.destination.mute = false;
        context5.destination.mute = false;

        muteAll = false;
        document.querySelector('#muteAll').className = 'mini ui black basic button';

    } else {
        context2.destination.mute = true;
        context3.destination.mute = true;
        context4.destination.mute = true;
        context5.destination.mute = true;
                
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

  document.querySelector('#reverb3').addEventListener('click', ()=> {
    if(reverb3on){
        player3.disconnect(reverb3)
        reverb2on = false;
        document.querySelector('#reverb2').className = 'mini ui black basic button';
  
    } else {
        player3.connect(reverb2)
        reverb3on = true;
        document.querySelector('#reverb3').className = 'mini ui inverted blue button';
    }
    
  }, false)

  document.querySelector('#reverb4').addEventListener('click', ()=> {
    if(reverb4on){
        player4.disconnect(reverb4)
        reverb4on = false;
        document.querySelector('#reverb4').className = 'mini ui black basic button';
  
    } else {
        player4.connect(reverb4)
        reverb4on = true;
        document.querySelector('#reverb4').className = 'mini ui inverted blue button';
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
//   console.log(p2loopStart);
  player2.stop();
  player2.start(0, p2loopStart);
//   player2.loopStart = p2loopStart;
//   player2.loopEnd = p2loopStart + 3;
}, false)

document.querySelector('#reloop3').addEventListener('click', ()=> {
  p3loopStart = Math.floor(Math.random() * 101) + 1;
  colorAccentHue3 = Math.floor(Math.random() * 250) + 1;
  sVal3 = Math.floor(Math.random() * 100) + 1;
  p3stopped = false;
//   console.log(p2loopStart);
  player3.stop();
  player3.start(0, p3loopStart);
}, false)

document.querySelector('#reloop4').addEventListener('click', ()=> {
  p4loopStart = Math.floor(Math.random() * 101) + 1;
  colorAccentHue4 = Math.floor(Math.random() * 250) + 1;
  sVal4 = Math.floor(Math.random() * 100) + 1;
  p4stopped = false;
  player4.stop();
  player4.start(0, p4loopStart);
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
    context2.transport.cancel(0);
    p1loopLength = val;
    console.log(p1loopLength);
    schedulePattern1();
    // schedulePattern2();
    // schedulePattern3();
    // schedulePattern4();
  }, false)

  document.querySelector('#loopLength2').addEventListener('input', (e)=> {
    let val = e.currentTarget.value;
    document.querySelector('#loopLength2val').value = val;
    context3.transport.cancel(0);
    p2loopLength = val;
    console.log(p2loopLength);
    // schedulePattern1();
    schedulePattern2();
    // schedulePattern3();
    // schedulePattern4();
  }, false)

  document.querySelector('#loopLength3').addEventListener('input', (e)=> {
    let val = e.currentTarget.value;
    document.querySelector('#loopLength3val').value = val;
    context4.transport.cancel(0);
    p3loopLength = val;
    console.log(p3loopLength);
    // schedulePattern1();
    // schedulePattern2();
    schedulePattern3();
    // schedulePattern4();
  }, false)

  document.querySelector('#loopLength4').addEventListener('input', (e)=> {
    let val = e.currentTarget.value;
    document.querySelector('#loopLength4val').value = val;
    context5.transport.cancel(0);
    p4loopLength = val;
    console.log(p4loopLength);
    // schedulePattern1();
    // schedulePattern2();
    // schedulePattern3();
    schedulePattern4();
  }, false)



var lVal1 = 20;
var lVal2 = 20;
var lVal3 = 20;
var lVal4 = 20;


// context2.transport.scheduleRepeat((time) => {
// 	// use the callback time to schedule events
//     if(p1stopped == false){
//         player.stop();
//         player.start(0, p1loopStart);
//         console.log('restart p1loopStart');
//         console.log(p1loopLength);

//     }
// }, p1loopLength);

context3.transport.scheduleRepeat((time) => {
	// use the callback time to schedule events
    // player.restart(time);
    if(p2stopped == false){
        player2.stop();
        player2.start(0, p2loopStart);
        console.log('restart p2loopStart');
        console.log(p2loopLength);

    }
}, p2loopLength);

context4.transport.scheduleRepeat((time) => {
	// use the callback time to schedule events
    // player.restart(time);
    if(p3stopped == false){
        player3.stop();
        player3.start(0, p3loopStart);
        console.log('restart p3loopStart');
        console.log(p3loopLength);

    }
}, p3loopLength);

context5.transport.scheduleRepeat((time) => {
	// use the callback time to schedule events
    // player.restart(time);
    if(p4stopped == false){
        player4.stop();
        player4.start(0, p4loopStart);
        console.log('restart p4loopStart');
        console.log(p4loopLength);

    }
}, p4loopLength);



let schedulePattern1 = () => {
    context2.transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        // player.restart(time);
        // player.unsync().stop().sync().start(p1loopStart, 0)

        if(p1stopped === false){
            player.stop();
            player.start(0, p1loopStart);
            console.log('restart p1loopStart');
            console.log(p1loopLength);
    
        }
    }, p1loopLength);
}

let schedulePattern2 = () => {
    context3.transport.scheduleRepeat((time) => {
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

let schedulePattern3 = () => {
    context4.transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        // player.restart(time);
        // player.unsync().stop().sync().start(p1loopStart, 0)

        if(p1stopped == false){
            player3.stop();
            player3.start(0, p3loopStart);
            console.log('restart p3loopStart');
            console.log(p3loopLength);
    
        }
    }, p3loopLength);
}

let schedulePattern4 = () => {
    context5.transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        // player.restart(time);
        // player.unsync().stop().sync().start(p1loopStart, 0)

        if(p1stopped == false){
            player4.stop();
            player4.start(0, p4loopStart);
            console.log('restart p4loopStart');
            console.log(p4loopLength);
    
        }
    }, p4loopLength);
}

console.log(context2.destination.mute);