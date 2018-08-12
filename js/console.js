let $input = $('#input');
let $output = $('#output');
console.log($input.val());
// NOT FINISHED!
$input.keypress(function(e) 
{
    var key = e.which;
    if (key != 13) return;
    var inputString = $input.val();
    $output.val($output.val() + '\n' + inputString);
    $input.val('');
    var outputString = eval(inputString);
    if (outputString)
        $output.val($output.val() + '\n' + outputString);
    else
        $output.val($output.val() + '\n"' + inputString + '" resulted in an error.');
        
})
