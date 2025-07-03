import {getContext, keys} from "./week03-module.js";

document.addEventListener("DOMContentLoaded", function() {
    //coding here!
    const ctx = getContext("#myCanvas");

    const player = {
        x: 300,
        y: 200,
        size: 50, // width and height
        color: "red",
    };

        function draw() {
            ctx.fillStyle = "rgb(200, 255, 255)"; //error
            ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
            
            //ubdate data/input "WASD" keys
            if (keys["w"]) {
                player.x -= 0.1;
            }

            ctx.save();
            ctx.translate(player.x, player.y);
            ctx.fillStyle = player.color;
            ctx.fillRect( -player.size/2,-player.size/2, player.size, player.size);
            ctx.restore();

            requestAnimationFrame(draw);
    }
    draw();
});