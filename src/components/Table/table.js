import React, { useState, useEffect, useRef } from 'react';
import TextArea from 'react-expanding-textarea'
import ReactHeight from 'react-height'
export default function Table(props) {

    if (props.align || typeof props.align === 'undefined') {
        useEffect(() => {
            if (typeof props.data !== 'undefined') {
                Object.keys(props.data).forEach((key, i) => {
                    const elements = document.getElementsByName(i)
                    let height = 0
                    elements.forEach(element => {
                        if (height < element.clientHeight) {
                            height = element.clientHeight
                        }
                    })
                    elements.forEach(element => {
                        element.style.height = `${height}px`
                    })
                })
            }
        }, []);
    }
    

    const cellType = (type, val, id) => {
        switch (typeof type) {
            case 'date':
                console.log('Found date type');
                break;
            default:
                return <TextArea className={`${props.cell} ${props.input}`} 
                                        style={{...props.inputstyle, ...props.cellstyle}}
                                        value={val} 
                                        id={id}/>
                break;
        }
    }

    const handleFocus = (id) => {
        const element = document.getElementById(id)
        element.focus()
    }

    const displayTable = () => {
        
        if (typeof props.data !== 'undefined') {
            return (
                <div className={`${props.wrapper}`} style={props.wrapperstyle}>
                    {Object.keys(props.data).map(key => {
                        return (
                            <div className={`${props.row}`} style={props.rowstyle}>
                                <div className={`${props.headercontainer}`} style={props.headercontainerstyle}>
                                    <div className={`${props.header} ${props.cell}`} style={{...props.headerstyle, ...props.cellstyle}}>{key}</div>
                                </div>
                                <div className={`${props.body}`} style={props.bodystyle}>
                                    {props.data[key].map((val, i) => {
                                        const type = typeof props.types !== 'undefined' ? props.types[key] : 'undefined'
                                        return (
                                            <div onClick={event => handleFocus(`${key}-${i}`)} className={`${props.inputcontainer}`} style={props.inputcontainerstyle}>
                                                <div name={i} className={`${props.inputdisplay}`} style={props.inputdisplaystyle}>
                                                    {cellType(type, val, `${key}-${i}`)}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
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
