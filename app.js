document.getElementById("button1").addEventListener("click", () => {
   let canvas = document.createElement("canvas");
   canvas.width = 1200;
   canvas.height = 900;
   let container = document.getElementsByClassName("button-wrapper")[0];

   container.appendChild(canvas);

   let confetti_button = confetti.create(canvas);
   confetti_button({
      particleCount: 900,
      spread: 500,
      startVelocity: 45,
      scalar: 0.9,
      ticks: 190,
   });

   confetti_button().then(() => container.removeChild(canvas));
});
//
//
//

let end = 11150;

const frame = () => {
   //    var end = Date.now() + 10 * 150;
   let canvas2 = document.createElement("canvas");
   //    canvas2.width = 600;
   //    canvas2.height = 600;

   document.body.appendChild(canvas2);

   let confetti_button2 = confetti.create(canvas2, { resize: true });

   confetti_button2();

   confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#bb0000", "#ffffff"],
   });
   confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#bb0000", "#ffffff"],
   });

   //    confetti_button().then(() => container.removeChild(canvas));
   if (0 < end) {
      requestAnimationFrame(frame);
      confetti();
   } else {
      //   location.reload();
      //setTimeout(location.reload())
   }
   document.body.removeChild(canvas2);
   end = end - 100;
};

document.getElementById("button2").addEventListener("click", frame);
