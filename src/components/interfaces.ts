export interface button{
    srcIcon: string
    alt: string
    text?: string
    action: () => void;
}

export interface inputSearch{
    placeHolder: string
    srcIcon: string
    handleChange: () => void;
}