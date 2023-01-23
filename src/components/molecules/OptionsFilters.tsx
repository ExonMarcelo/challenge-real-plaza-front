import { useState } from "react";

const dataOptions = [
    {
        id: "opt-1",
        value: "1",
        label: "Ordenar de mayor a menor"
    },
    {
        id: "opt-2",
        value: "2",
        label: "Ordenar de menor a mayor"
    },
    {
        id: "opt-3",
        value: "3",
        label: "Por rango de precios",
        showInputs: true
    }
];

interface PropsOptionsFilter{
    handleClose: () => void
}

const OptionsFilters = ({handleClose}:PropsOptionsFilter) => {
    interface amounts{
        minValue: number
        maxValue: number
    }
    const [showInputs, setShowInputs] = useState<boolean>(false);
    const [formData, setFormData] = useState<amounts>({
        minValue: 300,
        maxValue: 1500,
    });
    
    const {minValue, maxValue} = formData;

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    const ApplyFilter = () => {
        handleClose();
    }

    return(
        <div className="options-filters">
            {
                dataOptions.map(({id, value, label, showInputs}, index) =>
                    <div className="option" key={index}>
                        <input id={id} 
                            type="radio" 
                            value={value} 
                            name="option-filter"
                            onChange={()=>{showInputs ? setShowInputs(true) : setShowInputs(false) }}/>
                        <label htmlFor={id}>{label}</label>
                    </div>
                )
            }
            
            <div className="range-price">
                <div className={`form-control ${!showInputs ? "disabled" : ""}`}>
                    <label>Desde</label>
                    <input value={minValue} type="number" name="minValue" onChange={(e) => onChange(e)}/>
                </div>
                <div className={`form-control ${!showInputs ? "disabled" : ""}`}>
                    <label>Hasta</label>
                    <input value={maxValue} name="maxValue" type="number" onChange={(e) => onChange(e)}/>
                </div>
            </div>

            <div className="footer">
                <button onClick={ApplyFilter}>Aplicar Filtros</button>
            </div>
            
        </div>
    );
}

export default OptionsFilters;