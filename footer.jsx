import React from "react" ;
import Image from "next/image" ;
import
{
 TiSocialFacebook,
 TiSocialLinkedin,
 TiSocialTwitter,
 TiSocialYoutube,
 TiSocialInstagram,
 TiArrowSortedDown,
 TiArrowSortedUp,
} from "react-icon/ti";
import {RiSendPlaneFill} from 'react-icon/ri' ; //coming from provider which is 'ri'

//INTERNAL IMPORT
import Style from './Footer.module.css';
import Image from '../../img';
import {Discover, HelpCenter} from "../NevBar/index";  //this will display components.here discover and helpcanter are components. these components are from nevigation bar.

const Footer = () => {
    return(
        <div className={Style.footer}>
            <div className={Style.footer_box}>
                <div className={Style.footer_box_socila}>
                    <Image src={Image.logo} alt="footer logo" heinght={100} width={100}     />
                    <p> the world's first and largest digital marketplace for non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            
                    </p>

                    
                    <div className={Style.footer_social}>
                        <a href= "#">
                            <TiSocialFacebook/>
                        </a>
                        <a href= "#">
                            <TiSocialInstagram/>
                        </a>
                        <a href="#">
                            <TiSocialLinkedin/>
                        </a>
                        <a href="#">
                            <TiSocialTwitter/>
                        </a>
                        <a href="#">
                            <TiSocialYoutube/>
                        </a>
                    </div>
             </div>
             <div className={Style.footer_box_discover}>
                <h3>Discover</h3>
                <Discover/> 
             </div>
             <div className={Style.footer_box_help}>
                <h3> Help Center </h3>
                <HelpCenter/>
             </div>
             <div className={Style.subscribe}>
                <h3>subscribe here</h3>
             <div className={Style.subscribe_box}>
                <input type='email' placeholder="enter your email* "/>
                <RiSendPlaneFill className={Style.subscribe_box_send} /> //display icon which we are impoting
             </div>
               <div className={Style.sibscribe_box_info}>
                <P>
                    Discover, collect and sell extraordinary NFTs. Opensea isthe first and largest NFT marketplace.
                </P>
               </div>
             
             </div>
            </div>
        </div>
    )
}


