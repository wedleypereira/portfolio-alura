const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    if(chk.checked) {
        console.log("Dark-mode");
        document.body.className = "dark";

    } else {
        console.log("Light-mode");
        document.body.className = "light";
    }
});