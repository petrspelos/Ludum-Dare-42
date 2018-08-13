function _StartBootSequence()
{
    let tl = new TimelineLite();
    let $blackScreen = $('#blackScreen');
    let $startupScreen = $('#startupScreen');
    let $loadingImage = $('#startupScreen img');
    let $loadingText = $('#startupScreen h2');

    tl.to($blackScreen, 5, {delay: 3, opacity: 0, ease: Elastic})
    .to($loadingImage, 5, {opacity: 1, ease: Elastic})
    .to($loadingText, 5, {opacity: 1, ease: Elastic})
    .to($loadingText, 1, {opacity: 0, ease: Elastic})
    .to($loadingImage, 1, {delay: 1, opacity: 0, ease: Elastic})
    .to($startupScreen, 3, {delay: 1, opacity: 0, ease: Elastic, onComplete: _SetupGameLoop});
    tl.play();
}

var GameOver = false;
function _GameOver()
{
    var viruses = AppsGetAllInstalledViruses();
    if (Object.keys(viruses).length == 0)
        AchievementCompleteById("virusFree");        
    if (Object.keys(viruses).length >= 3)
        AchievementCompleteById("doomed");

    $("#endScreen").css("display", "block");
    $("#timePlayed").text(secondsElapsed);
    $("#spaceFreed").text(SpaceStringify(Space.saved));
    $('#achievementsCompleted').text(AchievementsGetCompleted().length);
    $('#totalAchievements').text(AchievementsGetAllPossible().length)
    clearInterval(updateLoop);
    CreateSound(new SoundObject("bluescreen.wav", 0.1, false));
}

function _SetupGameLoop()
{
    $('#startupScreen').hide();
    $('#blackScreen').hide();
    $('#achievementScreen').hide();

    updateLoop = setInterval(Update, 1000);
    NotificationShow('Warning!', 'Your system is <u>running out of space</u>. Try uninstalling large applications before it\'s too late!', 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/256/alert-icon.png');
}

function ShowAchievementsPage()
{
    let list = $('#achievementList');
    let completed = AchievementsGetCompleted();
    for (let i of completed)
    {
        list.append(i.ToHtml(true, "achievementListItem"));
    }

    let uncompleted = AchievementsGetUncompleted();
    for (let i of uncompleted)
    {
        list.append(i.ToHtml(false, "achievementListItem"));
    }
    $('#achievementScreen').show();
}
