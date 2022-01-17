
const siyahi = ["paper.jpeg", "das.png","scissors.png"]
// console.log(siyahi[siyahi.length-1])
//  DOM Document Object Model 
// `` template literal string literal 



const kagiz = document.getElementById('paper')
const das = document.getElementById('das')
const qayci = document.getElementById('qayci')

//komputerin qerari ve netice olan hisse
const komputerinSecimi = document.getElementById('komputer-secim')
const neticeniYaz = document.getElementById('netice')

// hadiseler - onclick, onmouseover, onchange
// hoisting 
kagiz.onclick = seciminiEle
das.onclick = seciminiEle
qayci.onclick = seciminiEle
// ternary operator tetbiq oluna bilmez!
function seciminiEle() {
    const komputerinQerari = randomSecim() //0 1 2
    const menimSecimim = this.dataset.id // 

    if(komputerinQerari == 0 && menimSecimim == 0) {
        netice = "Try again"
    }
    else if(komputerinQerari ==0 && menimSecimim ==1) {
        netice = "Komputer win! Kagiz dashi bukur"
    }

    else if(komputerinQerari ==0 && menimSecimim ==2) {
        netice = "Qayci kagizi kesir ! You won!"
    }

    else if(komputerinQerari ==1 && menimSecimim ==0) {
        netice = "Siz qazanirsiniz! Kagiz dashi bukur"
    }

    else if(komputerinQerari ==1 && menimSecimim ==1) {
        netice = "Try again!"
    }

    else if(komputerinQerari ==1 && menimSecimim ==2) {
        netice = "Komputer win! Dash qaycini sindirir"
    }

    else if(komputerinQerari ==2 && menimSecimim == 0) {
        netice = "Qayci kagizi kesir. Komputer win!"
    }
    else if(komputerinQerari == 2 && menimSecimim == 1) {
        netice = "You are win! Dash qaycini sindirir!"
    }
    else {
        netice = "Try again!"
    }

    neticeniYaz.innerText = netice





}
// const randomSecim = () => console.log("salam")
function randomSecim(){
    const say = Math.round(Math.random()*2) // 0 1 2
    komputerinSecimi.src = `./img/${siyahi[say]}`
    return say
}

