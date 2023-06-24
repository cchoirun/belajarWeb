const papan = document.querySelector('.papan');
const cursor = document.getElementById('cursor');
const square_a = document.querySelector('.file-a').getElementsByClassName('square');
const square_b = document.querySelector('.file-b').getElementsByClassName('square');
const square_c = document.querySelector('.file-c').getElementsByClassName('square');
const square_d = document.querySelector('.file-d').getElementsByClassName('square');
const square_e = document.querySelector('.file-e').getElementsByClassName('square');
const square_f = document.querySelector('.file-f').getElementsByClassName('square');
const square_g = document.querySelector('.file-g').getElementsByClassName('square');
const square_h = document.querySelector('.file-h').getElementsByClassName('square');
const square_i = document.querySelector('.file-i').getElementsByClassName('square');
const square_j = document.querySelector('.file-j').getElementsByClassName('square');
const playButton = document.querySelector('.playButton')
const kotakNomor = [square_a, square_b, square_c, square_d, square_e, square_f, square_g, square_h, square_i, square_j];
const resetButton = document.querySelector('.resetButton');
const playerDisplay = document.querySelector('.playerDisplay');
let cur = 1, delay = 250, delayDadu = 1200;
playButton.disabled = true;
resetButton.disabled = true;

// PILIHAN DADU
function pilihanDadu(){
    const comp  = Math.random();
    if(comp < 0.16) return 1;
    if (comp >= 0.16 && comp < 0.33) return 2;
    if(comp >= 0.33 && comp < 0.5) return 3;
    if(comp >= 0.5 && comp < 0.67) return 4;
    if(comp >= 0.67 && comp < 0.9) return 5;
    return 6;
}


// ANIMASI DADU

function putar(){
    const imgCom = document.querySelector('.img-Dadu');
    const gambar = ['1', '2', '3', '4', '5', '6'];
    let i = 0;
    const startTime = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - startTime > delayDadu){
            clearInterval;
            return;
        }
        imgCom.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if ( i == gambar.length) i = 0;
    }, 50)
} 


// PENOMORAN KOTAK
// console.log(kotakNomor[0][2]);
let genap = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91], ganjil = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
// console.log(genap.length)
for(let i = 0 ; i < 10; i++){
    if(i%2 == 0){
        for(let j = 0 ; j < genap.length; j++){
            const teks = document.createTextNode(genap[j]);
            kotakNomor[j][i].append(teks);
            kotakNomor[j][i].setAttribute('id',genap[j]);
            genap[j]-=20;
            // console.log('f')
        }
    }else{
        for(let k = 0 ; k < ganjil.length; k++){
            const teks = document.createTextNode(ganjil[k]);
            kotakNomor[k][i].append(teks);
            kotakNomor[k][i].setAttribute('id',ganjil[k]);
            ganjil[k]-=20;
            // console.log('f')
        }}
}





// MOVEMENT 
let titikPlayer = 1, titikKomputer = 1; pawnColor = ['whitePawn','redPawn','yellowPawn','greenPawn','bluePawn','blackPawn'];
let pawnPlayer = pawnColor[0],pawnKomputer = pawnColor[5] ;
document.getElementById(titikPlayer).innerHTML = titikPlayer+'<img style="display: none" src="img/yellowPawn.png" id="pionku">';
function gerakPionAwal(titik,pil){
    const hapusPion = document.getElementById('pionku')
    hapusPion.remove();
    // document.getElementById(i).innerHTML = i;
    document.getElementById(titik).innerHTML = (titik)+'<img src="img/yellowPawn.png" id="pionku">';
    // document.getElementById(titik).innerHTML = (titik)+'<img src="img/yellowPawn.png" id="pionku2">';
    document.getElementById('pionku').setAttribute('src','img/'+pil+'.png');
}

function gerakPionAwalku(titik, pil) {
  const hapusPion = document.getElementById('pionku');
}


function gerakPion(titikPlayer, titikTujuan, delay, pil) {
    if (titikPlayer <= titikTujuan) {
        const hapusPion = document.getElementById('pionku');
        hapusPion.remove();
        // document.getElementById(i).innerHTML = i;
        document.getElementById(titikPlayer).innerHTML = (titikPlayer)+'<img src="img/yellowPawn.png" id="pionku">';
        document.getElementById('pionku').setAttribute('src','img/'+pil+'.png');
        document.getElementById('pionku').setAttribute('class','span');
        titikPlayer++;

        setTimeout(function() {
            gerakPion(titikPlayer, titikTujuan, delay, pil);
            // squareRule(pawnPlayer);        // } 
        }, delay);
    }
    // if(squareRule(pawnPlayer) == true) gerakPionAwal(titikPlayer,pawnPlayer);
}
function gerakPionReverse(titikPlayer, titikTujuan, delay, pil) {
    if (titikPlayer >= titikTujuan) {
        const hapusPion = document.getElementById('pionku');
        hapusPion.remove();
        // document.getElementById(i).innerHTML = i;
        document.getElementById(titikPlayer).innerHTML = (titikPlayer)+'<img src="img/yellowPawn.png" id="pionku">';
        document.getElementById('pionku').setAttribute('src','img/'+pil+'.png');
        titikPlayer--;

        setTimeout(function() {
            gerakPionReverse(titikPlayer, titikTujuan, delay, pil);
            // squareRule(pawnPlayer);        // } 
        }, delay);
    }
    // if(squareRule(pawnPlayer) == true) gerakPionAwal(titikPlayer,pawnPlayer);
}




// ATURAN PAPAN
function squareRule(pawns){
    let x = document.getElementById('pionku').parentElement.id;
    cur = parseInt(x);
    if( cur === 4){
      titikPlayer = 14;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 8){
      titikPlayer = 30;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 21){
      titikPlayer = 42;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 28){
      titikPlayer = 76;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 32){
      titikPlayer = 11;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 36){
      titikPlayer = 6;

      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*2);
    }     else if(cur === 48){
      titikPlayer = 26;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 50){
      titikPlayer = 67;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 62){
      titikPlayer = 17;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 71){
      titikPlayer = 92;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 81){
      titikPlayer = 99;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 88){
      titikPlayer = 24;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 95){
      titikPlayer = 44;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    else if(cur === 97){
      titikPlayer = 78;
      setTimeout(function() {
        gerakPionAwal(titikPlayer, pawns);
      }, delay*1.2);   
    } 
    
    
    // gerakPion(cur,titikPlayer,40, pawnPlayer);
        
    // gerakPionAwal(titikPlayer, pawnPlayer);
}



function movePawn(pawnku){
  setTimeout(function() {
    pilDadu = pilihanDadu();
    pilKom = pilihanDadu();
    let imgDadu = document.querySelector('.img-Dadu');
    imgDadu.setAttribute('src', 'img/' + pilDadu + '.png');

    cur = titikPlayer;
    titikPlayer += pilDadu;
    // console.log(titikPlayer);
    // LOGIKA FINISH
    if(titikPlayer == 100){
        alert('HORE! KAMU MENANG')
        titikPlayer = 1;
        gerakPionAwal(1,pawnku);
    }else if(titikPlayer == 101){
        titikPlayer = 99;
        // gerakPionAwal(titikPlayer, pawnku);
        gerakPion(cur, 100, delay, pawnku);
        setTimeout(function()  {
        gerakPionReverse(100, titikPlayer, delay, pawnku);  
          
        }, delay*(100 - cur));
    } 
      else if(titikPlayer == 102){
        titikPlayer = 98;
        // gerakPionAwal(titikPlayer, pawnku);
        gerakPion(cur, 100, delay, pawnku);
        setTimeout(function()  {
          gerakPionReverse(100, titikPlayer, delay, pawnku);  
          
        }, delay*(100 - cur));
    } 
      else if(titikPlayer == 103){
        titikPlayer = 97;
        // gerakPionAwal(titikPlayer, pawnku);
        gerakPion(cur, 100, delay, pawnku);
        setTimeout(function()  {
          gerakPionReverse(100, titikPlayer, delay, pawnku); 
          setTimeout(() => {
            titikPlayer = 78;
            gerakPionAwal(titikPlayer, pawnku);
          }, delay*(3+1));
        }, delay*(100 - cur));
    } 
      else if(titikPlayer == 104){
        titikPlayer = 96;
        // gerakPionAwal(titikPlayer, pawnku);
        gerakPion(cur, 100, delay, pawnku);
        setTimeout(function()  {
        gerakPionReverse(100, titikPlayer, delay, pawnku);  
          
        }, delay*(100 - cur));
    } 
      else if(titikPlayer == 105){
        titikPlayer = 95;
        // gerakPionAwal(titikPlayer, pawnku);
        gerakPion(cur, 100, delay, pawnku);
        setTimeout(function()  {
          gerakPionReverse(100, titikPlayer, delay, pawnku);  
          setTimeout(() => {
            titikPlayer = 44;
            gerakPionAwal(titikPlayer, pawnku);
          }, delay*(5+1));
        }, delay*(100 - cur));
    } 
    // console.log(titikPlayer);
    // console.log(pilDadu);
    gerakPion(cur,titikPlayer,delay, pawnku);
    playButton.disabled = false;
    resetButton.disabled = false;
    
    setTimeout(() => {
      squareRule(pawnPlayer);
    }, delay*(titikPlayer-cur+1));
    
    
    
}, delayDadu + 50);

}

// HASIL DADU
playButton.addEventListener('click',function(){
  playButton.disabled = true;
  resetButton.disabled = true;
    putar();
    movePawn(pawnPlayer);
    setTimeout(() => {
      // putar();
      console.log(pilKom);
      // movePawn(pawnKomputer);
    }, (delayDadu * 3) );
    })


// RESET BUTTON
 resetButton.addEventListener('click', function(){
    titikPlayer = 1;
    gerakPionAwal(titikPlayer, pawnPlayer);
 });
 
let c = 0;
let arrayOfPawn = ['white', 'red', 'yellow', 'green','blue','black', 'white'];
function KomputerChoice(){
const c = Math.floor(Math.random()*6+1);
return arrayOfPawn[c];

}

// PILIH PION
const tag = document.createElement('h1');
const pawnPick = document.getElementsByClassName('img-Pawn');
let currentPlayer = '', currentKomputer = '';
for(const x of pawnPick){
    x.addEventListener('click',function(){
        playButton.disabled = false;
        resetButton.disabled = false;
        titikPlayer = 1;
        pawnPlayer = x.getAttribute('id');
        let stringPlayer = pawnPlayer;
        let stringKomputer = KomputerChoice();
        
        // console.log(KomputerChoice());
        stringPlayer = stringPlayer.replace('Pawn','');
        if (stringKomputer == stringPlayer ) stringKomputer = arrayOfPawn[c++];
        
        if (currentPlayer) {
            // Perbarui konten elemen h1 yang sudah ada
            currentPlayer.textContent = 'YOU: ' + stringPlayer;
            currentKomputer.textContent = 'COM: ' + stringKomputer;
          } else {
            // Buat elemen h1 baru dan tambahkan ke dalam div
            const tag = document.createElement('h1');
            const tag2 = document.createElement('h1');
            tag.textContent = 'YOU: ' + stringPlayer;
            tag2.textContent = 'COM: ' + stringKomputer;
            playerDisplay.appendChild(tag);
            playerDisplay.appendChild(tag2);
            currentPlayer = tag;
            currentKomputer = tag2;
          }
        gerakPionAwal(1, pawnPlayer);
        
    });
    
}

let a = document.getElementById('pionku').parentElement.id;

