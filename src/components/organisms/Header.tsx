import ButtonsGroup from "../molecules/ButtonGroup"
import {button} from "../interfaces"


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
            <ButtonsGroup buttons={buttons}/>
        </header>
    );
}

export default Header;