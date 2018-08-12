function InitializeAudio()
{
    soundObj = document.createElement("audio");
   
    // Subscribe keypress to play audio
    $("html").keydown(() => _PlaySoundWithRandomFrequency("keypress.wav"));

    // Subscribe mouse click to play audio
    $("html").click(() => _PlaySoundWithRandomFrequency("mousepress.wav"));
    $("html").contextmenu(() => _PlaySoundWithRandomFrequency("mousepress.wav"));
}

function _PlaySoundWithRandomFrequency(fileName)
{
    soundObj.src = `./sound/${fileName}`;
    let vol = getRandomInt(8, 10) / 10;
    soundObj.volume = vol;
    soundObj.autoPlay = false;
    soundObj.preLoad = true;
    soundObj.controls = true;
    let frequency = getRandomInt(10, 25) / 10;
    soundObj.playbackRate = frequency;
    soundObj.play();
}

function _PlaySound(fileName, volOverload)
{
    soundObj.src = `./sound/${fileName}`;
    soundObj.volume = volOverload;
    soundObj.autoPlay = false;
    soundObj.preLoad = true;
    soundObj.controls = true;
    soundObj.playbackRate = 1;
    soundObj.play();
}
