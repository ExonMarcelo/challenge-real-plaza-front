import { button } from "../interfaces";

const Button = ({srcIcon, alt, text, extraClass, action}:button) => {
    return(
        <button onClick={() => action()} className={extraClass}>
            <img src={srcIcon} alt={alt}/>
            {text}
        </button>
    );
}

export default Button;