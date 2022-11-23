import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function SimpTable(props) {

    const handleClick = (id) => {
        const element = document.getElementById(id)
        if (typeof element !== 'undefined') {
            element.focus()
            element.setSelectionRange(element.value.length, element.value.length)

        }
    }

    const calculateRow = () => {
        return Object.keys(props.data).map((key, i) => {
            let row = props.data[key].map((val, j) => {
                return (
                    <td className={`${props.inputContainerClass}`}>
                        <div onClick={event => handleClick(`${key}-${j}`)} className={props.inputDisplayClass}>
                            <TextArea id={`${key}-${j}`} className={props.inputClass} value={props.data[key][j]} />
                        </div>
                    </td>
                )
            })
            row.unshift(
                <th className={`${props.titleContainerClass}`}>
                    <div className={props.titleDisplayClass}>{key}</div>
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
                            <div className={props.titleDisplayClass}>{key}</div>
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
                                <div onClick={event => handleClick(`${key}-${j}`)} className={`${props.inputDisplayClass}`}>
                                    <TextArea id={`${key}-${j}`} className={`${props.inputClass}`} value={props.data[key][j]} />
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
        if (props.data !== 'undefined') {
            return (
                <>
                    <table className={props.tableClass}>
                        <tbody>
                            {calculateInfo()}
                        </tbody>
                    </table>
                    <div className={`${props.buttonContainerClass}`}>
                        <button className={`${props.buttonClass}`}>Add</button>
                    </div>
                </>
                
            )
        }
    }

    return displayTable()
}
