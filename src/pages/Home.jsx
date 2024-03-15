// !  library
import { useState } from 'react'
import axios from 'axios'

// ! Style
import '../styles/Home.css'

// ! images
import section1Img from '../images/HomeImg.png'
import section2Part1Img from '../images/UI-UX.jpg'
import section2Part2Img from '../images/timefainancal.png'
import section2Part3Img from '../images/Security.png'
import hours247 from '../images/24-7.png'
import BTC from '../images/bitcoin.png'
import ETH from '../images/ethereum.webp'
import TRX from '../images/Trx.webp'



export const Home = () => {
    let [priceOfBtc, setPriceOfBtc] = useState()
    let [priceOfETH, setpriceOfETH] = useState()
    let [priceOfTRX, setpriceOfTRX] = useState()

    let [changeOfBTC, setChangeOfBTC] = useState()
    let [changeOfETH, setChangeOfETH] = useState()
    let [changeOfTRX, setChangeOfTRX] = useState()


    axios.get('https://api.wallex.ir/v1/currencies/stats').then((res) => {
        setPriceOfBtc(res.data.result[0].price)
        console.log(res.data.result);
        setChangeOfBTC(res.data.result[0].percent_change_24h)

        setpriceOfETH(res.data.result[1].price)
        setChangeOfETH(res.data.result[1].percent_change_24h)

        setpriceOfTRX(res.data.result[8].price);
        setChangeOfTRX(res.data.result[8].percent_change_24h)
    })


    return (
        <div className='root'>
            <marquee scrollamount='10' style={{backgroundColor: 'BlueViolet'}}> if you VPN on, Turn off to correctly work website </marquee>
            <section className='section1'>
                <div className='title'>
                    <h1 className='h1title'> Welecome to Crypto Alert </h1>
                    <p className='titleP'> We help you to know the price<br /> information of different<br /> currencies and use it.<br /> To familiarize yourself with the site scroll </p>
                </div>
                <div className='picture'><img className='titleImg' src={section1Img} /></div>
            </section>

            <section className='section2'>
                <div className="part1">
                    <img src={section2Part1Img} className='imgOfPart1' />
                    <hr />
                    <h2> ‌Bests UI / UX used in the sites </h2>

                    <p>This website is built on the principles of UI / UX and makes your experience more beautiful and convenient</p>
                </div>
                <div className="part2">
                    <img src={section2Part2Img} className='imgOfPart2' />
                    <hr />
                    <h2> Momentary change </h2>
                    <p> Prices change instantly and you will never be left behind in the hot crypto market </p>
                </div>
                <div className="part3">
                    <img src={section2Part3Img} className='imgOfPart3' />
                    <hr />
                    <h2> Secure </h2>
                    <p> It works without logging your information and is very secure </p>
                </div>
                <div className="part4">
                    <img src={hours247} className='imgOfPart4' />
                    <hr />
                    <h2> 24 / 7 online </h2>
                    <p> Our site is online 24 hours and 7 days a week and is ready to serve you. </p>
                </div>
            </section>
            <section className='section3'>
                <h2><a href='../Coins' className='h2Coins'> Coins &#8680; </a></h2>
                <div className="coinParts">
                    <div className="BTC">
                        <img src={BTC} alt="" className='BTCImg' />
                        <h2> BTC </h2>
                        <h2 className='priceBTC'> {priceOfBtc}$ </h2>
                        <p className='precent'> Precent change 24h :</p>
                        {changeOfBTC < 0 ? <h3 style={{ color: 'red', fontSize: '30px',  fontWeight: '300'}} className='changeOfBTCTxt'> {changeOfBTC} % </h3> : <h3 style={{ color: 'green', fontSize: '30px',  fontWeight: '300'}} className='changeOfBTCTxt'> {changeOfBTC} % </h3>}
                    </div>
                    <div className="column">
                        <div className="ETH">
                            <img style={{}} src={ETH} className='ETHImg' alt="" />
                            <div style={{ marginRight: '0' }} className="infoETH">
                                <h2> ETH </h2><br />
                                <h2> {`${priceOfETH}$`} </h2>
                                <pre className='pre' style={{ fontSize: '20px' }}>Precent change 24h:</pre>
                                {changeOfETH < 0 ? <h3 style={{ color: 'red', marginBottom: '100px', fontSize: '30px', fontWeight: '300' }} className='changeOfETHTxt'> {changeOfETH} % </h3> : <h3 style={{ color: 'green', fontSize: '30px', fontWeight: '300' }} className='changeOfETHTxt'> {changeOfETH} % </h3>}
                            </div>
                        </div>
                        <div className="TRX">
                            <img src={TRX} alt="" />
                            <div className="infoTRX">
                                <h2> TRX </h2>
                                <h2> {priceOfTRX} </h2>
                                <h3>percent of change 24h: </h3>
                                {changeOfTRX < 0 ? <h3 style={{ color: 'red', marginBottom: '10px', }} className='changeOfTRXTxt'> {changeOfTRX} % </h3> : <h3 style={{ color: 'green', }} className='changeOfTRXTxt'> {changeOfTRX} % </h3>}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}