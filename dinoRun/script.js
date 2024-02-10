//bg jalan
let gerak = true;
function bgGerak() {
  if (gerak == true) {
    setTimeout(function () {
      let bg = document.getElementById("board");
      bg.style.backgroundPosition = parseInt(bg.style.backgroundPosition.replace("px", "")) - 1 + "px";
      //bg jalan end

      //update live score
      document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 1;
      bgGerak();
      //update live score end
    }, 0.2); //ini waktu kecepatan bg. dari setTimeOut
  }
}

bgGerak();

//boxgerak
function boxGerak() {
  setTimeout(function () {
    let box = document.getElementById("box");
    let dino = document.getElementById("Dino");

    let boxMarginLeft = parseInt(window.getComputedStyle(box).marginLeft.replace("px", ""));
    box.style.marginLeft = boxMarginLeft - 1 + "px";

    if (boxMarginLeft < -100) {
      box.style.marginLeft = "600px";
    }

    if (dino.offsetTop + 50 >= box.offsetTop && dino.offsetLeft + 50 >= box.offsetLeft && dino.offsetTop + 50 <= box.offsetTop + 50 && dino.offsetLeft <= box.offsetLeft + 50) {
      alert("anda kalah");
      gerak = false;
      dino.setAttribute("class", "freeze");
    }

    boxGerak();
  }, 5);
}

boxGerak();
//boxgerak end

//controller
window.addEventListener("keyup", function (e) {
  if (e.key === " ") {
    document.getElementById("Dino").style.marginTop = "10px";
    document.getElementById("Dino").style.marginLeft = "30px";
    document.getElementById("Dino").setAttribute("class", "freeze");
    document.getElementById("Dino").style.marginRight = "10px";
    setTimeout(function () {
      document.getElementById("Dino").style.marginTop = "160px";
      document.getElementById("Dino").setAttribute("class", "");
    }, 1000); // waktu setTime OUT
    //controller end
  }
});

//UDAH MENTOK TOLONG DI BANTUU WKWKWKWK
// NIATNYA PENGEN ADA LEVELNYA SAMA BISA GANTI BG TIAP 'SCORE 10.000'
