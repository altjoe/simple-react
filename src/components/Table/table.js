import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function Table(props) {
    
    const verticalTable = (rows, columns) => {
        if (props.flex.length !== columns.length) {
            throw 'For vertical table flex array needs same length as number of columns'
        }
        return (
            <div className={`${props.wrapperClass}`}>
                <div className={`flex ${props.headerClass}`}>
                    {columns.map((col, i) => <div className={`${props.headerCellClass}`}
                                            style={{'flex' : props.flex[i]}}>{col}</div>)}
                </div>
                <div className={`${props.bodyClass}`}>
                    {rows.map(row => {
                        return (
                            <div className={`flex ${props.rowClass}`}>
                                {columns.map((col, i) => <TextArea className={`${props.inputCellClass}`}
                                                            style={{'flex' : props.flex[i]}}
                                                            value={props.data[row][col]} />)}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const horizontalTable = (rows, columns) => {
        if (!props.vertical) {
            
        }

        return (
            <div className={`${props.wrapperClass}`}>
                <div className={`${props.headerClass}`}>
                    {columns.map(col => <div className={`${props.headerCellClass}`}>{col}</div>)}
                </div>
                <div className={`${props.bodyClass}`}>
                    {rows.map(row => {
                        return (
                            <div className={`${props.rowClass}`}>
                                {columns.map(col => <TextArea className={`${props.inputCellClass}`}
                                                            value={props.data[row][col]} />)}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const displayTable = () => {
        if (typeof props.data !== 'undefined') {
            const rows = Object.keys(props.data)
            if (rows.length > 0) {
                const columns = Object.keys(props.data[0])

                if (props.vertical) {
                    return verticalTable(rows, columns)
                } else {
                    return horizontalTable(rows, columns)
                }
            }
        }
    }

    return displayTable()
}
Table.propTypes = {
    'vertical' : PropTypes.bool.isRequired,
    'wrapperClass' : PropTypes.string,
    'headerClass' : PropTypes.string,
    'bodyClass' : PropTypes.string,
    'rowClass' : PropTypes.string,
    'headerCellClass' : PropTypes.string,
    'inputCellClass' : PropTypes.string,
    'data' : PropTypes.object.isRequired,
    'flex' : PropTypes.array,
}