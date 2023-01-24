import { useContext } from "react";
import DataContext from "../../context/DataContext"
import { HomeContextType } from "../../context/types";
import Header from "./Header";
import PortalDialogSearch from "./PortalDialogSearch";

const SectionHeader = () => {
    const {homeContext, setHomeContext} = useContext(DataContext) as HomeContextType;
    
    const {showInputSearch} = homeContext;

    const toggleSearch = () => {
        setHomeContext({
            ...homeContext,
            showInputSearch: !showInputSearch
        });
    }

    const dataButtons = [
        {
            srcIcon: "https://res.cloudinary.com/dc6ryfauy/image/upload/v1674259351/real-plaza/icon-search_jkifh4.svg",
            alt: "search",
            extraClass: "hide-desktop",
            action: toggleSearch
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
    ];

    return(
        <section className="shadow-header">
            <div className="container container-home">
                <Header 
                    srcBrand="https://res.cloudinary.com/dc6ryfauy/image/upload/v1674255734/real-plaza/logo-rp_fnuoca.webp" 
                    srcBrandMobile="https://res.cloudinary.com/dc6ryfauy/image/upload/v1674255734/real-plaza/desktop-logo-rp_tru1jw.webp" 
                    buttons={dataButtons}
                    className="col-full home__header"/>
                {
                    showInputSearch &&
                    <PortalDialogSearch 
                        handleClose={toggleSearch}
                    />
                }
            </div>
        </section>
    );
}

export default SectionHeader;