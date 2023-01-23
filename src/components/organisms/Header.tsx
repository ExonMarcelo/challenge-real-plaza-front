import ButtonsGroup from "../molecules/ButtonGroup"
import {button} from "../interfaces"
import InputSearch from "../atoms/InputSeach"


interface PropsHeader{
    srcBrand: string
    srcBrandMobile: string
    buttons: Array<button>
    className: string
}

const Header = ({srcBrand, srcBrandMobile, buttons, className}: PropsHeader) => {
    return(
        <header className={className}>
            <img src={srcBrand} className="logo" alt="logo"/>
            <img src={srcBrandMobile} className="logo--desk" alt="logo"/>
            <InputSearch
                placeHolder="¿Qué estás buscando?" 
                srcIcon="https://res.cloudinary.com/dc6ryfauy/image/upload/v1674259351/real-plaza/icon-search_jkifh4.svg"
                handleChange={()=>{}}
                handleClose={()=>{}}
                extraClass="hide-flex-tablet-on-down"
            />
            <ButtonsGroup buttons={buttons}/>
        </header>
    );
}

export default Header;