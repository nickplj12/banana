const cb = document.querySelector('#admin');

function app(link) {
    var postfix = '';
    if (cb.checked) postfix = '/#admin';
    var winBox = new WinBox('Terminal', {
        url: link + postfix,
//        modal: true,
        width: 600,
        height: 500,
    });
    return winBox;
}
