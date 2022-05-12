let d = new Date();
document.body.innerHTML = "<h2 class='time'>" + d + "</h2>"


$('.coloring td').click(function()    {
    //if click on checkbox cell
    var $flag = $("input", $(this));
    //if click on cell without checkbox
    if($flag.html() == null)    {
        $flag = $("input", $(this).parent());
    }
    var checked = $flag.attr('checked');
    //if checkbox is not checked
    if(checked == false)    {
        $flag.attr("checked","checked");
    }
    //checkbox is checked
    else    {
        $flag.removeAttr('checked');
    }
}); 