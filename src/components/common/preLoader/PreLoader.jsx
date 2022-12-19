import React from "react";
import preLoader from "../../../assets/images/loader.svg";
import s from "./PreLoader.module.css"

let PreLoader = ()=> {
    return (
        <div className={s.preLoaderContainer} >
                <img  src={preLoader}/>
        </div>
    )
}

export default PreLoader;