export interface button{
    srcIcon: string
    alt: string
    text?: string
    extraClass?: string
    action: () => void;
}

export interface inputSearch{
    placeHolder: string
    srcIcon: string
    extraClass?: string
    handleChange: () => void;
    handleClose: () => void;
}