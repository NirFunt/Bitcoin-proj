const axios = require('axios');

export const BitcoinService = {
    getRate,
    getTradeVolume,
    getAvgBlock,
    getMarketPrice
}

getTradeVolume()
getAvgBlock()
getMarketPrice()

function getRate(coins = 'USD') {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('coinRate')) {
            resolve(localStorage.getItem('coinRate'));
            console.log('taking coinRate from local storage')
        } else {
            axios.get(`https://blockchain.info/tobtc?currency=${coins}&value=1`)
                .then(res => {
                    localStorage.setItem('coinRate', res.data);
                    return resolve(res.data);
                });
        }
    })
}

function getTradeVolume() {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('tradeVolume')) {
            resolve(JSON.parse(localStorage.getItem('tradeVolume')));
            console.log('taking tradeVolume from local storage')
        } else {
            axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
                .then(res => {
                    localStorage.setItem('tradeVolume', JSON.stringify(res.data));
                    return resolve(res.data);
                });
        }
    })
}

function getAvgBlock() {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('avgBlock')) {
            resolve(JSON.parse(localStorage.getItem('avgBlock')));
            console.log('taking avgBlock from local storage')
        } else {
            axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`)
                .then(res => {
                    localStorage.setItem('avgBlock', JSON.stringify(res.data));
                    return resolve(res.data);
                });
        }
    })
}

function getMarketPrice() {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('marketPrice')) {
            resolve(JSON.parse(localStorage.getItem('marketPrice')));
            console.log('taking marketPrice from local storage')
        } else {
            axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
                .then(res => {
                    localStorage.setItem('marketPrice', JSON.stringify(res.data));
                    return resolve(res.data);
                });
        }
    })
}



