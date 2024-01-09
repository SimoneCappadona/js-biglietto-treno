const resultElement = document.getElementById("result"); //id html

const travel = prompt ('Quanti kilometri dovrai percorrere?' , 100); // km da percorrere
console.log('travel');

const age = prompt ("Quanti anni hai?" , 28);// anni passeggero
let price = travel * 0.21 ;

if (age < 18){ // in caso di minorenne riceve sconto
    alert('Hai uno sconto del 20%');
    const discountPrice = 20 ;
    console.log(discountPrice);
    const discount = price * discountPrice / 100;
    console.log (discount);
    const finalPrice = price - discount;
    console.log (finalPrice);
    resultElement.innerText = 'Prezzo del biglietto:'+ finalPrice + '€' // stampa prezzo
}
else if (age >= 65){ // in caso di over 65 riceve sconto
    alert('Hai uno sconto del 40%');
    const discountPrice = 40 ;
    console.log(discountPrice);
    const discount = price * discountPrice / 100;
    console.log (discount);
    const finalPrice = price - discount;
    console.log (finalPrice);
    resultElement.innerText = 'Prezzo del biglietto:'+ finalPrice + '€' // stampa prezzo
}else{ // non riceve nessuno sconto
    alert('Prezzo del biglietto');
    resultElement.innerText = 'Prezzo del biglietto:'+ price + '€' // stampa prezzo
}
console.log(age);




