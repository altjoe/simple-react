import React from 'react';
import { useState } from 'react';
import TextArea from 'react-expanding-textarea'

import GridTable from './grid-table';
import { tw } from '../../utils';

// import 'react-datepicker/dist/react-datepicker.css'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/GridTable',
  component: GridTable,
};



const Template = (args) => {
    const [data1, setData1] = useState({
        'Name' : ['a', 'b', 'c'],
        'Date' : ['1', '2', '3'],
        'Email' : ['c', 'd', 'f'],
        'Rushed' : [false, false, false]
    })
    const [data2, setData2] = useState([
        {'Name' : 'a', 'Date' : '1', 'Email' : 'e', 'Rushed' : false},
        {'Name' : 'b', 'Date' : '2', 'Email' : 'f', 'Rushed' : false},
        {'Name' : 'c', 'Date' : '3', 'Email' : 'g', 'Rushed' : false}
        
    ])
    
    const handleChange1 = (event, key, index) => {
        let temp = {...data1}
        console.log(temp);
        console.log(temp);
        temp[key][index] = event.target.value
        console.log('temp2', temp);
        setData1(temp)
    }
    const handleChange2 = (event, key, index) => {
        let temp = [...data2]
        console.log(temp);
        console.log(temp);
        temp[index][key] = event.target.value
        setData2(temp)
    }

    return (
        <div>
            <GridTable tableID='1' data={data1} {...args} />
            <div className={`p-5`}></div>
            <GridTable tableID='2' data={data2} {...args} />
        </div>
    )
};



export const Horizontal = Template.bind({});

Horizontal.args = {
    tableClass : 'grid rounded-xl overflow-hidden',
    rowClass : ['bg-yellow-300', 'bg-green-200', 'bg-green-200'],
    headerContainer : tw(' bg-red-300', 
                         'flex flex-1'),
    header : tw('p-2 flex-1 self-center text-center'),

    inputContainer : tw(' flex w-full',
                        'border-b '),
    inputDisplay : tw('flex flex-1 bg-transparent rounded-xl border-slate-500 hover:bg-slate-300'),
    input : tw('p-2 resize-none bg-transparent text-center flex-1 self-center outline-none'),

    elements : {
        'Name' : (tableid, key, id, val, cl) => {
          return <TextArea key={key} id={``} value={val} className={cl}/>
        },
        'Date' : (tableid, key, id, val, cl) => {
          return <TextArea key={key} id={``} value={val} className={cl}/>
        },
        'Email' : (tableid, key, id, val, cl) => {
          return <TextArea key={key} id={``} value={val} className={cl}/>
        },
        'Rushed' : (tableid, key, id, val, cl) => {
          return <input type='checkmark' key={key} id={``} checked={val} className={`${cl}`}/>
        }
    },

    elementParentFunction : {
        // 'Name' : (doc, id) => doc.getElementById(id).focus(),
        // 'Date' : (doc, id) => doc.getElementById(id).focus(),
        // // 'Email' : (doc, id) => doc.getElementById(id).focus(),
        'Rushed' : (doc, id) => doc.getElementById(id).click()
        
    },

    colWidths : [1, 1, 1, 1],
    direction : 'row'
}

export const Vertical = Template.bind({});




Vertical.args = {
    tableClass : 'grid rounded-xl overflow-hidden',
    rowClass : ['bg-yellow-300', 'bg-green-200', 'bg-green-200'],
    headerContainer : tw(' bg-red-300', 
                         'flex flex-1'),
    header : tw('p-2 flex-1 self-center text-center'),

    inputContainer : tw(' flex w-full',
                        'border-b '),
    inputDisplay : tw('flex flex-1 bg-transparent rounded-xl border-slate-500 hover:bg-slate-300'),
    input : tw('p-2 resize-none bg-transparent text-center flex-1 self-center outline-none'),

    elements : {
        'Name' : (args) => <TextArea {...args}/>,
        'Date' : (args) => <input type='date' {...args}/>,
        'Email' : (args) => <TextArea {...args}/>,
        'Rushed' : (args) => <input type='radio' {...args}/>
    },
    handleElement : {
        'Name' : {'onChange' : event => console.log(event.target.value)},
        'Date' : {'onChange' : event => console.log(event.target.value)},
        'Email' : {'onChange' : event => console.log(event.target.value)},
        'Rushed' : {'onClick' : event => console.log(event.target.value)},
    },
    elementParentFunction : {
        'Name' : (doc, id) => doc.getElementById(id).focus(),
        'Date' : (doc, id) => doc.getElementById(id).focus(),
        'Email' : (doc, id) => doc.getElementById(id).focus(),
        'Rushed' : (doc, id) => doc.getElementById(id).click()
        
    },
    colWidths : [1, 1, 1, 0.1],
    direction : 'column'
}