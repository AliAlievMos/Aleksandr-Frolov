let li = document.getElementsByTagName("li")
let ul = document.getElementsByTagName("ul")

function refresh(){
    for (let i = 0; i < li.length; i++) {
        if (randomInt() % 4 === 0) {
            li[i].classList.toggle("hide_font")
        }
    }

    for (let i = 0; i < ul.length; i++) {
        if (randomInt() % 34 === 0) {
            ul[i].classList.toggle("hide_font")
        }
    }

}
refresh()



function timedRefresh(timeoutPeriod) {
        return setTimeout("location.reload();", timeoutPeriod);
}

window.onload = timedRefresh(50000);

function randomInt(){
    return Math.floor(Math.random() * 1146)
}