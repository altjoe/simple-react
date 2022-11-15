import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function VTable(props) {

    const displayTable = () => {
        if (typeof props.data !== 'undefined') {
            return (
                <div className={`flex flex-col ${props.wrapperClass}`}>
                    <div className={`flex ${props.headerClass}`}>
                        {Object.keys(props.data).map((col, i) => {
                            return <div className={`${props.headerCellClass}`}
                                        style={{'flex' : props.flex[i]}}>{col}</div>
                        })}
                    </div>
                    <div className={`flex flex-col ${props.bodyClass}`}>
                        {props.data[Object.keys(props.data)[0]].map((val, i) => {
                            return (
                                <div className={`flex ${props.rowClass}`}>
                                    {Object.keys(props.data).map((key, j) => {
                                        return <div className={`${props.inputCellClass}`}
                                                    style={{'flex' : props.flex[j]}}>{props.data[key][i]}</div>
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            )
        }
    }

    return displayTable()
}
VTable.propTypes = {
    'class' : PropTypes.string,
}