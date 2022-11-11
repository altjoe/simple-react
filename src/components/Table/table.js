import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import TextArea from 'react-expanding-textarea'

export default function Table(props) 

    const displayTable = () => {
        if (props.data) {
            console.log(typeof props.flex);
            const rowindex = Object.keys(props.data)
            if (rowindex.length > 0) {
                const columns = Object.keys(props.data[0])
                return (
                    <div className={`${props.wrapperClass}`}>
                        <div className={`${props.headerClass} ${props.rowClass}`}>
                            {columns.map((col, i) => <div className={`${props.headerCellClass}`} 
                                                        style={{'flex' : typeof props.flex === 'undefined' ? '' : props.flex[i]}}>{col}</div>)}
                        </div>
                        <div className={`${props.bodyClass}`}>
                            {rowindex.map(i => {
                                return (
                                    <div className={`${props.rowClass}`}>
                                        {columns.map(col => <TextArea className={`${props.cellClass} resize-none outline-none`} 
                                                                rows={1}
                                                                value={props.data[i][col]}
                                                                style={{'flex' : typeof props.flex === 'undefined' ? '' : props.flex[i]}}/>)}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            } 
        }
    }

    return displayTable();
}
Table.propTypes = {
    'wrapperClass' : PropTypes.string,
    'headerClass' : PropTypes.string,
    'bodyClass' : PropTypes.string,
    'rowClass' : PropTypes.string,
    'cellClass' : PropTypes.string,
    'data' : PropTypes.object,
    'flex' : PropTypes.array
}