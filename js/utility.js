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
    let appList = [];
    for (let appNa in _applications)
    {
        if (_applications.hasOwnProperty(appNa) == false) continue;
        var app = _applications[appNa];
        if (app['installed'])
            appList.push(app);
    }
    return appList;
}

function AvocadoInstall(appData)
{
    _AvocadoInstall(appData);
}

function DesktopAddIcon(name, icon, template)
{
    _DesktopAddIcon(name, icon, template);
}
