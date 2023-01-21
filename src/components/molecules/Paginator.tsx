import { useState } from "react";

interface PropsPaginator{
    steps: number
}

const Paginator =  ({steps = 4}:PropsPaginator) => {
    const [current, setCurrent] = useState(1);
    const getSteps = () => {
        let stepsPaginator = [];
        for (let i = 0; i < steps; i++) {
            stepsPaginator.push(i + 1);
        }
        return stepsPaginator;
    }
    return(
        <div className="col-full paginator">
            <div className="button--prev">
                <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
                    <polygon fill="#7300e0" points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24" id="id_101"></polygon>
                </svg>
            </div>
            <div className="steps">
                {
                    getSteps().map((step) => 
                        <div 
                            className={`step ${current === step ? "current": ""}`} 
                            key={step}
                            onClick={() => setCurrent(step)}>
                                {step}
                        </div>
                    )
                }
            </div>
            <div className="button--next">
                <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
                    <polygon fill="#7300e0" points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24" id="id_101"></polygon>
                </svg>
            </div>
        </div>
    );
}

export default Paginator;