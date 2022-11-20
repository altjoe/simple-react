import React, { useState, useEffect, useRef } from 'react';
import TextArea from 'react-expanding-textarea'


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

            if (computedstyle.flexDirection === props.aligndirection) {
                props.data[Object.keys(props.data)[0]].forEach((val, i) => {
                    const inputs = document.getElementsByClassName(`${i}-input`)

                    let height = 0
                    Object.keys(inputs).forEach(key => {
                        if (height < inputs[key].clientHeight) {
                            height = inputs[key].clientHeight
                        }
                    })
                    const containers = document.getElementsByClassName(`${i}-inputcontainer`)
                    Object.keys(containers).forEach(key => {
                        containers[key].style.height = `${height}px`
                    })
                })
            } else {
                
                Object.keys(props.data).forEach((key, i) => {
                    const inputs = document.getElementsByClassName(`${key}-input`)
                    
                    let height = 0
                    Object.keys(inputs).forEach(key => {
                        if (height < inputs[key].clientHeight) {
                            height = inputs[key].clientHeight
                        }
                    })
                    const containers = document.getElementsByClassName(`${key}-inputcontainer`)
                    Object.keys(containers).forEach(key => {
                        containers[key].style.height = `${height}px`
                    })
                })
            }
        }
    }
    

    const cellType = (custom, val, key, index, focusid) => {

        console.log(typeof custom);

        if (typeof custom === 'object'){
            // props.customElement.style.className = ` ${key}-input ${index}-input `

            const Element = custom['element']
            let args = custom['args']
            args.className += ` ${key}-input ${index}-input`

            return <Element id={focusid} {...args} />
        } else if (typeof custom === 'Object') {
            console.log(custom);
        }
        else {
            return <TextArea className={`${key}-input ${index}-input ${props.cell} ${props.input}`} 
                                    style={{...props.inputstyle, ...props.cellstyle}}
                                    value={val}
                                    id={focusid}/>
        }
    }

    const handleFocus = (id) => {
        const element = document.getElementById(id)
        element.focus()
        
    }

    const displayTable = () => {
        
        if (typeof props.data !== 'undefined') {
            return (
                <div id='wrapper' className={`${props.wrapper}`} style={props.wrapperstyle}>
                    {Object.keys(props.data).map((key, j) => {
                        return (
                            <div id={'row'} className={`${props.row}`} style={props.rowstyle}>
                                <div className={`${props.headercontainer}`} style={props.headercontainerstyle}>
                                    <div className={`${props.header} ${props.cell}`} style={{...props.headerstyle, ...props.cellstyle}}>{key}</div>
                                </div>
                                <div className={`${props.body}`} style={props.bodystyle}>
                                    {props.data[key].map((val, i) => {
                                        const custom = typeof props.custom !== 'undefined' ? props.custom[key] : 'undefined'
                                        const focusid = `${key}-${i}`
                                        return (
                                            <div onClick={event => handleFocus(focusid)} 
                                                 className={`${props.inputcontainer}`} 
                                                 style={props.inputcontainerstyle}>
                                                <div className={`${key}-inputcontainer ${i}-inputcontainer ${props.inputdisplay}`} 
                                                     style={props.inputdisplaystyle}>
                                                    {cellType(custom, val, key, i, focusid)}
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
