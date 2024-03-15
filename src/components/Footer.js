// import React from 'react';
import { Link } from 'react-router-dom'

// !  Style
import '../styles/footer.css'

// ! images
import IR from '../images/iran.png'
import Crypto from '../images/HomeImg.png'
import github  from '../images/Github.jpg'

const Footer = () => {

    return (
        <div className='rootFooter'>
                <img src={Crypto} className='mainImg' style={{}} />
            <div className='rtFooter'>
            </div>
            <div className='ltFooter' style={{ marginTop: '50px' }}>
                <h2 className='heading' >「 ✦ Crypto Alert  ✦ 」</h2>
                <p> &#169; All Rights Reversed </p>
                <p> Website created by Milad Soleymani  </p>
                <p> Made by IRAN <img src={IR} className='IRImg' /></p>
                <div className='SocialMedias'>
                    <h3 className='social' ><a id='X' target='_blank' href='https://twitter.com/MiladCoderHere'> 𝕏 </a></h3>
                    <h3 className='social' ><a id='X' target='_blank' href='https://github.com/MiladCoderSoli'> <img src={github} className='github' /> </a></h3>





                </div>
            </div>
        </div>
    )
}

export default Footer;