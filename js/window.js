function _WindowCreateFromTemplate(templateName)
{
    let $windowContentWrapper = $('#desktopWindowPageWrapper');
    $windowContentWrapper.empty();
    $.get( "templates/" + templateName + ".html", function( data ) {
        $windowContentWrapper.append(data);
    });
}

function _WindowClearTemplate()
{
    let $windowContentWrapper = $('#desktopWindowPageWrapper');
    $windowContentWrapper.empty();
}

function _WindowHide()
{
    _WindowClearTemplate();
    let $windowFrame = $('#desktopWindowFrame');
    $windowFrame.hide();
}

function _WindowShow()
{
    let $windowFrame = $('#desktopWindowFrame');
    $windowFrame.show();
}

function _WindowSetHeaderText(text)
{
    let $windowTitle = $("#desktopWindowTitle");
    $windowTitle.text(text);
}
