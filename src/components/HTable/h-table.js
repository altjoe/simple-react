import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function HTable(props) {

    const handleFocus = (id) => {
        if (document.activeElement.id !== id) {
            const textarea = document.getElementById(id)
            textarea.setSelectionRange(textarea.value.length, textarea.value.length);
            textarea.focus()
        }
    }

    const displayTable = () => {
        if (typeof props.data !== 'undefined'){
            return (
                <div className={`flex flex-col ${props.wrapperClass}`}>
                    {Object.keys(props.data).map(key => {
                        return (
                            <div className={`flex ${props.rowClass}`}>
                                <div className={`flex ${props.headerClass}`}
                                    style={{'flex' : props.flex[0]}}>
                                        <div className={`flex-1 ${props.headerCellClass}`}>{key}</div>
                                </div>
                                <div className={`flex ${props.dataClass}`}
                                    style={{'flex' : props.flex.slice(1, props.flex.length).reduce((a, b) => a + b)}}>
                                    {props.data[key].map((val, i) => {
                                        console.log(props.flex.slice(1, props.flex.length).reduce((a, b) => a + b));
                                        return (
                                            <div className={`flex ${props.inputContainer}`}
                                                style={{'flex' : props.flex[i+1]}}
                                                onClick={event => handleFocus(`Textarea-${key}-${i}`)}>
                                                <TextArea value={val}
                                                        className={`flex-1 ${props.inputCellClass}`}
                                                        id={`Textarea-${key}-${i}`}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
    
    return displayTable()
}
HTable.propTypes = {
    
}