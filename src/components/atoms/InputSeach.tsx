import React, { useState } from "react";
import { inputSearch } from "../interfaces";

const InputSearch = ({placeHolder, srcIcon, handleChange}:inputSearch) => {
    const [value, setValue] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) =>{
        setValue(e.currentTarget.value)
    }

    return(
        <div className="input-search">
            <input 
                value={value} 
                placeholder={placeHolder}
                onChange={onChange}/>
        </div>
    );
}

export default InputSearch;