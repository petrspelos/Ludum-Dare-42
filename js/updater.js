var secondsElapsed = 0;
var updateIncrement = 1;
var sizeDoubleInSec = 10;
var sizeNewFileInSec = 3;

var virusActionInterval = 9;
var virusInfectionPercentage = 50;

var virusNames = [ "virus1" ];

function _UpdaterTick()
{
    secondsElapsed++;

    if(secondsElapsed % sizeDoubleInSec === 0)
    {
        updateIncrement *= 1.5;
        sizeDoubleInSec *= 1.5;
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
    
    if (secondsElapsed % virusActionInterval === 0)
    {
        var installedViruses = AppsGetAllInstalledViruses();
        for (let virusId in installedViruses)
        {
            let virus = installedViruses[virusId];
            virus.virusAction();
        }
    }

    _applications['update'].size += updateIncrement;
    $('#freeSpaceTag').text(Space.freePercentage + "%");
}

// Has a 50% risk of installing a virus every minute unless you have antivirus installed
function RandomVirusInstallationCheck()
{
    if (virusNames.length === 0) return;
    if (secondsElapsed % 60 !== 0) return;

    let virusRoll = Math.random() * 100;

    let randomVirus = getRandomInt(0, virusNames.length)

    if(virusRoll <= virusInfectionPercentage)
    {
        AppSetInstalled(virusNames[randomVirus], true);
        virusNames.splice(randomVirus, 1);
    }
}

function ShakeStart()
{
    $startBtn = $('#startBtn');
    var tl = new TimelineLite();
    tl.to($startBtn, 0.1, {x: -10, ease: Elastic})
    .to($startBtn, 0.1, {x: 10, ease: Elastic})
    .to($startBtn, 0.1, {x: -10, ease: Elastic})
    .to($startBtn, 0.1, {x: 0, ease: Elastic});
    tl.play();
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
    "Skype... Just Skype.",
    "system32.dll",
    "system32 (1).dll",
    "system16.dll",
    "memeGenerator.exe",
    "uninstaller-installer.bag",
    "bag.bag",
    "good-music.rar",
    "eatThePlant.exe",
    "ERROR_374_FILENOTFOUND",
    "ERROR_298_",
    "immatureFileName.zip",
    "MyBossToldMeToUploadThisFile.agetheml",
    "notAVirus.bat",
    "spoonDriver.exe",
    "taxiDriver.exe",
    "screenDriver.exe",
    "heatController(not global warming).png",
    "dobriden.cz",
    "hello.uk",
    "vänster.se",
    "ConsoleApp2 (1).csproj",
    "ConsoleApp2.csproj",
    "ConsoleApp1.csproj",
    "index (1).html",
    "wallpaper25 (SFW).jpg",
    "wallpaper42 (NSFW).png",
    "wallpaper69 (NICE).gif",
    "wallpaper62 (DECENT).svg",
    ".git",
    "README.md",
    "bugs.css",
    "Microsoft Visual Studio 1914 (WW1).exe",
    "NotificationNotifier.js",
    "Other inside jokes...",
    "untitled",
    "untitled 1",
    ".",
    "sn̸o̷ops ̕he͟l̵p̀!",
    "A̴ͨ̒͑V̾ͥ́̐ͪ͒ͪ͞È̑͗͋ ̑ͦ͒̆̽S̈́̄͂̓͑̽́Á͌ͭ̐͗͌ͩ͠T̷̀̏ȦN̐̾̋AS͗ͥ̎̀͌͆̑",
    "GͧO͊̀ͩ̇͗ͩ̃Dͧͣͫ ̓̎͌ͯͧ̆B͗́L҉E̸̅ͪ̎̍̅ͧS̛̓̈́̒S̸̄͐ͪͣͭͨ",
    "THE҉RE AR̵E N͡O͜ UPD̴A͠TES"
]
