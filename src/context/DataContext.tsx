import { createContext, ReactNode, useState } from "react";
import { Home } from "./types";

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export function HomeContextProvider({ children }: Props) {
    const initialState = {
        showInputSearch: false,
        showModalFilter: false,
        isLoadingProducts: false
    };
    const [homeContext, setHomeContext] = useState<Home>(initialState);
    return (
        <Context.Provider value={{ homeContext, setHomeContext }}>
            {children}
        </Context.Provider>
    );
}

export default Context;