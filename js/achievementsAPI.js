function AchievementGetById(id)
{
    return _achievementRepo[id];
}

function AchievementCompleteById(id)
{
    if (_achievementRepo[id] == undefined || AchievementIsCompleted(_achievementRepo[id]))
        return;
    let ach = ToAchievement(_achievementRepo[id]);
    CreateSound(new SoundObject("achievement.wav", 0.5, false));
    achievements.New(ach);
    ach.Popup();
}

function AchievementIsCompleted(achievement)
{
    return achievements.all.filter(ach => 
        ach.title == achievement.title &&
        ach.description == achievement.description &&
        ach.iconUrl == achievement.iconUrl
    ).length > 0;
}

function ToAchievement(data)
{
    let achObj = new Achievement("", "", "");
    return Object.assign(achObj, data);
}

function AchievementIsCompletedById(id)
{
    return AchievementIsCompleted(_achievementRepo[id]);
}

function AchievementsGetCompleted()
{
    return achievements.all;
}

function AchievementsGetAllPossible()
{
    var all = [];
    for (let achId in _achievementRepo)
    {
        let ach = _achievementRepo[achId];
            all.push(ToAchievement(ach));
    }
    return all;
}

function AchievementsGetUncompleted()
{
    var uncompleted = [];
    for (let achId in _achievementRepo)
    {
        let ach = _achievementRepo[achId];
        if (AchievementIsCompleted(ach) == false)
            uncompleted.push(ToAchievement(ach));
    }
    return uncompleted;
}
