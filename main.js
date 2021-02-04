let data = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
let test = 0;
function getDataFromServer (){
    fetch(data)
    .then(
        function(response) {
            if(response.status != 200){
                console.log('Looks like there was a problem.Status Code' + " " + response.status)
                return;
            }          
            response.json().then(function(data){
                reWrite(data[26].rate,data[33].rate,data[25].rate,data[18].rate,data[26].exchangedate);

            })
        });
}

let USDCurrency = document.querySelector('.USDCurrency');
let EURCurrency = document.querySelector('.EURCurrency');
let GBRCurrency = document.querySelector('.GBRCurrency');
let RUBCurrency = document.querySelector('.RUBCurrency');
let dataCurrency = document.querySelector('.dataCurrency');
//----------- Deposit Calculate ------------
let calculateButton = document.getElementById('calculateButton');

function reWrite( ... data){
    USDCurrency.innerHTML = data[0]
    EURCurrency.innerHTML = data[1]
    GBRCurrency.innerHTML = data[2]
    RUBCurrency.innerHTML = data[3]
    dataCurrency.innerHTML = data[4]
}

function calculateDeposit(){
    let money = document.getElementById('money').value;
    let month = document.getElementById('month').value/12;
    let interest = document.getElementById('interest').value*0.01;
    let deposit = Math.round(+money*(1+(interest)*month));
    console.log(deposit);
}
calculateButton.addEventListener('click',function(){
    calculateDeposit();
})
getDataFromServer();
//-------show interface manu-----
let showButtonCurrency = document.querySelector('.showButtonCurrency');
let showButtonDeposit = document.querySelector('.showButtonDeposit');
let mainMenu = document.querySelector('.mainMenu');
let mainWindowCurrency = document.querySelector('.mainWindowCurrency');
let mainWindowDeposit = document.querySelector('.mainWindowDeposit');

mainMenu.addEventListener('click',function(e){
    if(e.target.className == 'showButtonCurrency'){
            mainWindowCurrency.style.visibility = "visible";
        
    }else if(e.target.className == 'showButtonDeposit'){
        mainWindowDeposit.style.visibility = "visible";
        console.log('work');
    }
})
