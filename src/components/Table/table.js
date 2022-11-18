import React, { useState, useEffect, useRef } from 'react';
import TextArea from 'react-expanding-textarea'
import ReactHeight from 'react-height'
export default function Table(props) {

    if (props.align || typeof props.align === 'undefined') {
        useEffect(() => {
            handleAlign()
            window.addEventListener("resize", handleAlign);

            return () => window.removeEventListener("resize", handleAlign);
        }, []);
    }

    const handleAlign = () => {
        if (typeof props.data !== 'undefined') {
            const row = document.getElementById('row')
            const computedstyle = window.getComputedStyle(row)
            console.log(computedstyle.flexDirection);
            if (computedstyle.flexDirection === 'column') {
                Object.keys(props.data).forEach((key, i) => {
            
                    const inputs = document.getElementsByName(`input-${i}`)
                    let height = 0
                    inputs.forEach((input, i) => {
                        if (height < input.clientHeight) {
                            height = input.clientHeight
                        }
                    })
                    const containers = document.getElementsByName(i)
                    containers.forEach(container => {
                        container.style.height = `${height}px`
                    })
                })
            } else {
                // this will be to shrink rows back to correct height
                Object.keys(props.data).forEach((key, i) => {
                    const inputs = document.getElementsByName(`/input-${i}/`)
                    let height = 0
                    inputs.forEach((input, i) => {
                        if (height < input.clientHeight) {
                            height = input.clientHeight
                        }
                    })
                    const containers = document.getElementsByName(i)
                    containers.forEach(container => {
                        container.style.height = `${height}px`
                    })
                })
            }
        }
    }
    

    const cellType = (type, val, id, key) => {
        switch (typeof type) {
            case 'date':
                console.log('Found date type');
                break;
            default:
                return <TextArea className={`${props.cell} ${props.input}`} 
                                        style={{...props.inputstyle, ...props.cellstyle}}
                                        value={val} 
                                        id={id}
                                        name={`input-${key}`}/>
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
                            <div id={'row'} className={`${props.row}`} style={props.rowstyle}>
                                <div className={`${props.headercontainer}`} style={props.headercontainerstyle}>
                                    <div className={`${props.header} ${props.cell}`} style={{...props.headerstyle, ...props.cellstyle}}>{key}</div>
                                </div>
                                <div className={`${props.body}`} style={props.bodystyle}>
                                    {props.data[key].map((val, i) => {
                                        const type = typeof props.types !== 'undefined' ? props.types[key] : 'undefined'
                                        return (
                                            <div onClick={event => handleFocus(`${key}-${i}`)} className={`${props.inputcontainer}`} style={props.inputcontainerstyle}>
                                                <div name={i} className={`${props.inputdisplay}`} style={props.inputdisplaystyle}>
                                                    {cellType(type, val, `${key}-${i}`, i)}
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
