const keys = [...document.querySelectorAll(".key")];
const blackKeys = [...document.querySelectorAll(".blackKey")];



keys.forEach(key => {
    key.addEventListener("click", () => {
        const audio = document.getElementById(key.dataset.key)
        audio.currentTime = 0;
        audio.play();
        key.classList.add("active")
        audio.addEventListener("ended", function () {
            key.classList.remove("active")
        })
    });
});



