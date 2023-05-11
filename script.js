let li = document.getElementsByTagName("li")
let ul = document.getElementsByTagName("ul")
const i = document.getElementById("i")
const reload = document.getElementById("reload")

function refresh(){
    for (let i = 0; i < li.length; i++) {
        if (randomInt() % 4 === 0) {
            if (!li[i].classList.contains("hide_font")){
            li[i].classList.toggle("hide_font")
        } else {
                if (randomInt() % 34 === 0){
                    li[i].classList.remove("hide_font")
                }
            }
    }
}

    for (let i = 0; i < ul.length; i++) {
        if (randomInt() % 343 === 0) {
            ul[i].classList.toggle("hide_font")
        }
    }

}
refresh()



function timedRefresh(timeoutPeriod) {
        return setTimeout("location.reload();", timeoutPeriod);
}
// 500000
window.onload = timedRefresh(1000*60*3);

function randomInt(){
    return Math.floor(Math.random() * 1146)
}

i.addEventListener('click', () =>{
    alert("Это текст полиморф\nОн живет 120 секунд\nС каждой перезагрузкой он\nстановиться другим")
});

reload.addEventListener('click', () => {
    location.reload()
});




// variable
let modal = document.querySelector(".modal-container");
// let btn = document.getElementById("myBtn");
let closeBtn = document.querySelectorAll(".btn");

// EventListener
// btn.addEventListener("click", () => {
//     modal.classList.add("show");
// });

closeBtn.forEach((eachBtn) => {
    eachBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove("show");
    }
};


let time = 180;
let timeOut;
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const app = document.querySelector(".app");
const message = document.querySelector(".msg");

// functions
const startTimer = (t) => {
    timeOut = setInterval(() => {
        t--;

        // minute
        minute.textContent = `${Math.floor(t / 60)}`;
        if (minute.textContent <= 0) minute.textContent = `00`;
        if (minute.textContent < 10) minute.textContent = `0${Math.floor(t / 60)}`;

        // second
        second.textContent = `${Math.floor(t % 60)}`;
        if (second.textContent <= 0) second.textContent = `00`;
        if (second.textContent < 10) second.textContent = `0${Math.floor(t % 60)}`;

        // end
        if (t < 0) {
            app.classList.add("hidden");
            message.classList.remove("hidden");
        }
    }, 1000);
};
startTimer(time);
