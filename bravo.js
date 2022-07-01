const cb = document.querySelector('#admin');

function app(link) {
    var postfix = '';
    if (cb.checked) postfix = '/#admin';
    var winBox = new WinBox('Admin Terminal', {
        url: link + postfix,
            modal: true
        });
    return winBox;
}
