import React, { useState } from "react";
import CardProduct from "../molecules/CardProduct";
import Paginator from "../molecules/Paginator";
import PortalDialogSearch from "../organisms/PortalDialogSearch";
import Header from "../organisms/Header";
import iconFilter from "../../assets/icon-filter.svg";
import PortalModal from "../organisms/PortalModal";
import OptionsFilters from "../molecules/OptionsFilters";

const Home = () => {
    const [showDialogSearch, setShowDialogSearch] = useState(false);
    const [showModalfilter, setShowModalFilter] = useState(false);

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

    const dataProducts = [
        {
            id: 1,
            srcImage: "https://realplaza.vtexassets.com/arquivos/ids/23501034-300-auto",
            brand: "AMAZFIT",
            description: "Smartwatch Amazfit GTS 2 Mini Negro Medianoche",
            price: 659.00,
            priceFinal: 399.00,
            discount: 39
        },
        {
            id: 2,
            srcImage: "https://realplaza.vteximg.com.br/arquivos/ids/24833513/image-4dd0f315f8de4f3f9182a9f798cdf509.jpg",
            brand: "XIAOMI",
            description: "Celular Xiaomi Redmi Note 11 4GB RAM 128GB Azul - Versión Global",
            price: 499.00,
            priceFinal: 349.00,
            discount: 30
        },
        {
            id: 3,
            srcImage: "https://realplaza.vtexassets.com/arquivos/ids/15316242-800-auto",
            brand: "REEBOK",
            description: "Zapatillas Urbanas Reebok Hombre  Royal Complete Cln2 Blanco",
            price: 179.00,
            priceFinal: 143.00,
            discount: 20
        },
        {
            id: 4,
            srcImage: "https://realplaza.vtexassets.com/arquivos/ids/22887909-800-auto",
            brand: "SAMSUNG",
            description: 'Televisor Samsung 50" AU7090 UHD 4K Smart TV 2021 UN50AU7090GXPE',
            price: 2199,
            priceFinal: 1599,
            discount: 27
        },
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
            <section>
                <div className="container container-results">
                    <div className="col-full container-results__title">
                        <h1>Lo más buscado</h1>
                        <div className="button-filter" onClick={()=> setShowModalFilter(true)}>
                            <img src={iconFilter} alt="icon filter"/>
                        </div>
                    </div>
                    {
                        showModalfilter &&
                        <PortalModal
                            title="Filtros"
                            handleClose={() => setShowModalFilter(false)}
                        >
                            <OptionsFilters callback={() => setShowModalFilter(false)}/>
                        </PortalModal>
                    }
                    {
                        dataProducts.map(({srcImage, brand, description, price, priceFinal, discount}, index) =>
                            <CardProduct 
                                srcImage={srcImage}
                                brand={brand}
                                description={description}
                                price={price}
                                priceFinal={priceFinal}
                                discount={discount}
                                key={index}
                            />
                        )
                    }
                    <Paginator steps={4}/>
                </div>
            </section>
        </>
    );
}

export default Home;