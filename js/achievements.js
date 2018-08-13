achievementsWrapperId = "achievementWrapper";

class Achievement
{
    constructor(title, description, iconUrl)
    {
        this.title = title;
        this.description = description;
        this.iconUrl = iconUrl;
    }

    ToHtml(completed, classes)
    {
        return `
        <div id="ach" class="achievement ${completed ? 'achievement-completed' : ''} uiTransparent ${classes}">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <img src="${this.iconUrl}" width="100px" height="100px">
                    </div>
                    <div class="col-9 text-white">
                        <div class="row">
                            <div class="col-12" style="padding: 10px;">
                                <span style="font-weight: bold;">${this.title}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" style="padding: 0px 10px;">
                                <span>${this.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    Popup()
    {
        let $wrapper = $("#" + achievementsWrapperId);
        $wrapper.empty();
        $wrapper.append(this.ToHtml(true));
        let $achievement = $('#ach');
        var tl = new TimelineLite();
        tl.to($achievement, 0, {y: -150, ease: Elastic})
        tl.to($achievement, 1, {y: 0, ease: Elastic})
        .to($achievement, 1, {delay: 5, y: -150, ease: Elastic, onComplete: AchievementsClearPopups});
        tl.play();
    }
}

function AchievementsClearPopups()
{
    $wrapper = $(achievementsWrapperId);
    $wrapper.empty();
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
            let achObj = new Achievement("", "", "");
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
