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
