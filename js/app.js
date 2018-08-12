// function runPackage(icon, callback) {
//     var tl = new TimelineLite();
//     $box = $('<button class="btn btn-outline-secondary btn-item">' + icon + '</button>');
//     $("body").append($box);
//     $box.on("click", callback);
//     tl.to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:randomWidth(),y:randomHeight(), ease: Elastic})
//      .to($box, 1, {x:-100,y:-100,onComplete: removeJQueryElement, onCompleteParams: [$box]});
//     tl.play();
// }

$(document).ready(function()
{
    //StartBootSequence();

    IconsReload();
    Update();
    
    // Uncomment this when StartBootSequence is commented out & vice versa
    updateLoop = setInterval(Update, 1000);
    
    WindowHide();
});

function Update()
{
    _UpdaterTick();
    _TaskbarUpdateTime();
    _SpaceUpdate();
}
