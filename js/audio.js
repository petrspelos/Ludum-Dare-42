activeSoundObjects = [];

class SoundObject
{
    constructor (file, vol, randomize)
    {
        this.soundObject = document.createElement("audio");

        this.soundObject.src = `./sound/${file}`;
        this.soundObject.volume = vol;
        this.soundObject.autoPlay = false;
        this.soundObject.preLoad = true;
        this.soundObject.controls = true;
        this.soundObject.playbackRate = 1;

        if (randomize)
        {
            this.RandomizeVolumeAndFrequency();
        }

        this.soundObject.play();
    }

    Play()
    {
        this.soundObject.play();
    }

    RandomizeVolumeAndFrequency()
    {
        this.soundObject.volume = getRandomInt(9, 10) / 10;
        this.soundObject.playbackRate = getRandomInt(10, 25) / 10;
    }

    DeleteIfDone()
    {
        if (this.soundObject.ended)
        {
            $(this.soundObject).remove();
            let index = activeSoundObjects.indexOf(this);
            if (index > -1)
            {
                activeSoundObjects.splice(index, 1);
            }
        }
    }
}

function InitializeAudio()
{   
    // Subscribe keypress to play audio
    $("html").keydown(() => CreateSound(new SoundObject("keypress.wav", 1, true)));

    // Subscribe mouse click to play audio
    $("html").click(() => CreateSound(new SoundObject("mousepress.wav", 1, true)));
    $("html").contextmenu(() => CreateSound(new SoundObject("keypress.wav", 1, true)));
}

function CreateSound(sound)
{
    activeSoundObjects.push(sound);
    sound.Play();

    for(let s of activeSoundObjects)
    {
        s.DeleteIfDone();
    }
}
