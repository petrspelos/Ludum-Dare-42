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

function AppSetInstalled(appName, installed)
{
    let app = _applications[appName];
    app['installed'] = installed;
    if (installed == true)
    {
        Space.saved -= app.size;
        NotificationShow('Installer', `${appName} has successfully been installed ~ just for you <3!`, app.icon);
    }
    else 
    {
        if (app.onUninstalled == undefined)
            return;
        Space.saved += app.size;
        app.onUninstalled();
        NotificationShow('Uninstaller', `${appName} has been successfully uninstalled!`, app.icon);
    }        
    IconsReload();
}


function AppsGetAllInstalled()
{
    let appList = {};
    for (let appNa in _applications)
    {
        if (_applications.hasOwnProperty(appNa) == false) continue;
        var app = _applications[appNa];
        if (app['installed'])
            appList[appNa] = app;
    }
    return appList;
}

function SpaceAdd(amount, countForScore=false)
{
    if (countForScore)
        Space.saved += amount;
    _applications['other'].size -= amount;
}

function IconsReload()
{
    let apps = AppsGetAllInstalled();
    let $iconTray = $('#iconTray');
    $iconTray.empty();
    for (let appName in apps)
    {
        let app = apps[appName];
        if (app.protected) continue;
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
        $iconTray.append(appIcon);
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
