import { useContext } from "react";
import DataContext from "../../context/DataContext"
import { HomeContextType } from "../../context/types";
import CardProduct from "../molecules/CardProduct";
import OptionsFilters from "../molecules/OptionsFilters";
import Paginator from "../molecules/Paginator";
import PortalModal from "./PortalModal";
import iconFilter from "../../assets/icon-filter.svg"

const SectionResults = () => {
    const { homeContext, setHomeContext } = useContext(DataContext) as HomeContextType;

    const { showModalFilter } = homeContext;

    const setShowModalFilter = (value: boolean) => {
        setHomeContext({
            ...homeContext,
            showModalFilter: value
        });
    }

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

    return (
        <section>
            <div className="container container-results">
                <div className="col-full container-results__title">
                    <h1>Lo más buscado</h1>
                    <div className="button-filter" onClick={() => setShowModalFilter(true)}>
                        <img src={iconFilter} alt="icon filter"/>
                    </div>
                </div>
                {
                    showModalFilter &&
                    <PortalModal
                        title="Filtros"
                        handleClose={() => setShowModalFilter(false)}
                    >
                        <OptionsFilters handleClose={() => setShowModalFilter(false)}/>
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
    );
}

export default SectionResults;