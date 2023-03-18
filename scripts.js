const container = document.querySelector('#container')

function genDivs(n) {
    let e = container
    for (let i =0;i < n; i++){
        let row = document.createElement('div')
        row.className ='row'
        for(let x = 1; x<= n; x++){
            let cell = document.createElement('div')
            cell.className = "gridsquare";
            cell.id = (i * n) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}
function changeDivColor(x){
     return x.style.backgroundColor = "blue"
}
genDivs(16)

const divs = document.querySelectorAll('.gridsquare')
console.log(divs)

/*divs.forEach(x => x.addEventListener('mouseenter', function (){
    divs.forEach(e =>{
        //let help = e.querySelector('.gridsquare');
        x.style.backgroundColor = "blue"
        x.classList.add('test')

    })
}))
*/
divs.forEach(x => x.addEventListener('mouseenter', () => x.style.backgroundColor ='blue'))








