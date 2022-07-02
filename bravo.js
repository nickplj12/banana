const cb = document.querySelector('#admin');

function app(link, name) {
    var postfix = '';
    if (cb.checked) postfix = '#admin';
    var winBox = new WinBox({
        title: name,
        url: link + postfix,
        modal: true,
        x: "center",
        y: "50%",
        width: 600,
        height: 500,
    });
    return winBox;
}
