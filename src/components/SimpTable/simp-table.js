import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function SimpTable(props) {

    const calculateInfo = () => {
        return (Object.keys(props.data).map((key, i) => {
                let row = props.data[key].map((val, j) => {
                    return (
                        <td className={`${props.inputContainerClass}`}>
                            <div className={props.inputDisplayClass}>
                                <TextArea className={props.inputClass} value={props.data[key][j]} />
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
                )
            })
        )
    }

    const displayTable = () => {
        if (props.data !== 'undefined') {
            return (
                <table className={props.tableClass}>
                    {calculateInfo()}
                </table>
            )
        }
    }

    return displayTable()
}
