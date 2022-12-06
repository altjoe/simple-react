import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

export default function GridTable(props) {

    const handleElement = (key, index, val) => {
        let rowClass = typeof props.rowClass !== 'undefined' ? props.rowClass.includes(index) ? props.rowClass[index] : '' : ''

        if (typeof props.elements !== 'undefined' && Object.keys(props.elements).includes(key)) {
            const parentOnClick = typeof props.elementParentFunction !== 'undefined' ? Object.keys(props.elementParentFunction).includes(key) ?  event => props.elementParentFunction[key](props.tableID, key, index) : event => '' : event => ''
            return (
                <div key={`input-container-${props.tableID}-${key}-${index}`} className={`${props.inputContainer} ${rowClass}`}>
                    <div  key={`input-display-${props.tableID}-${key}-${index}`} 
                          className={`${props.inputDisplay}`} 
                          onClick={event => parentOnClick(event)}> 
                        {props.elements[key](props.tableID, key, index, val, props.input)}
                    </div>
                </div>
            )
        } else {
            return (
                <div key={`input-container-${props.tableID}-${key}-${index}`} className={`${props.inputContainer} ${rowClass}`}>
                    <div  key={`input-display-${props.tableID}-${key}-${index}`} className={`${props.inputDisplay}`}> 
                        <div key={`input`} className={`${props.input}`}>
                            {val}
                        </div>
                    </div>
                </div>
            )
        }
    }

    const handleData = () => {
        if (typeof props.data === 'object') {
            if (!Array.isArray(props.data)) {
                let cells = []
                if (props.direction === 'row') {
                    Object.keys(props.data).map(key => {
                        cells.push(
                            <div className={`${props.headerContainer}`}>
                                <div className={`${props.header}`}>
                                    {key}
                                </div>
                            </div>
                        )
                        props.data[key].map((val, i) => {
                            cells.push(handleElement(key, i, val))
                        })
                    })
                } else {
                    Object.keys(props.data).map(key => {
                        cells.push(
                            <div className={`${props.headerContainer}`}>
                                <div className={`${props.header}`}>
                                    {key}
                                </div>
                            </div>
                        )
                    })
                    props.data[Object.keys(props.data)[0]].map((_, i) => {
                        Object.keys(props.data).map(key => {
                            cells.push(handleElement(key, i, props.data[key][i]))
                        })
                    }) 
                }
                
                return cells
            } else {
                if (props.direction === 'column') {
                    let cells = []
                    Object.keys(props.data[0]).map(key => {
                        cells.push(
                            <div className={`${props.headerContainer}`}>
                                <div className={`${props.header}`}>
                                    {key}
                                </div>
                            </div>
                        )
                    })
                    Object.keys(props.data).map(row => {
                        Object.keys(props.data[row]).map(key => {
                            cells.push(handleElement(key, row, props.data[row][key]))
                        })
                    })

                    return cells
                } else {
                    let cells = []
                    Object.keys(props.data[0]).map((key, i) => {
                        cells.push(
                            <div className={`${props.headerContainer}`}>
                                <div className={`${props.header}`}>
                                    {key}
                                </div>
                            </div>
                        )
                        
                        Object.keys(props.data).map(row => {
                            cells.push(handleElement(key, row, props.data[row][key]))
                        })
                    })
                    return cells
                }
            }
            
        } 
        else {
            console.log(typeof props.data);

            return <p>No props passed - data is required</p>
        }
    }

    const handleGridTemplateColumns = () => {
        if (typeof props.colWidths === 'object') {
            return props.colWidths.map(val => `${val}fr`).join(' ')
        } else {
            if (!Array.isArray(props.data)) {
                return ['1fr', ...props.data[Object.keys(props.data)[0]].map(_ => '1fr')].join(' ')
            } else {
                return Object.keys(props.data).map(_ => '1fr').join(' ')
            }
        }
    }
    return (
        
        <div className={`${props.tableClass}`} style={{'grid-template-columns' : handleGridTemplateColumns()}}>
            {handleData()}
        </div>
    )
}

GridTable.defaultProps = {

}