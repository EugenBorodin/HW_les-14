function fetchData() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
        const price = data.bpi.USD.rate;
        document.getElementById('price').innerText = price;
    })
    .catch(error => {
        console.error('Error', error);
    });
}