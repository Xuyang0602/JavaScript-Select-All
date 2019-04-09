(function() {
    let select = document.getElementById('select');
    select.addEventListener('click', selected);

    let revers = document.getElementById('revers');
    revers.addEventListener('click', reverse);

})();

function selected() {
    let box = document.getElementsByTagName('input');
    let flag = box[0].checked;
    for (let i = 0; i < box.length; i++) {
        if (!flag) box[i].checked = true;
        else box[i].checked = false;
    }
}

function reverse() {
    let box = document.getElementsByTagName('input');
    for (let i = 0; i < box.length; i++) {
        box[i].checked = !box[i].checked;
    }
}