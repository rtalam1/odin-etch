const container = document.querySelector('#container')

function genDivs(n) {
    let e = container
    for (let i =0;i < n; i++){
        let row = document.createElement('div')
        row.className ='row'
        for(let x = 1; x<= n; x++){
            let cell = document.createElement('div')
            cell.className = "gridsquare";
            //cell.innerText = (i * n) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}
genDivs(16)













