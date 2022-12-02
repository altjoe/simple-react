import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

export default function GridTable(props) {

    const handleElement = (key, index, val) => {
        if (typeof props.elements !== 'undefined') {
            let Element = props.elements[key]
            return (
                <div className={`${props.inputContainer}`}>
                    <div className={`${props.inputDisplay}`}> 
                        <Element className={typeof Element !== 'undefined' ? Element.className + props.input : props.input} onChange={event => props.onChange(event, key, index)} value={val}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`${props.inputContainer}`}>
                    <div className={`${props.inputDisplay}`}>
                        {val}
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