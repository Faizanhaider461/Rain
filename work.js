let a= document.querySelector(".img")
let b= document.querySelector(".img2")




function startRain() {
    
    a.style.display = "block"
}

function stopRain() {

    a.style.display = "none"
}

function startSnow() {

    b.style.display = "block"
}

function stopSnow() {

    b.style.display = "none"
}





function instructions(){
    let c= alert("To Start Rain:   Press (Start Rain) \nTo Stop Rain:   Press (Stop Rain) \nTo Start Snow:   Press (Start Snow) \nTo Stop Snow:   Press (Stop Snow) \nTo Start Rain + Snow:   Press (Start Rain + Start Snow) \nTo Stop Rain + Snow:   Press (Stop Rain + Stop Snow)")
}