class Achievement
{
    constructor(title, description, iconUrl, completed)
    {
        this.title = title;
        this.description = description;
        this.iconUrl = iconUrl;
        this.completed = completed;
    }
}

class Achievements
{
    constructor()
    {
        this.storageKey = "achievements";
        this.LoadAll();
    }

    New(achievement)
    {
        this.all.push(achievement);
        this.SaveAll();
    }

    LoadAll()
    {
        this.all = LocalStorage_Get(this.storageKey);
        if(this.all === null) this.all = [];
        for(let index in this.all)
        {
            let ach = this.all[index];
            let achObj = new Achievement("", "", "", false);
            this.all[index] = Object.assign(achObj, ach);
        }
    }

    SaveAll()
    {
        LocalStorage_Set(this.storageKey, this.all);
    }
}

achievements = new Achievements();

function DEBUG_ClearStoredAchievements()
{
    LocalStorage_Set("achievements", null);
}
