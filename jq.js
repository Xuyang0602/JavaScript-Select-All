$(document).ready(function () {
    $('#select').click(function (e) {
        $("input[type='checkbox']").each(function (index, element) {
            // element == this
            $(element).attr("check", true);
        }); 
    });
});