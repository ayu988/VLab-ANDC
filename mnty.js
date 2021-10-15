window.onload = function () {
    var d = document;
    var canvas = d.getElementById("canvas");
    var c = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;
    var main = {
        w: canvas.width,
        h: canvas.height
    };
    
    var elements = {
        pIn: d.getElementById("inside"),
        pOut: d.getElementById("outside"),
        tPoints: d.getElementById("total"),
        pi: d.getElementById("pi")
    };
    
    var circle = {
        x: main.w / 2,
        y: main.h / 2,
        r: main.h / 2
    };
    
    var data = {
        pIn: 0,
        pOut: 0,
        pTotal: 0,
        pi: 0
    };
    
    var content = {
        run: false
    };
    c.beginPath();
    c.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
    c.strokeStyle= "white";
    c.stroke();
    const pi_value = []
    const pi_data = [];
    const interval = [];
    var delayInMilliseconds = 100
    d.getElementById("start").onclick =function ab() {
        var iterate = document.getElementById("inp1").value;
        
    function draw() {
        for (let i = 0; i < iterate; i++) {
            let x = Math.floor(Math.random() * (main.h + 1));
            let y = Math.floor(Math.random() * (main.h + 1));
            
            setTimeout(function() {
                if (
                    Math.sqrt(
                        (x - circle.x) * (x - circle.x) + (y - circle.y) * (y - circle.y)
                        ) < circle.r
                        ) {
                            data.pIn++;
                            elements.pIn.innerHTML = data.pIn;
                            c.fillStyle = "red";
                        } 
                else {
                            data.pOut++;
                        elements.pOut.innerHTML = data.pOut;
                        c.fillStyle = "cyan";
                    }
                    
                    data.pTotal++;
                    elements.tPoints.innerHTML = data.pTotal;
                    
                    data.pi = 4 * (data.pIn / data.pTotal);
                    pi_data.push(data.pi);
                    pi_value[i]=3.1452;
                    interval.push(i);
                    elements.pi.innerHTML = data.pi;
                    var trace1 = {
                        x: interval,
                        y: pi_data,
                        type: 'scatter',
                        name: 'Estimated pi',
                    };
                    var trace2 = {
                        x: interval,
                        y: pi_value,
                        type: 'scatter',
                        name: 'Reference line',
                    };
                    var data12 = [trace1,trace2];
                    var layout = {
                        autosize: false,
                        title: 'Pi vs Interval Graph',
                        xaxis: {
                          title: 'Intervals'
                        },
                        yaxis: {
                          title: 'Calculated Pi',
                        }
                      };
                    Plotly.newPlot("graph",data12,layout);
                    //c.fillRect(x, y, 1, 1);
                    c.beginPath();
                    c.arc(x, y, 3.2, 0, Math.PI * 2, false);
                    c.fill();
                    c.stroke();
                }
              , delayInMilliseconds)};
              //console.log(pi_data,interval);
            
            
            if (content.run==false ) {
                requestAnimationFrame(draw);
            }
        }
        
        function start() {
            reset();
            content.run = true;
            draw();
        }
        
        function reset() {
            content.run = false;
            data.pIn = 0;
            data.pOut = 0;
            data.pTotal = 0;
            data.pi = 0;
            
            c.clearRect(0, 0, main.w, main.h);
            c.beginPath();
            c.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
            c.stroke();
    
            elements.pIn.innerHTML = data.pIn;
            elements.pOut.innerHTML = data.pOut;
            elements.tPoints.innerHTML = data.pTotal;
            elements.pi.innerHTML = data.pi;
        }
            reset();
            start();
        };
        
        // d.getElementById("stop").onclick = function () {
            //     content.run = false;
            // };
            
            // d.getElementById("reset").onclick = function () {
                //     reset();
                //     setTimeout(function () {
                    //         reset();
                    //     });
                    // };
};