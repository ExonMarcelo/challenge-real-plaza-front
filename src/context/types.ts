export type Home = {
    showInputSearch: boolean;
    showModalFilter: boolean;
}

export type HomeContextType = {
    homeContext: Home;
    setHomeContext: (value: Home) => void;
};