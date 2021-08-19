let layer = document.getElementsByClassName("layer");
let Rlayer = document.getElementsByClassName("Rlayer");

var backvideo = document.getElementById("backvideo");
var Endsound = document.getElementById("Endsound");
var clicksound = document.getElementById("clicksound");

window.gameover = false;


for (let index = 0; index < layer.length; index++) {
    setInterval(() => {
        let fish = document.getElementById("fish");
        let fbL = parseInt(window.getComputedStyle(fish, null).getPropertyValue("left"));
        let fbT = parseInt(window.getComputedStyle(fish, null).getPropertyValue("top"));
        let NfbT = fbT + 60;

        let LL = parseInt(window.getComputedStyle(layer[index], null).getPropertyValue("left"));
        let LT = parseInt(window.getComputedStyle(layer[index], null).getPropertyValue("top"));
        let DiffLL = Math.abs(fbL - LL);
        let DiffLT = Math.abs(NfbT - LT);
        let NDiffT = Math.abs(fbT - (LT + 20));

        if (DiffLL < 140 && DiffLT < 3 || DiffLL < 140 && DiffLT < 60 && NDiffT < 60) {
            for (let i = 0; i < 4; i++) {
                let EndCard = document.getElementById("EndCard");
                let animation = document.getElementsByClassName("animation");
                animation[i].style.cssText = 'aniamation:none; visibility: hidden;';
                EndCard.style.visibility = "visible";
                Refresh.style.visibility = "visible";
                backvideo.pause();
                if (gameover == false) {
                    Endsound.play();
                    gameover = true;
                }

                if (clearInterval(scr)) {
                    clearInterval(src);

                }
            }
        }

    }, 10);
}
for (let idx = 0; idx < Rlayer.length; idx++) {
    setInterval(() => {

        let fish = document.getElementById("fish");
        let fbR = parseInt(window.getComputedStyle(fish, null).getPropertyValue("right"));
        let fbT = parseInt(window.getComputedStyle(fish, null).getPropertyValue("top"));
        let RNfbT = fbT + 60;

        let RLR = parseInt(window.getComputedStyle(Rlayer[idx], null).getPropertyValue("right"));
        let RLT = parseInt(window.getComputedStyle(Rlayer[idx], null).getPropertyValue("top"));

        let RDiffR = Math.abs(fbR - RLR)
        let RDiffT = Math.abs(RNfbT - RLT);
        let NRDiffT = Math.abs(fbT - (RLT + 20));
        if (RDiffR < 200 && RDiffT < 3 || RDiffR < 200 && RDiffT < 60 && NRDiffT < 60) {
            for (let i = 0; i < 4; i++) {
                let animation = document.getElementsByClassName("animation");
                let Refresh = document.getElementById("Refresh");
                animation[i].style.cssText = 'aniamation:none; visibility: hidden;';
                EndCard.style.visibility = "visible";
                backvideo.pause();
                Refresh.style.visibility = "visible";
                if (gameover == false) {
                    Endsound.play();
                    gameover = true;
                }
                if (clearInterval(scr)) {
                    clearInterval(src);
                }

            }
        }

    }, 10);
}


// for changing the position of fish 
document.onkeydown = function check(event) {
    if (event.keyCode == 39 && parseInt(window.getComputedStyle(fish, null).getPropertyValue("left")) < 900) {
        let leftChangedPositiion = parseInt(window.getComputedStyle(fish, null).getPropertyValue("left")) + 30;
        let leftPositiion = parseInt(window.getComputedStyle(fish, null).getPropertyValue("right")) - 30;

        fish.style.left = `${leftChangedPositiion}px`;
        fish.style.right = `${leftPositiion}px`;
        clicksound.play();
    }

    else if (event.keyCode == 37 && parseInt(window.getComputedStyle(fish, null).getPropertyValue("right")) < 900) {
        let RightChangedPositiion = parseInt(window.getComputedStyle(fish, null).getPropertyValue("left")) - 30;
        let RightPositiion = parseInt(window.getComputedStyle(fish, null).getPropertyValue("right")) + 30;

        fish.style.left = `${RightChangedPositiion}px`;
        fish.style.right = `${RightPositiion}px`;
        clicksound.play();

    }

}

let Refresh = document.getElementById("Refresh");
Refresh.addEventListener("click",
    function () {
        document.location.reload();
    })


    
setTimeout(() => {
    scr = setInterval(() => {
        let score = document.getElementById("score");
        score.innerText = parseInt(score.innerText) + 1;
    }, 2000);
}, 3500);


