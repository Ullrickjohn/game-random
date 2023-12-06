// let text = '';

// for(let i = 0; i < 10; i++){

// }

let luckyNum = 7

while (true){
    let answ = +prompt("O'ylangan sonni kiriting")
    if(answ === luckyNum){
        alert('Siz yutdingiz')
        break;
    }
    else if(answ == 0){
        alert('Son kiritilmadi!')
        
    }    
    else if (isNaN(answ)){
        alert('Faqat son kiriting! Harf kiritish mumkin emas ')
    }
    else if (answ > 10){
        alert('1 dan 10 gacha son kiriting! 10 dan katta son kiritish mumkin emas!')
    }
    else if (answ < 0){
        alert('1 dan 10 gacha son kiriting! 0 dan kichik sonlar mumkun emas')

    }
    else{
        alert('siz topa olmadingiz')
    }

}