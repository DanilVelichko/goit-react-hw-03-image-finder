import React from "react";
import css from './Loader.module.css'
import ClockLoader from 'react-spinners/ClockLoader';


const Loader = ({ color, loading, size }) => {
    return (
        <div className={css.parent}>
            <ClockLoader
                className={css.child}
            color={color}
            loading={loading}
            size={size}
            />
            </div>
    )

}

export default Loader;