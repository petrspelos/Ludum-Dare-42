function _DesktopSetWallpaper(url)
{
    let $desktopWrapper = $('#desktopWrapper');
    $desktopWrapper.css('background-image', 'url("' + url + '")');
}

function _TaskbarUpdateTime()
{
    let $taskbarTime = $('#taskbarTime');
    let date = new Date();
    let minutes = 
    $taskbarTime.text(`${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?`0`+date.getMinutes():date.getMinutes()}`);
}
