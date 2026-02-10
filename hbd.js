$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})

const field = document.querySelector(".balloon-field");

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// 🎈 BALLOONS
for (let i = 0; i < 25; i++) {
  const b = document.createElement("div");
  b.className = "balloon";
  b.style.left = random(0, 100) + "vw";
  b.style.animationDuration = random(6, 12) + "s";
  b.style.background = `hsl(${random(0,360)}, 80%, 70%)`;
  field.appendChild(b);

  // INTERAKSI
  b.addEventListener("mouseenter", () => {
    b.style.transform = "scale(1.2)";
  });
}

// 🦋 BUTTERFLIES
for (let i = 0; i < 10; i++) {
  const f = document.createElement("div");
  f.className = "butterfly";
  f.style.left = random(0, 100) + "vw";
  f.style.bottom = random(-200, 0) + "px";
  f.style.animationDuration = random(7, 14) + "s";
  field.appendChild(f);

  f.addEventListener("mouseenter", () => {
    f.style.transform += " scale(1.3)";
  });
}
