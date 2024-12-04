window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-page').classList.add('active');
    }, 3000); // 3 segundos
};

function loginAs(role) {
    alert(`Login como ${role}`);
}
