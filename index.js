
function draw_divide_circle() {
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    circle_x = 350;
    circle_y = 350;
    circle_radius = document.getElementById("radius").value;
    ctx.arc(circle_x,circle_y,circle_radius,0,2*Math.PI);
    ctx.stroke();
    var number_of_parts = document.getElementById("no_segments").value;
    var segment_type = document.querySelector('input[name="segment_type"]:checked').value;
    for(i=0; i < number_of_parts; i++) {
        var angle_i = (2*i*Math.PI)/number_of_parts;
        var x_i = (circle_radius*Math.cos(angle_i)) + circle_x;
        var y_i = (circle_radius*Math.sin(angle_i)) + circle_y;
        if (segment_type == 'line') {
            ctx.beginPath();
            ctx.moveTo(circle_x,circle_y);
            ctx.lineTo(x_i,y_i);
            ctx.stroke();
        } else {
            ctx.fillRect(x_i,y_i,3,3);
        }
    }
}

function download_canvas() {
    document.getElementById("downloader").download = "image.png";
    document.getElementById("downloader").href = document.getElementById("canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
}
