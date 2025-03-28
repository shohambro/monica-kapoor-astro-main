"use client"
import Image from "next/image";
import { useEffect } from "react";
const WhatsappLive = () => {

    const whatsappNumber = "9873113829";
    const baseUrl="https://api.whatsapp.com/send/";
    const encodedMessage = `Hi!`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    useEffect(() => {



        const handleScroll = () => {
            const whatsappLinkElement = document.querySelector('.whatsapp-link');
            if(window.scrollY > 100){
                whatsappLinkElement?.classList.add('visible');
            }else{      
                whatsappLinkElement?.classList.remove('visible');
            }
        };
        const checkScrollVisibility = () => {
            const whatsappLinkElement = document.querySelector('.whatsapp-link');
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if(scrollHeight > clientHeight){
                handleScroll();
                window.addEventListener('scroll', handleScroll);
            }
            else{
                window.removeEventListener('scroll', handleScroll);
            }
        };
        checkScrollVisibility();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return ( 
        <div>
            <a 
            href={whatsappLink}
            className="whatsapp-link relative"
            target="_blank"
            rel="noreferrer">
              <span className=" left-[7px] top-[7px] -z-50 size-10">
                <span className="absolute flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75">

                </span>
                <Image src="/images/whatsapp.png" alt="whatsapp" width={40} height={40} className="whatsapp-icon z-50" />
              </span>  
            </a>
        </div>
     );
}
 
export default WhatsappLive;
