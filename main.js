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
                reWrite(data[26].rate,data[33].rate,data[25].rate,data[18].rate);
                console.log(data);
            })
        });
}

let USDCurrency = document.querySelector('.USDCurrency');
let EURCurrency = document.querySelector('.EURCurrency');
let GBRCurrency = document.querySelector('.GBRCurrency');
let RUBCurrency = document.querySelector('.RUBCurrency');

function reWrite( ... data){
    USDCurrency.innerHTML = data[0]
    EURCurrency.innerHTML = data[1]
    GBRCurrency.innerHTML = data[2]
    RUBCurrency.innerHTML = data[3]
}
getDataFromServer();