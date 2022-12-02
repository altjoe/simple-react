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
        'Name' : ['a', '1', 'e'],
        'Date' : ['b', '2', 'f'],
        'Email' : ['c', '3', 'g'],
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

    return <GridTable onChange={handleChange2} data={data2} {...args} />
};

export const Horizontal_Data1 = Template.bind({});



Horizontal_Data1.args = {
    // const [data1, setData1] = useState({
    //     'Name' : ['a', '1', 'e'],
    //     'Date' : ['b', '2', 'f'],
    //     'Email' : ['c', '3', 'g']
    // })
    tableClass : 'grid rounded-xl overflow-scroll',
    headerContainer : tw('sticky left-0 bg-red-300 min-w-[100px]', 
                         'flex'),
    header : tw('p-2 flex-1 self-center text-center '),

    inputContainer : tw(' flex w-full',
                        'border-b border-slate-500 hover:bg-slate-300'),
    inputDisplay : tw('flex flex-1 bg-transparent'),
    input : tw('p-2 resize-none bg-transparent text-center flex-1 self-center outline-none'),

    elements : {
        'Name' : (args) => <TextArea {...args}/>,
        'Date' : (args) => <input type='date' {...args}/>,
        'Email' : (args) => <TextArea {...args}/>
    },

    rowClass : ['', '', 'bg-yellow-300'],
    colClass : [],

    colWidths : [1, 1, 1, 1],
    direction : 'row'
}

export const Vertical_Data1 = Template.bind({});




Vertical_Data1.args = {
    tableClass : 'grid rounded-xl overflow-hidden',
    headerContainer : tw(' bg-red-300', 
                         'flex flex-1'),
    header : tw('p-2 flex-1 self-center text-center'),

    inputContainer : tw('flex w-full',
                        'border-b border-slate-500 hover:bg-slate-300'),
    inputDisplay : tw('flex flex-1 bg-transparent'),
    input : tw('p-2 resize-none bg-transparent text-center flex-1 self-center outline-none'),

    elements : {
        'Name' : (args) => <TextArea {...args}/>,
        'Date' : (args) => <input type='date' {...args}/>,
        'Email' : (args) => <TextArea {...args}/>,
        'Rushed' : (args) => <input type='radio' {...args}/>
    },
    colWidths : [1, 1, 1, 1],
    direction : 'column'
}


export const Horizontal_Data2 = Template.bind({});



Horizontal_Data2.args = {
    // const [data1, setData1] = useState({
    //     'Name' : ['a', '1', 'e'],
    //     'Date' : ['b', '2', 'f'],
    //     'Email' : ['c', '3', 'g']
    // })
    tableClass : 'grid rounded-xl overflow-hidden',
    headerContainer : tw(' bg-red-300', 
                         'flex flex-1'),
    header : tw('p-2 flex-1 self-center text-center'),

    inputContainer : tw('flex w-full',
                        'border-b border-slate-500 hover:bg-slate-300'),
    inputDisplay : tw('flex flex-1 bg-transparent'),
    input : tw('p-2 resize-none bg-transparent text-center flex-1 self-center outline-none'),

    elements : {
        'Name' : (args) => <TextArea {...args}/>,
        'Date' : (args) => <input type='date' {...args}/>,
        'Email' : (args) => <TextArea {...args}/>,
        'Rushed' : (args) => <input type='radio' {...args}/>
    },

    colWidths : [1, 1, 1, 1],
    direction : 'row'
}

export const Vertical_Data2 = Template.bind({});




Vertical_Data2.args = {
    tableClass : 'grid rounded-xl overflow-hidden',
    headerContainer : tw(' bg-red-300', 
                         'flex flex-1'),
    header : tw('p-2 flex-1 self-center text-center'),

    inputContainer : tw('flex w-full',
                        'border-b border-slate-500 hover:bg-slate-300'),
    inputDisplay : tw('flex flex-1 bg-transparent'),
    input : tw('p-2 resize-none bg-transparent text-center flex-1 self-center outline-none'),

    elements : {
        'Name' : (args) => <TextArea {...args}/>,
        'Date' : (args) => <input type='date' {...args}/>,
        'Email' : (args) => <TextArea {...args}/>,
        'Rushed' : (args) => <input type='radio' {...args}/>
    },
    colWidths : [1, 1, 1, 0.1],
    direction : 'column'
}