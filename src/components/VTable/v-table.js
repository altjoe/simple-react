import React, { useState, useEffect, useRef } from 'react';
import TextArea from 'react-expanding-textarea'

export default function VTable(props) {

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
        if (typeof props.data !== 'undefined') {
            return (
                <div className={`flex flex-col ${props.wrapperClass}`}>
                    <div className={`flex ${props.headerClass}`}>
                        {Object.keys(props.data).map((col, i) => {
                            return <div className={`${props.headerCellClass}`}
                                        style={{'flex' : props.flex[i]}}
                                        key={`header-${col}`}>{col}</div>
                        })}
                    </div>
                    <div className={`flex flex-col ${props.bodyClass}`}>
                        {props.data[Object.keys(props.data)[0]].map((val, i) => {
                            return (
                                <div className={`flex ${props.rowClass}`}
                                    key={`row-${i}`}>
                                    {Object.keys(props.data).map((key, j) => {
                                        return (
                                            <div className={`flex ${props.inputContainer}`}
                                                style={{'flex' : props.flex[j]}}
                                                onClick={event => handleFocus(`Textarea-${key}-${i}`)}
                                                key={`inputContainer-${key}-${i}`}>
                                                <TextArea className={`w-full m-auto ${props.inputCellClass}`}
                                                    value={props.data[key][i]}
                                                    id={`Textarea-${key}-${i}`}
                                                    
                                                    onChange={event => handleChange(key, i, event.target.value)}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            const dataExample = "data={{'col1': [1, 2, 3], 'col2' : [2, 3, 4]}}"
            const flexExample = "flex={[1, 1]}"

            return (
                <div>
                    <h4 className={`font-bold`}>VTable Parameter 'data' is required. All params listed:</h4>
                    <p className={`italic`}>{`wrapperClass={\`\`}`}<br/>
                    {`rowClass={\`\`}`}<br/>
                    {`headerClass={\`\`}`}<br/>
                    {`bodyClass={\`\`}`}<br/>
                    {`headerCellClass={\`\`}`}<br/>
                    {`inputCellClass={\`\`}`}<br/>
                    {`${dataExample}`}<strong>{' <- Required'}</strong><br/>
                    {`${flexExample}`}<br/>
                    {`onChange={handleChange}`}</p>
                </div>
            )
        }
    }

    return displayTable()
}
