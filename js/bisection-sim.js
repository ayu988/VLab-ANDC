let intervalA = document.querySelector('.interval--A');
let intervalB = document.querySelector('.interval--B');
let userIterations = document.querySelector('.iterations');
const a = document.querySelector('.cube-coefficient');
const b = document.querySelector('.square-coefficient');
const c = document.querySelector('.linear-coefficient');
const d = document.querySelector('.coefficient');
const submit = document.querySelector('.root--finder');
const equationResult = document.querySelector('.eqnResult');
const validResult = document.querySelector('.validRange');
const equationData = [];
const interval = [];
const arrEquation1 = [];
const arrEquation2 = [];
const arrRoot = [];

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let iterations = 0;
    let intervalAvalue = Number(intervalA.value);
    let intervalBvalue = Number(intervalB.value);
    const valueA = Number(a.value);
    const valueB = Number(b.value);
    const valueC = Number(c.value);
    const valueD = Number(d.value);
    const userIterationsValue = Number(userIterations.value);
    let root;
    let equation;

    setTimeout(() => {
    for (iterations; iterations < userIterationsValue; iterations++) {
        const equation1 = valueA * intervalAvalue ** 3 + valueB * intervalAvalue ** 2 + valueC * intervalAvalue + valueD;
        const equation2 = valueA * intervalBvalue ** 3 + valueB * intervalBvalue ** 2 + valueC * intervalBvalue + valueD;
            
            if ((equation1 * equation2) > 1) {
                validResult.textContent = 'Enter a valid range';
            } else {
                root = (intervalAvalue + intervalBvalue) / 2;
                equation = valueA * root ** 3 + valueB * root ** 2 + valueC * root + valueD;
                if (equation > 0) {
                    intervalBvalue = root;
                } else if (equation < 0) {
                    intervalAvalue = root;
                }
                equationData.push([iterations + 1, equation1, equation2, root]);
                interval.push(iterations);
                arrEquation1.push(equation1);
                arrEquation2.push(equation2);
                arrRoot.push(root);
            }
        };
        let layout = {
            autosize: false,
            title: 'Function vs Interval ',
            xaxis: {
                title: 'Intervals'
            },
            yaxis: {
                title: 'Calculated Root',
            }
        };
        
        let trace1 = {
            x: interval,
            y: arrEquation1,
            type: 'scatter',
            name: 'f(a)',
        };
        let trace2 = {
            x: interval,
            y: arrEquation2,
            type: 'scatter',
            name: 'f(b)',
        };
        let trace3 = {
            x: interval,
            y: arrRoot,
            type: 'scatter',
            name: 'Value of the root',
        };
        const data12 = [trace1, trace2, trace3];
        Plotly.newPlot("graph", data12, layout);
        equationResult.textContent = root;
    }, 1000);
    });
    
    document.getElementById("file--download").onclick = function down() {
    function download_csv_file() {
        var rows = ['Iterations', 'f(A)', 'f(B)', 'Root\n'];
        equationData.forEach(function (cell) {
            rows += cell.join(',');
            rows += "\n";
        });

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(rows);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'Bisection-Method.csv';
        hiddenElement.click();
    }
    download_csv_file();
};
