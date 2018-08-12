var secondsElapsed = 0;
var updateIncrement = 1;
var sizeDoubleInSec = 10;
var sizeNewFileInSec = 3;

function _UpdaterTick()
{
    secondsElapsed++;

    if(secondsElapsed % sizeDoubleInSec === 0)
    {
        updateIncrement *= 2;
        sizeDoubleInSec *= 2;
    }

    if(secondsElapsed % sizeNewFileInSec === 0)
    {
        SetUpdateProgressBarRandom();

        let $updaterFile = $("#updaterFile");
        $updaterFile.text(funnyFiles[getRandomInt(0, funnyFiles.length)]);

        let $updateBox = $("#updateBox");
        var tl = new TimelineLite();
        tl.to($updateBox, 0.3, {scale:1.2,backgroundColor: "#ff0000", ease: Elastic})
        .to($updateBox, 0.3, {scale:1, backgroundColor: "rgba(7,24,38,0.7)", ease: Elastic});
        tl.play();
    }

    _applications['update'].size += updateIncrement;
}

var progressPercentage = 10;

function SetUpdateProgressBarRandom()
{
    let $progressBar = $("#updateProgressbar");
    let state = clamp(progressPercentage += getRandomInt(-5, 6), 0, 100);
    $progressBar.css("width", state + "%");
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

function SetUpdateProgressBar(state)
{
    let $progressBar = $("#updateProgressbar");
    $progressBar.css("width", state + "%");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var funnyFiles = [
    "SpyWare.exe",
    "Who_Did_This.dll",
    "Yeet.gif",
    ".gitignore",
    "botToken.json",
    "Delete_When_Done.ogg",
    "Skype... Just Skype."
]