const notAdmin = document.getElementById('without-admin');
const admin = document.getElementById('with-admin');
admin.hidden = true;
if (location.hash == '#admin') {
    notAdmin.hidden = true;
    admin.hidden = false;
}
