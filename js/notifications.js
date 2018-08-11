

function _NotificationShow(title, htmlContent, icon)
{
    let TweenLite = new TimelineLite();
    let $notificationBar = $('#notificationBar');
    let $notificationObject = $('<div class="uiTransparent notification"><img src="' + icon + '"class="notifyIcon"></img><div>' + title + '</div><div>' + htmlContent + '</div></div>')
    $notificationBar.append($notificationObject);
    
    var tween = TweenLite.to($notificationObject, 2, {
        x: -($notificationObject.width() + 17),
        ease: Power1.easeInOut,
        delay: 0.2
    });
    setTimeout(_NotificationHide, 3000, $notificationObject);
}

function _NotificationHide($notificationObject)
{
    let TweenLite = new TimelineLite();
    var tween = TweenLite.to($notificationObject, 2, {
        x: 0,
        ease: Power1.easeInOut,
        delay: 0.2
        //,onComplete: $notificationObject.remove
    });
    setTimeout(function() { $notificationObject.remove();}, 2000);
}
