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
    _WindowShow();
    _WindowCreateFromTemplate(templateName);
}

function WindowClearTemplate()
{
    _WindowClearTemplate();
}

function AppSetInstalled(app, installed)
{
    _applications[app]['installed'] = installed;
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

function InitIcons()
{
    let apps = AppsGetAllInstalled();
    let $iconTray = $('#iconTray');
    for (let appName in apps)
    {
        let app = apps[appName];
        let appIcon =
        `
        <div class="desktopIcon" style="float: left; padding: 10px" onclick="WindowCreateFromTemplate('${appName}');">
            <div class="container">
                <div class="row" style="margin-bottom: 10px;">
                    <div class="col-12 rowNoPaddingOrMargin verticalAlign">
                        <img src="${app.icon}" width="60" height="60" style="margin: auto"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 verticalAlign rowNoPaddingOrMargin">
                        <span class="color: white; text-shadow: 0px 0px 2px black;">${app.friendlyName}</span>
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

function DesktopAddIcon(name, icon, template)
{
    _DesktopAddIcon(name, icon, template);
}

function GameOver()
{
    _GameOver();
}

function StartBootSequence()
{
    _StartBootSequence();
}
