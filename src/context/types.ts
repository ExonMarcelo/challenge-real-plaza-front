export type Home = {
    showInputSearch: boolean;
    showModalFilter: boolean;
    isLoadingProducts: boolean;
}

export type HomeContextType = {
    homeContext: Home;
    setHomeContext: (value: Home) => void;
};

export type Skeleton = {
    width?: string;
    height?: string;
    extraClass?: string;
}