import React, { useState } from "react";
import { inputSearch } from "../interfaces";
import iconSearch from "../../assets/icon-search.svg"
import iconClose from "../../assets/icon-close.svg"

const InputSearch = ({placeHolder, srcIcon, extraClass, handleChange, handleClose}:inputSearch) => {
    const [value, setValue] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) =>{
        setValue(e.currentTarget.value)
    }

    return(
        <div className={`input-search ${extraClass}`}>
            <div className="form-control">
                <input 
                    value={value} 
                    placeholder={placeHolder}
                    onChange={onChange}/>   
            </div>
            <button className="btn-search hide-desktop" onClick={handleClose}>
                <img src={iconSearch} alt="search"/>
            </button>
            <button className="btn-cancel hide-desktop" onClick={handleClose}>
                <img src={iconClose} alt="cancel"/>
            </button>
        </div>
    );
}

export default InputSearch;