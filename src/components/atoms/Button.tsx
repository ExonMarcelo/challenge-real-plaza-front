import { button } from "../interfaces";

const Button = ({srcIcon, alt, text, action}:button) => {
    return(
        <button onClick={() => action()}>
            <img src={srcIcon} alt={alt}/>
            {text}
        </button>
    );
}

export default Button;