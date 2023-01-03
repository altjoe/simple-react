import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

export default function Dropdown(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const handleBlur = (event) => {
        setOpen(false)

    }

    const displayDropdown = () => {
        if (open) {
            return (
                <div id='option' className={`${props.listContainerClass}`}>
                    {props.options.map(option => {
                        const handleOptionClick = typeof props.optionClicked[option] !== 'undefined' ? props.optionClicked[option] : event => console.log(event);
                        return (
                            <div className={`${props.optionContainerClass}`}>
                                <div id='option' key={option} className={`${props.optionLabelClass}`} onClick={event => {handleOptionClick(event); handleBlur()}}>{option}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    return (
        <div className={props.wrapperClass}>
            <button className={`${props.buttonClass}`}
                    onClick={handleClick}>{props.buttonLabel}</button>
            {displayDropdown()}
        </div>  
    );
}
Dropdown.propTypes = {
    'class' : PropTypes.string,
}