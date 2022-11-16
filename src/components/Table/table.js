import React, { useState, useEffect, useRef } from 'react';
import TextArea from 'react-expanding-textarea'

export default function Table(props) {

    const cellType = (type, val) => {
        console.log(type, val)
        switch (typeof type) {
            case 'date':
                console.log('Found date type');
                break;
            default:
                return <div className={`${props.cell} ${props.input}`}>{val}</div>
                break;
        }
    }

    const displayTable = () => {
        if (typeof props.data !== 'undefined') {
            return (
                <div className={`${props.wrapper}`}>
                    {Object.keys(props.data).map(key => {
                        return (
                            <div className={`${props.row}`}>
                                <div className={`${props.header} ${props.cell}`}>{key}</div>
                                {props.data[key].map((val, i) => {
                                    const type = typeof props.types !== 'undefined' ? props.types[key] : 'undefined'
                                    return cellType(type, val)
                                })}
                            </div>
                        )
                    })}
                </div>
            )
        } else {

        }
    }

    return displayTable()
}
