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
function clearContainer(container){
    container.innerHTML = ''

}
function changeDivColor(x){
     return x.style.backgroundColor = "blue"
}

//const divs = document.querySelectorAll('.gridsquare')
//console.log(divs)

/*divs.forEach(x => x.addEventListener('mouseenter', function (){
    divs.forEach(e =>{
        //let help = e.querySelector('.gridsquare');
        x.style.backgroundColor = "blue"
        x.classList.add('test')

    })
}))
*/
//divs.forEach(x => x.addEventListener('mouseenter', () => x.style.backgroundColor ='black'))
const button = document.getElementById("button")
let input;
console.log(button)

genDivs(16)
const divs = document.querySelectorAll('.gridsquare')
divs.forEach(x => x.addEventListener('mouseenter', () => x.style.backgroundColor ='black'))

button.addEventListener('click',() =>{
    input = prompt('Enter to a number to create grid ')
    if (input > 100){
        alert("Grid size too large, try again")
        input = prompt('Enter a number to create grid')
    }
    let clear = document.getElementById('container')
    clearContainer(container)
    genDivs(input)
    const divs = document.querySelectorAll('.gridsquare')
    divs.forEach(x => x.addEventListener('mouseenter', () => x.style.backgroundColor ='black'))

})









