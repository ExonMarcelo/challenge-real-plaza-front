import React, { ReactNode } from "react";
import ReactDOM from 'react-dom'
import PortalContainer from "../atoms/PortalContainer";
import Modal from "../molecules/Modal";

interface PropsPortalModal{
  title: string
  children: ReactNode
  handleClose: () => void
}

const PortalModal = ({title, children, handleClose}:PropsPortalModal) => {

    const divPortal = document.getElementById('portal')!;

    return ReactDOM.createPortal(
      <PortalContainer>
        <Modal 
          title={title}
          children={children}
          handleClose={handleClose}
          />
      </PortalContainer>, 
      divPortal
    )
  }
  
  export default PortalModal;