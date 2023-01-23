import React from "react";
import ReactDOM from 'react-dom'
import InputSearch from "../atoms/InputSeach";
import PortalContainer from "../atoms/PortalContainer";

const PortalDialogSearch = () => {

    const divPortal = document.getElementById('portal')!;

    return ReactDOM.createPortal(
      <PortalContainer>
        <div className="container-input-search">
          <InputSearch
            placeHolder="¿Qué estás buscando?" 
            srcIcon="https://res.cloudinary.com/dc6ryfauy/image/upload/v1674259351/real-plaza/icon-search_jkifh4.svg"
            handleChange={()=>{}}/>
        </div>
      </PortalContainer>, 
      divPortal
    )
  }
  
  export default PortalDialogSearch;