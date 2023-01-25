import {Skeleton as typeSkeleton } from "../../context/types";

const Skeleton = ({width, height, extraClass}: typeSkeleton) => {
    return(
        <div className={`skeleton ${extraClass}`} style={{width: `${width}`, height: `${height}`}}>
        </div>
    );
}

export default Skeleton;