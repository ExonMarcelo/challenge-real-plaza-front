import { ReactNode } from "react";

interface PropsPortalContainer{
    children: ReactNode
}

const PortalContainer = ({children}: PropsPortalContainer) => {
    return(
        <div className="portal-container">
            {children}
        </div>
    );
}

export default PortalContainer;