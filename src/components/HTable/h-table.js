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

    const handleChange = (key, index, value) => {
        if (typeof props.onChange !== 'undefined') {
            props.onChange(key, index, value)
        }
    }

    const displayTable = () => {
        let flex = ''
        if (props.flexbox) {
            flex = 'flex'
        }
        console.log(flex);

        if (props.data) {
            return (
                <div className={`${props.wrapperClass}`}>
                    {Object.keys(props.data).map(key => {
                        return (
                            <div className={`${flex} ${props.rowClass}`}>
                                <div className={`${flex} ${props.headerClass}`}
                                    style={{
                                        'flex' : typeof props.headerflex !== 'undefined' ? props.headerflex[0] : ''
                                    }}>
                                        <div className={`${flex}-1 ${props.headerCellClass}`}>{key}</div>
                                </div>
                                <div className={`${flex} ${props.dataContainer}`}
                                    style={{
                                        'flex' : typeof props.headerflex !== 'undefined' ? props.headerflex[1] : ''
                                    }}>
                                    {props.data[key].map((val, i) => {
                                        return (
                                            <div className={`${flex} ${props.inputContainer}`}
                                                style={{
                                                    'flex' : typeof props.bodyflex !== 'undefined' ? props.bodyflex[i] : ''
                                                }}>
                                                <TextArea className={`${flex}-1 ${props.inputCellClass}`}
                                                        placeholder={props.placeholder[key][i]}
                                                        value={val}/>
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
            const dataExample = "data={{'col1': [1, 2, 3], 'col2' : [2, 3, 4]}}"
            const flexExample = "flex={[1, 1]}"

            return (
                <div>
                    <h4 className={`font-bold`}>HTable Parameter 'data' is required. All params listed:</h4>
                    <p>
                        wrapperClass : ''<br />
                        rowClass : ''<br />
                        dataContainer : ''<br />
                        headerClass : ''<br />
                        headerCellClass : ''<br />
                        inputContainer : ''<br />
                        inputCellClass : ''<br />
                        {`data : {'Full name': ['', '', '']}`}<strong>{` <- Required`}</strong><br /> 
                        {`placeholder : {'Full name': ['First', 'Middle', 'Last']}`}<br />
                        headerflex : [1, 2.5]<br />
                        bodyflex : [1, 1, 1]
                    </p>
                </div>
            )
        }
    }
    
    return displayTable()
}
HTable.propTypes = {
    
}