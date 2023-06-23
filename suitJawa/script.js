// const pGajah = document.querySelector('.gajah');
// const pOrang = document.querySelector('.orang');
// const pSemut = document.querySelector('.semut');
// // const komputer = document.querySelector('.img-komputer');
let skorPl = 0;
let skorKom = 0;
let batas = 10;
skorPlayer(skorPl);
skorKomputer(skorKom);
const inputReset = document.querySelector('.inputReset');
const inputSkor = document.querySelector('.inputSkor');
inputReset.addEventListener('click',function(){
    skorPl = 0;
    skorKom = 0;
    skorPlayer(skorPl);
    skorKomputer(skorKom);
});
inputSkor.addEventListener('input', function(){
    batas = inputSkor.value;
    console.log(batas);
});

function pilihanComputer(){
    const comp  = Math.random();

    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getResult(comp, player){
    if(player == comp) return 'SERI';
    if(player == 'gajah') return (comp == 'semut') ? 'KALAH':'MENANG';
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH':'MENANG';
    if(player == 'semut') return (comp == 'orang') ? 'KALAH':'MENANG';
}

function putar(){
    const imgCom = document.querySelector('.img-komputer');
    const gambar = ['gajah','orang', 'semut'];
    let i = 0;
    const startTime = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - startTime > 1000){
            clearInterval;
            return;
        }
        imgCom.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if ( i == gambar.length) i = 0;
    }, 100)
} 

function skorPlayer(skorPl){
    const skor = document.querySelector('.skor-player');
    skor.innerHTML = skorPl;

}
function skorKomputer(skorKom){
    const skor = document.querySelector('.skor-komputer');
    skor.innerHTML = skorKom;

}


function ending(){
    if(skorPl == batas){
                
        skorPl = 0; skorKom = 0;
        alert('SELAMAT!! KAMU MENANG!');
        skorPlayer(skorPl);
        skorKomputer(skorKom);
    }
    if(skorKom == batas){
        skorPl = 0; skorKom = 0;
        alert('HUHU!! KAMU KALAH!');
        skorPlayer(skorPl);
        skorKomputer(skorKom);
    }
}
// !! KURANG EFEKTIF
// pGajah.addEventListener('click', function(){
//     const pilPlayer = pGajah.className;
//     const pilKomputer = pilihanComputer();
//     const hasil = getResult(pilKomputer, pilPlayer);
//     info.innerHTML = hasil;

// })

const player = document.querySelectorAll('li img');
player.forEach(function(pil)  {
    pil.addEventListener('click', function(){
        const pilKomputer = pilihanComputer();
        const pilPlayer = pil.className;
        const hasil = getResult(pilKomputer, pilPlayer);
        
        putar(); 

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilKomputer + '.png');
            if(hasil == 'MENANG') {
                skorPl++;
                console.log(skorPl);
                skorPlayer(skorPl);
            }
            else if(hasil == 'KALAH') {
                skorKom ++;
                skorKomputer(skorKom);
            }
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            ending();
        }, 1000);

    });
})