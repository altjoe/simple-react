import React, { useState, useEffect, useRef } from 'react';
import TextArea from 'react-expanding-textarea'
import ReactHeight from 'react-height'
export default function Table(props) {
    const [rowheight, setRowheight] = useState({});

    const handleHeight = (height, id) => {
        console.log(height, id);
        if (typeof rowheight[id] !== 'undefined'){
            if (height > rowheight[id]) {
                console.log(height);
                setRowheight({...rowheight, id: height})
            }
        } else {
            rowheight[id] = height
        }
    }

    const cellType = (type, val) => {
        console.log(type, val)
        switch (typeof type) {
            case 'date':
                console.log('Found date type');
                break;
            default:
                return <TextArea className={`${props.cell} ${props.input}`} 
                                style={{...props.inputstyle, ...props.cellstyle}}
                                value={val}/>
                break;
        }
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
                                        console.log({'height' : rowheight[key]});
                                        return (
                                            <div id={key} className={`${props.inputcontainer}`} style={props.inputcontainerstyle}>
                                                <div className={`${props.inputdisplay}`} style={{...props.inputdisplaystyle, ...{'height' : rowheight[key]}}}>
                                                    <ReactHeight onHeightReady={height => handleHeight(height, `input-${key}`)} >
                                                        {cellType(type, val)}
                                                    </ReactHeight>
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
