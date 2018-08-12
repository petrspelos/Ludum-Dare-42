function AchievementGetById(id)
{
    return _achievementRepo[id];
}

function AchievementCompleteById(id)
{
    if (_achievementRepo[id] == undefined || AchievementIsCompleted(_achievementRepo[id]))
        return;
    achievements.New(_achievementRepo[id]);
}

function AchievementIsCompleted(achievement)
{
    return achievements.all.filter(ach => 
        ach.title == achievement.title &&
        ach.description == achievement.description &&
        ach.iconUrl == achievement.iconUrl
    ).length > 0;
}

function AchievementIsCompletedById(id)
{
    return AchievementIsCompleted(_achievementRepo[id]);
}

function AchievementsGetCompleted()
{
    return achievements.all;
}

function AchievementsGetUncompleted()
{
    var uncompleted = [];
    for (let achId in _achievementRepo)
    {
        let ach = _achievementRepo[achId];
        if (AchievementIsCompleted(ach) == false)
            uncompleted.push(ach);
    }
    return uncompleted;
}
