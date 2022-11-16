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
        if (typeof props.data !== 'undefined'){
            let bodyflexsize = ''
            if (props.flex.length - 1 > 1) {
                bodyflexsize = props.flex.slice(1, props.flex.length).reduce((a, b) => a + b)
            } else if (props.flex.length - 1 == 1) {
                bodyflexsize = props.flex[1]
            }

            return (
                <div className={`flex flex-col ${props.wrapperClass}`}>
                    {Object.keys(props.data).map(key => {
                        return (
                            <div className={`flex ${props.rowClass}`}
                                key={`row-${key}`}>
                                <div className={`flex ${props.headerClass}`}
                                    style={{'flex' : typeof props.flex !== 'undefined' ? props.flex[0] : ''}}>
                                        <div className={`flex-1 ${props.headerCellClass}`}
                                            key={`header-${key}`}>{key}</div>
                                </div>
                                <div className={`flex ${props.dataClass}`}
                                    style={{'flex' : bodyflexsize }}>
                                    {props.data[key].map((val, i) => {
                                        return (
                                            <div className={`flex ${props.inputContainer}`}
                                                style={{'flex' : bodyflexsize}}
                                                onClick={event => handleFocus(`Textarea-${key}-${i}`)}
                                                key={`inputContainer-${key}-${i}`}>
            
                                                <TextArea value={val}
                                                        className={`flex-1 ${props.inputCellClass}`}
                                                        style={{'min-width' : '1%'}}
                                                        id={`Textarea-${key}-${i}`}
                                                        key={`Textarea-${key}-${i}`}
                                                        placeholder={''}
                                                        onChange={event => handleChange(key, i, event.target.value)}/>
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
            const dataExample = "data={{'Full name': ['', '']}}"
            const placeholderExample = "placeholder={{'Full name': ['First', 'Last']}}"
            const flexExample = "flex={[1, 1, 1]}"

            return (
                <div>
                    <h4 className={`font-bold`}>VTable Parameter 'data' is required. All params listed:</h4>
                    <p className={`italic`}>
                        {`wrapperClass={\`\`}`}<br/>
                        {`rowClass={\`\`}`}<br/>
                        {`headerClass={\`\`}`}<br/>
                        {`dataClass={\`\`}`}<br/>
                        {`headerCellClass={\`\`}`}<br/>
                        {`inputContainer={\`\`}`}<br/>
                        {`inputCellClass={\`\`}`}<br/>
                        {`${dataExample}`}<strong>{' <- Required'}</strong><br/>
                        {`${placeholderExample}`}<strong>{' <- Required'}</strong><br/>
                        {`${flexExample}`}<br/>
                        {`onChange={handleChange}`}
                    </p>
                </div>
            )
        }
    }
    
    return displayTable()
}
HTable.propTypes = {
    
}