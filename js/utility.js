var _applicationState = {};

function DesktopSetWallpaper(url)
{
    _DesktopSetWallpaper(url);
}

function TaskbarUpdateTime()
{
    _TaskbarUpdateTime();
}

function NotificationShow(title, html, icon)
{
    _NotificationShow(title, html, icon);
}

function NotificationHide($notificationObject)
{
    _NotificationHide($notificationObject);
}

function WindowShow()
{
    _WindowShow();
}

function WindowHide()
{
    _WindowHide();
}

function WindowCreateFromTemplate(templateName)
{
    let app = _applications[templateName];
    if(app)
    {
        WindowSetHeaderText(app.friendlyName);
    }
    _WindowShow();
    _WindowCreateFromTemplate(templateName);
}

function WindowSetHeaderText(text)
{
    _WindowSetHeaderText(text);
}

function WindowClearTemplate()
{
    _WindowClearTemplate();
}

function AppIsInstalled(appName)
{
    return _applications[appName]['installed'];
}

function AppSetInstalled(appName, installed)
{
    let app = _applications[appName];
    let friendlyName = app.friendlyName;
    if (installed == true)
    {
        app['installed'] = true;
        Space.saved -= app.size;
        NotificationShow('Installer', `${friendlyName} has successfully been installed ~ just for you <3!`, app.icon);
    }
    else 
    {
        if (app.onUninstalled == undefined)
        {
            NotificationShow("Uninstaller", `Ehhhhm... hmm... seems like I have no powah here... Unable to uninstall ${friendlyName}.`)
            return;
        }
        app['installed'] = false;
        Space.saved += app.size;
        app.onUninstalled();
        NotificationShow('Uninstaller', `${friendlyName} has been successfully uninstalled!`, app.icon);
    }        
    IconsReload();
}

var InstallerTimeout; // Important for multiple installations.

function AppsGetAllInstalled(noProtectedOrViruses=false)
{
    let appList = {};
    for (let appNa in _applications)
    {
        if (_applications.hasOwnProperty(appNa) == false) continue;
        var app = _applications[appNa];
        if (app['installed'])
        {
            if (noProtectedOrViruses && (app['protected'] || app['virus']))
                continue;
            appList[appNa] = app;
        }
    }
    return appList;
}

function AppsShuffleOrder()
{
    _applications = ArrayShuffle(_applications);
}

function AppsGetAllInstalledViruses()
{
    let virusList = {};
    for (let appNa in _applications)
    {
        if (_applications.hasOwnProperty(appNa) == false) continue;
        var app = _applications[appNa];
        if (app['installed'] && app['virus'])
            virusList[appNa] = app;
    }
    return virusList;
}

function AppsGetAllUninstalledViruses()
{
    let virusList = {};
    for (let appNa in _applications)
    {
        if (_applications.hasOwnProperty(appNa) == false) continue;
        var app = _applications[appNa];
        if (app['installed'] == false && app['virus'])
            virusList[appNa] = app;
    }
    return virusList;
}

function AppsGetAllUninstalledInstallers()
{
    let appList = {};
    for (let appNa in _applications)
    {
        if (_applications.hasOwnProperty(appNa) == false) continue;
        var app = _applications[appNa];
        if (app['installed'] == false && app['installer'])
            appList[appNa] = app;
    }
    return appList;
}

function CallAfterSeconds(callback, seconds)
{
    clearTimeout(InstallerTimeout);
    InstallerTimeout = setTimeout(function() { callback(); }, seconds * 1000);
}

function SpaceAdd(amount, countForScore=false)
{
    if (countForScore)
        Space.saved += amount;
    _applications['other'].size -= amount;
}

function IconsReload(shuffle=false)
{
    let apps = AppsGetAllInstalled();
    let $iconTray = $('#iconTray');
    $iconTray.empty();
    let icons = [];
    for (let appName in apps)
    {
        let app = apps[appName];
        if (app.protected) continue;
        if (app.virus) continue;
        let appIcon =
        `
        <div class="desktopIcon" style="float: left; padding: 10px" onclick="WindowCreateFromTemplate('${appName}');">
            <div class="container">
                <div class="row" style="margin-bottom: 10px;">
                    <div class="col-12 rowNoPaddingOrMargin verticalAlign">
                        <img src="${app.icon}" width="60" height="60" style="margin: auto"/>
                        ${app.installer ? '<img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/wrench-screwdriver-icon.png" class="iconBadge">' : ''}
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 verticalAlign rowNoPaddingOrMargin">
                        <span style="color: white; text-shadow: 0px 0px 2px black; width: 100%;">${app.friendlyName}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        icons.push(appIcon);
    }
    for (let appIndex in _fakeApps)
    {
        let app = _fakeApps[appIndex];
        if (app.protected) continue;
        if (app.virus) continue;
        let appIcon =
        `
        <div class="desktopIcon" style="float: left; padding: 10px" onclick="WindowCreateFromTemplate('fakeApp');">
            <div class="container">
                <div class="row" style="margin-bottom: 10px;">
                    <div class="col-12 rowNoPaddingOrMargin verticalAlign">
                        <img src="${app.icon}" width="60" height="60" style="margin: auto"/>
                        ${app.installer ? '<img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/wrench-screwdriver-icon.png" class="iconBadge">' : ''}
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 verticalAlign rowNoPaddingOrMargin">
                        <span style="color: white; text-shadow: 0px 0px 2px black; width: 100%;">${app.friendlyName}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        icons.push(appIcon);
    }
    if (shuffle)
        icons = ArrayShuffle(icons);
    for (let icon of icons)
    {
        $iconTray.append(icon);
    }
}

function AvocadoInstall(appData)
{
    _AvocadoInstall(appData);
}

function GameOver()
{
    _GameOver();
}

function StartBootSequence()
{
    _StartBootSequence();
}

function SpaceStringify(input)
{
    let type = 'Kb'
    if (input > 1000)
    { 
        input /= 1000;
        type = 'Mb'
    }
    if (input > 1000)
    { 
        input /= 1000;
        type = 'Gb'
    }
    return `${input} ${type}`;
}

function SpaceToPercentageOfTotalStorage(amount)
{
    return Math.round((10000*amount)/Space.max)/100;
}

function VirusSetInfectionPercentage(percentage)
{
    virusDefectionPercentage = percentage;
}

function ArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }  
    return array;
}

function ObjectPickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}
