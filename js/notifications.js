

function _NotificationShow(title, htmlContent, icon)
{
    let TweenLite = new TimelineLite();
    let $notificationBar = $('#notificationBar');
    
    let $notificationObject = $('<div class="container uiTransparent notification"><div class="row"><div class="col-4"><img src="' + icon + '"class="notifyIcon verticalAlign"></img></div><div class="col-8 verticalAlign"><p style="text-align:center">' + title + '</p></div></div><div class="row"><div class="col-12" style="margin-top:10px">' + htmlContent +'</div></div></div></div>')
    
    $notificationBar.append($notificationObject);
    
    var tween = TweenLite.to($notificationObject, 2, {
        left: -($notificationObject.width() + 27),
        ease: Power1.easeInOut,
        delay: 0.2
    });
    setTimeout(_NotificationHide, 3000, $notificationObject);
}

function _NotificationHide($notificationObject)
{
    let TweenLite = new TimelineLite();
    var tween = TweenLite.to($notificationObject, 2, {
        left: 0,
        ease: Power1.easeInOut,
        delay: 0.2,
        onComplete: () => $notificationObject.remove()
    });
    //setTimeout(function() { $notificationObject.remove();}, 2000);
}
