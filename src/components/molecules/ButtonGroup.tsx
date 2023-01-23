import Button from "../atoms/Button"
import { button } from "../interfaces"

interface PropsButtonsGroup{
    buttons: Array<button>
}

const ButtonsGroup =  ({buttons}:PropsButtonsGroup) => {
    return(
        <div className="buttonsGroup">
            {
                buttons.map(({srcIcon, alt, text, action}, index) =>
                    <Button 
                        srcIcon={srcIcon} 
                        alt={alt} 
                        text={text}
                        action={action}
                        key={index}/>
                )
            }
        </div>
    );
}

export default ButtonsGroup;