 /// Crypto Alert \\\


This is a React project named Crypto Alert. It displays cryptocurrency data fetched from the CryptoCompare API.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and npm installed on your computer.

Installing
Clone the project:


Navigate to the project directory:


cd crypto-alert
Install the dependencies:


npm install
Start the development server:


npm start
Open your browser and navigate to http://localhost:3000 to view the app.

Built With
React - A JavaScript library for building user interfaces.
axios - Promise-based HTTP client for the browser and Node.js.
Author
Your Name - your-username
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Hat tip to anyone whose code was used.
Inspiration: Gary Simon of Coursetro: React CryptoCurrency Tutorial - Display Exchange Data with an API sept 2017
:computer: Code Examples
extract of App.js - axios http asynchronous call to cryptocurrency API.
javascript

componentDidMount() {
  const fsymsList = 'BTC,XRP,BCH,ETH,ZEC,EOS,XMR,ETC,LTC,DASH,QTUM,NEO,XLM,TRX,ADA,BTS,USDT,XUC,PAX,IOT'
    axios
      .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + fsymsList + '&tsyms=USD')
      .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
    });
}
:clipboard: Status & To-Do List
Status: Working. Deployed to Guthub-Pages
To-Do: Nothing
:clap: Inspiration
Gary Simon of Coursetro: React CryptoCurrency Tutorial - Display Exchange Data with an API sept 2017
Is this conversation helpful so far?