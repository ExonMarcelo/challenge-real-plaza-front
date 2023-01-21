import React, { useState } from "react";
import PortalDialogSearch from "../molecules/PortalDialogSearch";
import Header from "../organisms/Header";

const Home = () => {
    const [showDialogSearch, setShowDialogSearch] = useState(false);

    const handleSearch = () => {
        setShowDialogSearch(true);
    }

    const dataButtons = [
        {
            srcIcon: "https://res.cloudinary.com/dc6ryfauy/image/upload/v1674259351/real-plaza/icon-search_jkifh4.svg",
            alt: "search",
            action: handleSearch
        },
        {
            srcIcon: "https://res.cloudinary.com/dc6ryfauy/image/upload/v1674259351/real-plaza/cart_ye06ya.svg",
            alt: "cart",
            action: ()=>{}
        },
        {
            srcIcon: "https://res.cloudinary.com/dc6ryfauy/image/upload/v1674259351/real-plaza/menu_zfjcws.svg",
            alt: "menu",
            action: ()=>{}
        }
    ]
    
    return(
        <>
            <section>
                <div className="container container-home">
                    <Header 
                        srcBrand="https://res.cloudinary.com/dc6ryfauy/image/upload/v1674255734/real-plaza/logo-rp_fnuoca.webp" 
                        srcBrandMobile="https://res.cloudinary.com/dc6ryfauy/image/upload/v1674255734/real-plaza/desktop-logo-rp_tru1jw.webp" 
                        buttons={dataButtons}
                        className="col-full home__header"/>
                    {
                        showDialogSearch &&
                        <PortalDialogSearch/>
                    }
                </div>
            </section>
        </>
    );
}

export default Home;