function _DesktopSetWallpaper(url)
{
    let $desktopWrapper = $('#desktopWrapper');
    $desktopWrapper.css('background-image', 'url("' + url + '")');
}

function _TaskbarUpdateTime()
{
    let $taskbarTime = $('#taskbarTime');
    let date = new Date();
    $taskbarTime.text(`${date.getHours()}:${date.getMinutes()}`);
}

function _DesktopAddIcon(name, icon, template)
{
    var html = '<div class="desktopIcon" style="float: left; padding: 10px" onclick="WindowCreateFromTemplate(\'' + template + '\');"><div class="container"><div class="row" style="margin-bottom: 10px;"><div class="col-12 rowNoPaddingOrMargin verticalAlign" style="margin: 5px"><img src="' + icon + '" width="60" height="60" style="margin: auto"/></div></div><div class="row"><div class="col-12 verticalAlign rowNoPaddingOrMargin"><span class="color: white; text-shadow: 0px 0px 2px black;">' + name + '</span></div></div></div></div>';
    $("#iconTray").append(html);
}
