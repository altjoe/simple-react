import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function SimpTable(props) {


    let widthPercentage = 'undefined'
    if (typeof props.flex != 'undefined') {
        widthPercentage = props.flex.map(val => {
            let perc = val / props.flex.reduce((a, b) => a + b)
            return `${perc}%`
        })
    }
    

    const handleClick = (event, id) => {
        const element = document.getElementById(id)
        if (typeof element !== 'undefined' && event.target.id !== id && element !== null) {
            element.focus()
            if (element.type !== 'date') {
                element.setSelectionRange(element.value.length, element.value.length)
            }
            
        }
    }

    const handleElement = (key, j) => {
        if (typeof props.customElements !== 'undefined' && Object.keys(props.customElements).includes(key)) {
            const Element = props.customElements[key]
            return (
                <div onClick={event => handleClick(event, `${key}-${j}`)} className={props.inputDisplayClass}>
                    <Element id={`${key}-${j}`} {...props.customArgs} value={props.data[key][j]} onChange={event => props.onChange(event, key, j)}/>
                </div>
            )
        } 
        
        if (typeof props.groupedCustomElements !== 'undefined' && Object.keys(props.groupedCustomElements).includes(key)) {
            return props.groupedCustomElements[key]
        }
        
        return (
            <div onClick={event => handleClick(event, `${key}-${j}`)} className={props.inputDisplayClass}>
                <TextArea id={`${key}-${j}`} className={props.inputClass} value={props.data[key][j]} onChange={event => props.onChange(event, key, j)}/>
            </div>
        )
        

    }

    const calculateRow = () => {
        return Object.keys(props.data).map((key, i) => {
            let row = props.data[key].map((val, j) => {
                return (
                    <td className={`${props.inputContainerClass}`}>
                        {handleElement(key, j)}
                    </td>
                )
            })

            row.unshift(
                <th className={`${props.titleContainerClass}`}>
                    <div className={props.titleDisplayClass}>{props.hidecolumn.includes(key) ? "&nbsp;" : key}</div>
                </th>
            )

            return (
                <tr className={`${props.rowClass} row`}>
                    {row}
                </tr>
            )})
            
    }

    const calculateColumn = () => {
        return [calculateColumnHeader(), calculateColumnBody()]
    }

    const calculateColumnHeader = () => {
        return (
            <tr className={`${props.rowClass}`}>
                {Object.keys(props.data).map((key, i) => {
                    return (
                        <th className={`${props.titleContainerClass}`}>
                            {props.hidecolumn.includes(key) ? 
                                <div id={`header-${key}`} className={props.titleDisplayClass}>&nbsp;</div> 
                                    : 
                                <div id={`header-${key}`} className={props.titleDisplayClass}>{key}</div>}
                        </th>
                    )
                })}
            </tr>
        )
    }

    const calculateColumnBody = () => {
        return props.data[Object.keys(props.data)[0]].map((_, j) => {
            return (
                <tr className={`${props.rowClass}`}>
                    {Object.keys(props.data).map((key, i) => {
                        return (
                            <td onClick={event => handleClick(event, `${key}-${j}`)}  className={`${props.inputContainerClass}`} style={{'width' : widthPercentage[i]}}>
                                {handleElement(key, j)}
                            </td>
                        )
                    })}
                </tr>
            )
        })
    }

    const calculateInfo = () => {
        if (typeof props.flexdirection !== 'undefined') {
            switch (props.flexdirection.toLowerCase()) {
                case 'row':
                    return calculateRow()
                    break;
                case 'column':
                    return calculateColumn()
                    break;
                default:
                    console.log('flexdirection: \'${props.flexdirection}\' is not a accepted value -> default to row -> options (\'row\', \'column\')');
                    break;
            }
        } else {
            console.log('flexdirection is undefined -> default to row -> options (\'row\', \'column\')');
            return calculateRow()
        }
    }

    const displayTable = () => {
        if (typeof props.data !== 'undefined') {
            if (Object.keys(props.data).length > 0) {
                return (
                    <table className={props.tableClass}>
                        <tbody>
                            {calculateInfo()}
                        </tbody>
                    </table>
                )
            }
            
        } 
        const component_params = ['tableClass={\'\'}',
                    'rowClass={\'\'}',
                    'titleContainerClass={\'\'}',
                    'titleDisplayClass={\'\'}',
                    '',
                    'inputContainerClass={\'\'}',
                    'inputDisplayClass={\'\'}',
                    'inputClass={\'\'}',
                    'buttonContainerClass={\'\'}',
                    'buttonClass={\'\'}',
                    '',
                    'data={{}}',
                    'hidecolumn={[]}',
                    'customElements={}',
                    'customArgs={}',
                    'groupedCustomElements={}',
                    '',
                    'flexdirection={\'\'}',
                    'flex={[]}',
                    '',
                    'onChange={event => console.log(event.target.value)}',
                    'onClick={event => console.log(\'Add\')}']
        const component_params_object = ['tableClass : \'\',',
                    'rowClass : \'\',',
                    'titleContainerClass : \'\',',
                    'titleDisplayClass : \'\',',
                    '',
                    'inputContainerClass : \'\',',
                    'inputDisplayClass : \'\',',
                    'inputClass : \'\',',
                    'buttonContainerClass : \'\',',
                    'buttonClass : \'\',',
                    '',
                    'data : {},',
                    'hidecolumn : [],',
                    'customElements : {},',
                    'customArgs : {},',
                    'groupedCustomElements : {},',
                    '',
                    'flexdirection : \'\',',
                    'flex : [],',
                    '',
                    'onChange : event => console.log(event.target.value),',
                    'onClick : event => console.log(\'Add\')']

        return (
            <div className={`flex justify-evenly`}>
                <div>{component_params.map(line => {
                    if (line === '') {
                        return <p>&nbsp;</p>
                    } else {
                        return <p>{line}</p>
                    }
                })}</div>
                <div>{component_params_object.map(line => {
                    if (line === '') {
                        return <p>&nbsp;</p>
                    } else {
                        return <p>{line}</p>
                    }
                })}</div>
            </div>
        )


    }

    return displayTable()
}

SimpTable.defaultProps = {
    tableClass: '',
    rowClass: '',
    titleContainerClass: '',
    titleDisplayClass: '',

    inputContainerClass: '',
    inputDisplayClass: '',
    inputClass: '',
    
    data : {},
    hidecolumn : [],
    customElements : {},
    customArgs : {},
    groupedCustomElements : {},

    flexdirection: '',
    flex : [],

    onChange : event => console.log(event.target.value),
    onClick : event => console.log('Add')
}