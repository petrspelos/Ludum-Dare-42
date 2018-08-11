function _InitiateStartupSequence()
{
    let tl = new TimelineLite();
    let $blackScreen = $('#blackScreen');
    let $startupScreen = $('#startupScreen');
    let $loadingImage = $('#startupScreen img');
    let $loadingText = $('#startupScreen h2');

    tl.to($blackScreen, 5, {delay: 3, opacity: 0, ease: Elastic})
    .to($loadingImage, 5, {opacity: 1, ease: Elastic})
    .to($loadingText, 5, {opacity: 1, ease: Elastic})
    .to($loadingText, 1, {opacity: 0, ease: Elastic})
    .to($loadingImage, 1, {delay: 1, opacity: 0, ease: Elastic})
    .to($startupScreen, 3, {delay: 1, opacity: 0, ease: Elastic});
    tl.play();
}