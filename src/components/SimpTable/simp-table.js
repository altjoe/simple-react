import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function SimpTable(props) {

    const handleClick = (event, id) => {
        const element = document.getElementById(id)
        if (typeof element !== 'undefined' && event.target.id !== id) {
            element.focus()
            element.setSelectionRange(element.value.length, element.value.length)
        }
    }

    const handleElement = (key, j) => {
        if (typeof props.customElements !== 'undefined' && Object.keys(props.customElements).includes(key)) {
            const Element = props.customElements[key]

            return <Element id={`${key}-${j}`} {...props.customArgs} value={props.data[key][j]}/>
        } 
        
        if (typeof props.groupedCustomElements !== 'undefined' && Object.keys(props.groupedCustomElements).includes(key)) {
            return props.groupedCustomElements[key]
        }
        
        return <TextArea id={`${key}-${j}`} className={props.inputClass} value={props.data[key][j]} onChange={props.onChange}/>
        

    }

    const calculateRow = () => {
        return Object.keys(props.data).map((key, i) => {
            let row = props.data[key].map((val, j) => {
                return (
                    <td className={`${props.inputContainerClass}`}>
                        <div onClick={event => handleClick(event, `${key}-${j}`)} className={props.inputDisplayClass}>
                            {handleElement(key, j)}
                        </div>
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
                        <th className={`${props.titleContainerClass}`} style={{'flex' : props.flex[i]}}>
                            {props.hidecolumn.includes(key) ? <div className={props.titleDisplayClass}>&nbsp;&nbsp;&nbsp;</div> : <div className={props.titleDisplayClass}>{key}</div>}
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
                            <td className={`${props.inputContainerClass}`} style={{'flex' : props.flex[i]}}>
                                <div onClick={event => handleClick(event, `${key}-${j}`)} className={`${props.inputDisplayClass}`}>
                                    {handleElement(key, j)}
                                </div>
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
                    <>
                        <table className={props.tableClass}>
                            <tbody>
                                {calculateInfo()}
                            </tbody>
                        </table>
                        <div className={`${props.buttonContainerClass}`}>
                            <button className={`${props.buttonClass}`} onClick={props.onClick}>Add</button>
                        </div>
                    </>
                )
            }
            
        } 
        const p = ['tableClass={\'\'}',
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

        return <p>{p.map(line => {
            if (line === '') {
                return <p>&nbsp;</p>
            } else {
                return <p>{line}</p>
            }
        })}</p>


    }

    return displayTable()
}
