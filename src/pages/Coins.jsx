// ! Style
import '../styles/Coins.css'

// ! axios
import axios from 'axios'

// ! useState
import { useState } from 'react'


// ! Images
import USDT from '../images/ICONS/usdt.svg'
import BTC from '../images/ICONS/BTC.svg'
import ETH from '../images/ICONS/ETH.svg'
import XRP from '../images/ICONS/XRP.svg'
import SOL from '../images/ICONS/SOL.svg'
import TRX from '../images/ICONS/TRX.svg'
import DOGE from '../images/ICONS/DOGE.svg'
import BNB from '../images/ICONS/BNB.svg'
import SHIB from '../images/ICONS/SHIB.svg'

import BTC3D from '../images/bitcoin.png'
import ETH3D from '../images/ethereum.webp'
import XRP3D from '../images/xrp.png'
import SOL3D from '../images/SOL.png'
import TRX3D from '../images/Trx.webp'
import SHIB3D from '../images/Shiba.png'
import LTC3D from '../images/LTC.png'
import ADA3D from '../images/ADA.png'
import DOGE3D from '../images/DOGE.webp'
import AAve3D from '../images/Aave.png'
import BNB3D from '../images/BNB.webp'
import BCH3D from '../images/BCH.webp'
import MANA3D from '../images/MANA.webp'
import ETC3D from '../images/ETC.webp'
import FTM3D from '../images/FTM.png'
import FIL3D from '../images/FIL.webp'
import ONE3D from '../images/ONE.webp'
import IMX3D from '../images/IMX.png'
import MATIC3D from '../images/MATIC.webp'
import AVAX3D from '../images/AVAX.webp'
import AXS3D from '../images/AXS.webp'
import COMP3D from '../images/COMP.webp'
import EOS3D from '../images/EOS.webp'
import DOT3D from '../images/DOT.webp'
import TON3D from '../images/TON.webp'
import LINK3D from '../images/LINK.webp'
import CAKE3D from '../images/CAKE.webp'
import UNI3D from '../images/UNI.webp'
import BTT3D from '../images/BTT.webp'
import NEAR3D from '../images/NEAR.webp'
import ARB3D from '../images/ARB.webp'
import ENJ3D from '../images/ENJ.webp'
import INCH13D from '../images/1INCH.webp'
import XLM3D from '../images/XLM.webp'





export const Coins = () => {
    let [BTCPrice, setBTCPrice] = useState(0);
    let [ETHPrice, setETHPrice] = useState(0);
    let [XRPPrice, setXRPPrice] = useState(0);
    let [SOLPrice, setSOLPrice] = useState(0);
    let [TRXPrice, setTRXPrice] = useState(0);
    let [SHIBPrice, setSHIBPrice] = useState(0);
    let [LTCPrice, setLTCPrice] = useState(0);
    let [ADAPrice, setADAPrice] = useState(0);
    let [DOGEPrice, setDOGEPrice] = useState(0);
    let [AAvePrice, setAAvePrice] = useState(0);
    let [BNBPrice, setBNBPrice] = useState(0);
    let [BCHPrice, setBCHPrice] = useState(0);
    let [MANAPrice, setMANAPrice] = useState(0);
    let [ETCPrice, setETCPrice] = useState(0);
    let [FTMPrice, setFTMPrice] = useState(0);
    let [FILPrice, setFILPrice] = useState(0);
    let [ONEPrice, setONEPrice] = useState(0);
    let [IMXPrice, setIMXPrice] = useState(0);
    let [MATICPrice, setMATICPrice] = useState(0);
    let [AVAXPrice, setAVAXPrice] = useState(0);
    let [AXSPrice, setAXSPrice] = useState(0);
    let [COMPPrice, setCOMPPrice] = useState(0);
    let [EOSPrice, setEOSPrice] = useState(0);
    let [DOTPrice, setDOTPrice] = useState(0);
    let [TONPrice, setTONPrice] = useState(0);
    let [LINKPrice, setLINKPrice] = useState(0);
    let [CAKEPrice, setCAKEPrice] = useState(0);
    let [UNIPrice, setUNIPrice] = useState(0);
    let [BTTPrice, setBTTPrice] = useState(0);
    let [NEARPrice, setNEARPrice] = useState(0);
    let [ARBPrice, setARBPrice] = useState(0);
    let [ENJPrice, setENJPrice] = useState(0);
    let [INCH1Price, setINCH1Price] = useState(0);
    let [XLMPrice, setXLMPrice] = useState(0);


    let [precentChangeBTC, setPrecentChangeBTC] = useState(0);
    let [precentChangeETH, setPrecentChangeETH] = useState(0);
    let [precentChangeXRP, setPrecentChangeXRP] = useState(0);
    let [precentChangeSOL, setPrecentChangeSOL] = useState(0);
    let [precentChangeTRX, setPrecentChangeTRX] = useState(0);
    let [precentChangeSHIB, setPrecentChangeSHIB] = useState(0);
    let [precentChangeLTC, setPrecentChangeLTC] = useState(0);
    let [precentChangeADA, setPrecentChangeADA] = useState(0);
    let [precentChangeDOGE, setPrecentChangeDOGE] = useState(0);
    let [precentChangeAAve, setPrecentChangeAAve] = useState(0);
    let [precentChangeBNB, setPrecentChangeBNB] = useState(0);
    let [precentChangeBCH, setPrecentChangeBCH] = useState(0);
    let [precentChangeMANA, setPrecentChangeMANA] = useState(0);
    let [precentChangeETC, setPrecentChangeETC] = useState(0);
    let [precentChangeFTM, setPrecentChangeFTM] = useState(0);
    let [precentChangeFIL, setPrecentChangeFIL] = useState(0);
    let [precentChangeONE, setPrecentChangeONE] = useState(0);
    let [precentChangeIMX, setPrecentChangeIMX] = useState(0);
    let [precentChangeMATIC, setPrecentChangeMATIC] = useState(0);
    let [precentChangeAVAX, setPrecentChangeAVAX] = useState(0);
    let [precentChangeAXS, setPrecentChangeAXS] = useState(0);
    let [precentChangeCOMP, setPrecentChangeCOMP] = useState(0);
    let [precentChangeEOS, setPrecentChangeEOS] = useState(0);
    let [precentChangeDOT, setPrecentChangeDOT] = useState(0);
    let [precentChangeTON, setPrecentChangeTON] = useState(0);
    let [precentChangeLINK, setPrecentChangeLINK] = useState(0);
    let [precentChangeCAKE, setPrecentChangeCAKE] = useState(0);
    let [precentChangeUNI, setPrecentChangeUNI] = useState(0);
    let [precentChangeBTT, setPrecentChangeBTT] = useState(0);
    let [precentChangeNEAR, setPrecentChangeNEAR] = useState(0);
    let [precentChangeARB, setPrecentChangeARB] = useState(0);
    let [precentChangeENJ, setPrecentChangeENJ] = useState(0);
    let [precentChangeINCH1, setPrecentChangeINCH1] = useState(0);
    let [precentChangeXLM, setPrecentChangeXLM] = useState(0);


    let [athPriceBTC, setAthPriceBTC] = useState(0);
    let [athPriceETH, setAthPriceETH] = useState(0);
    let [athPriceXRP, setAthPriceXRP] = useState(0);
    let [athPriceSOL, setAthPriceSOL] = useState(0);
    let [athPriceTRX, setAthPriceTRX] = useState(0);
    let [athPriceSHIB, setAthPriceSHIB] = useState(0);
    let [athPriceLTC, setAthPriceLTC] = useState(0);
    let [athPriceADA, setAthPriceADA] = useState(0);
    let [athPriceDOGE, setAthPriceDOGE] = useState(0);
    let [athPriceAAve, setAthPriceAAve] = useState(0);
    let [athPriceBNB, setAthPriceBNB] = useState(0);
    let [athPriceBCH, setAthPriceBCH] = useState(0);
    let [athPriceMANA, setAthPriceMANA] = useState(0);
    let [athPriceETC, setAthPriceETC] = useState(0);
    let [athPriceFTM, setAthPriceFTM] = useState(0);
    let [athPriceFIL, setAthPriceFIL] = useState(0);
    let [athPriceONE, setAthPriceONE] = useState(0);
    let [athPriceIMX, setAthPriceIMX] = useState(0);
    let [athPriceMATIC, setAthPriceMATIC] = useState(0);
    let [athPriceAVAX, setAthPriceAVAX] = useState(0);
    let [athPriceAXS, setAthPriceAXS] = useState(0);
    let [athPriceCOMP, setAthPriceCOMP] = useState(0);
    let [athPriceEOS, setAthPriceEOS] = useState(0);
    let [athPriceDOT, setAthPriceDOT] = useState(0);
    let [athPriceTON, setAthPriceTON] = useState(0);
    let [athPriceLINK, setAthPriceLINK] = useState(0);
    let [athPriceCAKE, setAthPriceCAKE] = useState(0);
    let [athPriceUNI, setAthPriceUNI] = useState(0);
    let [athPriceBTT, setAthPriceBTT] = useState(0);
    let [athPriceNEAR, setAthPriceNEAR] = useState(0);
    let [athPriceARB, setAthPriceARB] = useState(0);
    let [athPriceENJ, setAthPriceENJ] = useState(0);
    let [athPriceINCH1, setAthPriceINCH1] = useState(0);
    let [athPriceXLM, setAthPriceXLM] = useState(0);



    axios.get('https://api.wallex.ir/v1/currencies/stats').then((res) => {
        setBTCPrice(res.data.result[0].price.toFixed(0))
        setETHPrice(res.data.result[1].price.toFixed(0))
        setLTCPrice(res.data.result[3].price.toFixed(0))
        setXRPPrice(res.data.result[7].price.toFixed(5))
        setSOLPrice(res.data.result[32].price.toFixed(5))
        setTRXPrice(res.data.result[8].price.toFixed(5))
        setSHIBPrice(res.data.result[17].price.toFixed(5))
        setLTCPrice(res.data.result[3].price.toFixed(5))
        setADAPrice(res.data.result[11].price.toFixed(5))
        setDOGEPrice(res.data.result[5].price.toFixed(5))
        setAAvePrice(res.data.result[35].price.toFixed(5))
        setBNBPrice(res.data.result[12].price.toFixed(5))
        setBCHPrice(res.data.result[2].price.toFixed(5))
        setMANAPrice(res.data.result[25].price.toFixed(5))
        setETCPrice(res.data.result[46].price.toFixed(5))
        setFTMPrice(res.data.result[15].price.toFixed(5))
        setFILPrice(res.data.result[18].price.toFixed(5))
        setONEPrice(res.data.result[130].price.toFixed(5))
        setIMXPrice(res.data.result[119].price.toFixed(5))
        setMATICPrice(res.data.result[14].price.toFixed(5))
        setAVAXPrice(res.data.result[30].price.toFixed(5))
        setAXSPrice(res.data.result[26].price.toFixed(5))
        setCOMPPrice(res.data.result[50].price.toFixed(5))
        setEOSPrice(res.data.result[10].price.toFixed(5))
        setDOTPrice(res.data.result[16].price.toFixed(5))
        setTONPrice(res.data.result[135].price.toFixed(5))
        setLINKPrice(res.data.result[20].price.toFixed(5))
        setCAKEPrice(res.data.result[19].price.toFixed(5))
        setUNIPrice(res.data.result[21].price.toFixed(5))
        setBTTPrice(res.data.result[24].price.toFixed(5))
        setNEARPrice(res.data.result[45].price.toFixed(5))
        setARBPrice(res.data.result[124].price.toFixed(5))
        setENJPrice(res.data.result[28].price.toFixed(5))
        setINCH1Price(res.data.result[40].price.toFixed(5))
        setXLMPrice(res.data.result[9].price.toFixed(5))


        setPrecentChangeBTC(res.data.result[0].percent_change_24h.toFixed(3))
        setPrecentChangeETH(res.data.result[1].percent_change_24h.toFixed(3))
        setPrecentChangeXRP(res.data.result[7].percent_change_24h.toFixed(3))
        setPrecentChangeSOL(res.data.result[32].percent_change_24h.toFixed(3))
        setPrecentChangeTRX(res.data.result[8].percent_change_24h.toFixed(3))
        setPrecentChangeSHIB(res.data.result[17].percent_change_24h.toFixed(3))
        setPrecentChangeLTC(res.data.result[3].percent_change_24h.toFixed(3))
        setPrecentChangeADA(res.data.result[11].percent_change_24h.toFixed(3))
        setPrecentChangeDOGE(res.data.result[5].percent_change_24h.toFixed(3))
        setPrecentChangeAAve(res.data.result[35].percent_change_24h.toFixed(3))
        setPrecentChangeBNB(res.data.result[12].percent_change_24h.toFixed(3))
        setPrecentChangeBCH(res.data.result[2].percent_change_24h.toFixed(3))
        setPrecentChangeMANA(res.data.result[25].percent_change_24h.toFixed(3))
        setPrecentChangeETC(res.data.result[46].percent_change_24h.toFixed(3))
        setPrecentChangeFTM(res.data.result[15].percent_change_24h.toFixed(3))
        setPrecentChangeFIL(res.data.result[18].percent_change_24h.toFixed(3))
        setPrecentChangeONE(res.data.result[130].percent_change_24h.toFixed(3))
        setPrecentChangeIMX(res.data.result[119].percent_change_24h.toFixed(3))
        setPrecentChangeMATIC(res.data.result[14].percent_change_24h.toFixed(3))
        setPrecentChangeAVAX(res.data.result[30].percent_change_24h.toFixed(3))
        setPrecentChangeAXS(res.data.result[26].percent_change_24h.toFixed(3))
        setPrecentChangeCOMP(res.data.result[50].percent_change_24h.toFixed(3))
        setPrecentChangeEOS(res.data.result[10].percent_change_24h.toFixed(3))
        setPrecentChangeDOT(res.data.result[16].percent_change_24h.toFixed(3))
        setPrecentChangeTON(res.data.result[135].percent_change_24h.toFixed(3))
        setPrecentChangeLINK(res.data.result[20].percent_change_24h.toFixed(3))
        setPrecentChangeCAKE(res.data.result[19].percent_change_24h.toFixed(3))
        setPrecentChangeUNI(res.data.result[21].percent_change_24h.toFixed(3))
        setPrecentChangeBTT(res.data.result[24].percent_change_24h.toFixed(3))
        setPrecentChangeNEAR(res.data.result[45].percent_change_24h.toFixed(3))
        setPrecentChangeARB(res.data.result[124].percent_change_24h.toFixed(3))
        setPrecentChangeENJ(res.data.result[28].percent_change_24h.toFixed(3))
        setPrecentChangeINCH1(res.data.result[40].percent_change_24h.toFixed(3))
        setPrecentChangeXLM(res.data.result[9].percent_change_24h.toFixed(3))


        setAthPriceBTC(res.data.result[0].ath.toFixed(6))
        setAthPriceETH(res.data.result[1].ath.toFixed(6))
        setAthPriceXRP(res.data.result[7].ath.toFixed(6))
        setAthPriceSOL(res.data.result[32].ath.toFixed(6))
        setAthPriceTRX(res.data.result[8].ath.toFixed(6))
        setAthPriceSHIB(res.data.result[17].ath.toFixed(6))
        setAthPriceLTC(res.data.result[3].ath.toFixed(5))
        setAthPriceADA(res.data.result[11].ath.toFixed(5))
        setAthPriceDOGE(res.data.result[5].ath.toFixed(5))
        setAthPriceAAve(res.data.result[35].ath.toFixed(5))
        setAthPriceBNB(res.data.result[12].ath.toFixed(5))
        setAthPriceBCH(res.data.result[2].ath.toFixed(5))
        setAthPriceMANA(res.data.result[25].ath.toFixed(5))
        setAthPriceETC(res.data.result[46].ath.toFixed(5))
        setAthPriceFTM(res.data.result[15].ath.toFixed(5))
        setAthPriceFIL(res.data.result[18].ath.toFixed(5))
        setAthPriceONE(res.data.result[130].ath.toFixed(5))
        setAthPriceIMX(res.data.result[119].ath.toFixed(5))
        setAthPriceMATIC(res.data.result[14].ath.toFixed(5))
        setAthPriceAVAX(res.data.result[30].ath.toFixed(5))
        setAthPriceAXS(res.data.result[26].ath.toFixed(5))
        setAthPriceCOMP(res.data.result[50].ath.toFixed(5))
        setAthPriceEOS(res.data.result[10].ath.toFixed(5))
        setAthPriceDOT(res.data.result[16].ath.toFixed(5))
        setAthPriceTON(res.data.result[135].ath.toFixed(5))
        setAthPriceLINK(res.data.result[20].ath.toFixed(5))
        setAthPriceCAKE(res.data.result[19].ath.toFixed(5))
        setAthPriceUNI(res.data.result[19].ath.toFixed(5))
        setAthPriceBTT(res.data.result[24].ath.toFixed(5))
        setAthPriceNEAR(res.data.result[45].ath.toFixed(5))
        setAthPriceARB(res.data.result[124].ath.toFixed(5))
        setAthPriceENJ(res.data.result[28].ath.toFixed(5))
        setAthPriceINCH1(res.data.result[40].ath.toFixed(5))
        setAthPriceXLM(res.data.result[9].ath.toFixed(5))

        console.log(res.data.result);
    }
    )

    // ! Most Popular Part
    return (
        <div className="rootOfPage">
            <h1> Coins </h1>
            <div className="MostPop">
                <h2> Most Popular </h2>
                <div className="BTCPartPop"><img src={BTC} className='ImgPop' /> <p className='pOfMost'> BTC  </p> <p className='PriceMost' > {BTCPrice} $ </p> {precentChangeBTC < 0 ? <p className='precentChange' style={{ color: 'red', }}> {precentChangeBTC} % </p> : <p className='precentChange' style={{ color: 'green', }}> {precentChangeBTC} %</p>}</div>
                <div className="ETHPartPop"><img src={ETH} className='ImgPop' /> <p className='pOfMost'> ETH  </p> <p className='PriceMost' > {ETHPrice} $ </p> {precentChangeETH < 0 ? <p className='precentChange' style={{ color: 'red', }}> {precentChangeETH} % </p> : <p className='precentChange' style={{ color: 'green', }}> {precentChangeETH} %</p>}</div>
                <div className="XRPPartPop"><img src={XRP} className='ImgPop' /> <p className='pOfMost'> XRP  </p> <p className='PriceMost' > {XRPPrice} $ </p> {precentChangeXRP < 0 ? <p className='precentChange' style={{ color: 'red', }}> {precentChangeXRP} % </p> : <p className='precentChange' style={{ color: 'green', }}> {precentChangeXRP} % </p>}</div>
                <div className="TRXPartPop"><img src={TRX} className='ImgPop' /> <p className='pOfMost'> TRX </p> <p className='PriceMost' > {TRXPrice} $ </p> {precentChangeTRX < 0 ? <p className='precentChange' style={{ color: 'red', }}> {precentChangeTRX} % </p> : <p className='precentChange' style={{ color: 'green', }}> {precentChangeTRX} % </p>}</div>
                <div className="SOLPartPop"><img src={SOL} className='ImgPop SOL' style={{ width: '60px' }} /> <p className='pOfMost'> SOL </p> <p className='PriceMost' > {SOLPrice} $ </p> {precentChangeSOL < 0 ? <p className='precentChange' style={{ color: 'red', }}> {precentChangeSOL} %</p> : <p className='precentChange' style={{ color: 'green', }}> {precentChangeSOL} %</p>}</div>
            </div>


            {// ! important part 
            }
            <div className="Coins">
                <div className="ExPart"><p className='CoinIconex' style={{ color: 'white' }}> Coin Icon </p> <p className='CoinNameex'> Coin Name </p> <p className='CoinPriceex' style={{ color: 'white' }}> Coin Price </p> <p className='example' style={{ color: 'white', }}> precent Change 24h </p> <p className='athBTC'> ath </p> </div>


                <div className="BTCPart list"><img src={BTC3D} className='Img BTCImg' /> <p className='CoinNameBTC CoinName'> BTC </p>     <p className='price' style={{ color: 'white' }}> {BTCPrice} $</p> {precentChangeBTC < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeBTC} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeBTC} %</p>} <p className='ath'> {athPriceBTC} $</p>  </div>


                <div className="ETHPart list"><img src={ETH3D} className='Img ETHImg' /> <p className='CoinNameETH CoinName'> ETH </p>     <p className='price' style={{ color: 'white' }}> {ETHPrice} $</p> {precentChangeETH < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeETH} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeETH} %</p>} <p className='ath'> {athPriceETH} $</p>  </div>


                <div className="SOLPart list"><img src={SOL3D} className='Img SOLImg' /> <p className='CoinNameSOL CoinName'> SOL </p>     <p className='price' style={{ color: 'white' }}> {SOLPrice} $</p> {precentChangeSOL < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeSOL} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeSOL} %</p>} <p className='ath'> {athPriceSOL} $</p>  </div>


                <div className="XRPPart list"><img src={XRP3D} className='Img' /> <p className='CoinNameXRP CoinName'> XRP </p>     <p className='price' style={{ color: 'white' }}> {XRPPrice} $</p> {precentChangeXRP < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeXRP} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeXRP} %</p>} <p className='ath'> {athPriceXRP} $</p>  </div>


                <div className="SHIBPart list"><img src={SHIB3D} className='Img' /> <p className='CoinNameSHIB CoinName'> SHIB </p>     <p className='price' style={{ color: 'white' }}> {SHIBPrice} $</p> {precentChangeSHIB < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeSHIB} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeSHIB} %</p>} <p className='ath'> {athPriceSHIB} $</p>  </div>


                <div className="LTCPart list"><img src={LTC3D} className='Img' /> <p className='CoinNameLTC CoinName'> LTC </p>     <p className='price' style={{ color: 'white' }}> {LTCPrice} $</p> {precentChangeLTC < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeLTC} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeLTC} %</p>} <p className='ath'> {athPriceLTC} $</p>  </div>


                <div className="ADAPart list"><img src={ADA3D} className='Img' /> <p className='CoinNameADA CoinName'> ADA </p>     <p className='price' style={{ color: 'white' }}> {ADAPrice} $</p> {precentChangeADA < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeADA} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeADA} %</p>} <p className='ath'> {athPriceADA} $</p>  </div>


                <div className="DOGEPart list"><img src={DOGE3D} className='Img' /> <p className='CoinNameDOGE CoinName'> DOGE </p>     <p className='price' style={{ color: 'white' }}> {DOGEPrice} $</p> {precentChangeDOGE < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeDOGE} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeDOGE} %</p>} <p className='ath'> {athPriceDOGE} $</p>  </div>


                <div className="AAvePart list"><img src={AAve3D} className='Img' /> <p className='CoinNameAAve CoinName'> AAve </p>     <p className='price' style={{ color: 'white' }}> {AAvePrice} $</p> {precentChangeAAve < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeAAve} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeAAve} %</p>} <p className='ath'> {athPriceAAve} $</p>  </div>


                <div className="BNBPart list"><img src={BNB3D} className='Img' /> <p className='CoinNameBNB CoinName'> BNB </p>     <p className='price' style={{ color: 'white' }}> {BNBPrice} $</p> {precentChangeBNB < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeBNB} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeBNB} %</p>} <p className='ath'> {athPriceBNB} $</p>  </div>


                <div className="BCHPart list"><img src={BCH3D} className='Img' /> <p className='CoinNameBCH CoinName'> BCH </p>     <p className='price' style={{ color: 'white' }}> {BCHPrice} $</p> {precentChangeBCH < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeBCH} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeBCH} %</p>} <p className='ath'> {athPriceBCH} $</p>  </div>


                <div className="MANAPart list"><img src={MANA3D} className='Img' /> <p className='CoinNameMANA CoinName'> MANA </p>     <p className='price' style={{ color: 'white' }}> {MANAPrice} $</p> {precentChangeMANA < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeMANA} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeMANA} %</p>} <p className='ath'> {athPriceMANA} $</p>  </div>


                <div className="ETCPart list"><img src={ETC3D} className='Img' /> <p className='CoinNameETC CoinName'> ETC </p>     <p className='price' style={{ color: 'white' }}> {ETCPrice} $</p> {precentChangeETC < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeETC} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeETC} %</p>} <p className='ath'> {athPriceETC} $</p>  </div>


                <div className="FTMPart list"><img src={FTM3D} className='Img' /> <p className='CoinNameFTM CoinName'> FTM </p>     <p className='price' style={{ color: 'white' }}> {FTMPrice} $</p> {precentChangeFTM < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeFTM} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeFTM} %</p>} <p className='ath'> {athPriceFTM} $</p>  </div>


                <div className="FILPart list"><img src={FIL3D} className='Img' /> <p className='CoinNameFIL CoinName'> FIL </p>     <p className='price' style={{ color: 'white' }}> {FILPrice} $</p> {precentChangeFIL < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeFIL} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeFIL} %</p>} <p className='ath'> {athPriceFIL} $</p>  </div>


                <div className="ONEPart list"><img src={ONE3D} className='Img' /> <p className='CoinNameONE CoinName'> ONE </p>     <p className='price' style={{ color: 'white' }}> {ONEPrice} $</p> {precentChangeONE < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeONE} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeONE} %</p>} <p className='ath'> {athPriceONE} $</p>  </div>


                <div className="IMXPart list"><img src={IMX3D} className='Img' /> <p className='CoinNameIMX CoinName'> IMX </p>     <p className='price' style={{ color: 'white' }}> {IMXPrice} $</p> {precentChangeIMX < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeIMX} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeIMX} %</p>} <p className='ath'> {athPriceIMX} $</p>  </div>


                <div className="MATICPart list"><img src={MATIC3D} className='Img' /> <p className='CoinNameMATIC CoinName'> MATIC </p>     <p className='price' style={{ color: 'white' }}> {MATICPrice} $</p> {precentChangeMATIC < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeMATIC} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeMATIC} %</p>} <p className='ath'> {athPriceMATIC} $</p>  </div>


                <div className="AVAXPart list"><img src={AVAX3D} className='Img' /> <p className='CoinNameAVAX CoinName'> AVAX </p>     <p className='price' style={{ color: 'white' }}> {AVAXPrice} $</p> {precentChangeAVAX < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeAVAX} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeAVAX} %</p>} <p className='ath'> {athPriceAVAX} $</p>  </div>


                <div className="AXSPart list"><img src={AXS3D} className='Img' /> <p className='CoinNameAXS CoinName'> AXS </p>     <p className='price' style={{ color: 'white' }}> {AXSPrice} $</p> {precentChangeAXS < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeAXS} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeAXS} %</p>} <p className='ath'> {athPriceAXS} $</p>  </div>


                <div className="COMPPart list"><img src={COMP3D} className='Img' /> <p className='CoinNameCOMP CoinName'> COMP </p>     <p className='price' style={{ color: 'white' }}> {COMPPrice} $</p> {precentChangeCOMP < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeCOMP} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeCOMP} %</p>} <p className='ath'> {athPriceCOMP} $</p>  </div>


                <div className="EOSPart list"><img src={EOS3D} className='Img' /> <p className='CoinNameEOS CoinName'> EOS </p>     <p className='price' style={{ color: 'white' }}> {EOSPrice} $</p> {precentChangeEOS < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeEOS} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeEOS} %</p>} <p className='ath'> {athPriceEOS} $</p>  </div>


                <div className="DOTPart list"><img src={DOT3D} className='Img' /> <p className='CoinNameDOT CoinName'> DOT </p>     <p className='price' style={{ color: 'white' }}> {DOTPrice} $</p> {precentChangeDOT < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeDOT} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeDOT} %</p>} <p className='ath'> {athPriceDOT} $</p>  </div>


                <div className="TONPart list"><img src={TON3D} className='Img' /> <p className='CoinNameTON CoinName'> TON </p>     <p className='price' style={{ color: 'white' }}> {TONPrice} $</p> {precentChangeTON < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeTON} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeTON} %</p>} <p className='ath'> {athPriceTON} $</p>  </div>


                <div className="LINKPart list"><img src={LINK3D} className='Img' /> <p className='CoinNameLINK CoinName'> LINK </p>     <p className='price' style={{ color: 'white' }}> {LINKPrice} $</p> {precentChangeLINK < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeLINK} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeLINK} %</p>} <p className='ath'> {athPriceLINK} $</p>  </div>


                <div className="CAKEPart list"><img src={CAKE3D} className='Img' /> <p className='CoinNameCAKE CoinName'> CAKE </p>     <p className='price' style={{ color: 'white' }}> {CAKEPrice} $</p> {precentChangeCAKE < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeCAKE} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeCAKE} %</p>} <p className='ath'> {athPriceCAKE} $</p>  </div>


                <div className="UNIPart list"><img src={UNI3D} className='Img' /> <p className='CoinNameUNI CoinName'> UNI </p>     <p className='price' style={{ color: 'white' }}> {UNIPrice} $</p> {precentChangeUNI < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeUNI} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeUNI} %</p>} <p className='ath'> {athPriceUNI} $</p>  </div>


                <div className="BTTPart list"><img src={BTT3D} className='Img' /> <p className='CoinNameBTT CoinName'> BTT </p>     <p className='price' style={{ color: 'white' }}> {BTTPrice} $</p> {precentChangeBTT < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeBTT} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeBTT} %</p>} <p className='ath'> {athPriceBTT} $</p>  </div>


                <div className="NEARPart list"><img src={NEAR3D} className='Img' /> <p className='CoinNameNEAR CoinName'> NEAR </p>     <p className='price' style={{ color: 'white' }}> {NEARPrice} $</p> {precentChangeNEAR < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeNEAR} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeNEAR} %</p>} <p className='ath'> {athPriceNEAR} $</p>  </div>


                <div className="ARBPart list"><img src={ARB3D} className='Img' /> <p className='CoinNameARB CoinName'> ARB </p>     <p className='price' style={{ color: 'white' }}> {ARBPrice} $</p> {precentChangeARB < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeARB} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeARB} %</p>} <p className='ath'> {athPriceARB} $</p>  </div>


                <div className="ENJPart list"><img src={ENJ3D} className='Img' /> <p className='CoinNameENJ CoinName'> ENJ </p>     <p className='price' style={{ color: 'white' }}> {ENJPrice} $</p> {precentChangeENJ < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeENJ} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeENJ} %</p>} <p className='ath'> {athPriceENJ} $</p>  </div>


                <div className="XLMPart list"><img src={XLM3D} className='Img' /> <p className='CoinNameXLM CoinName'> XLM </p>     <p className='price' style={{ color: 'white' }}> {XLMPrice} $</p> {precentChangeXLM < 0 ? <p className='precentChangeCoin' style={{ color: 'red', }}> {precentChangeXLM} %</p> : <p className='precentChangeCoin' style={{ color: 'green', }}> {precentChangeXLM} %</p>} <p className='ath'> {athPriceXLM} $</p>  </div>

            </div>
        </div>
    )
}