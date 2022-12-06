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
  const [items, setItems] = useState([
    {'Item' : 'test', 'Garment Color' : '', 'Mono, Initials, Design' : '', 'Font Used' : '', 'Thread/Ink Color' : '', 'Quantity' : '', 'Notes' : '', 'Price/Ea' : '', 'SubTotal' : '56'},
    {'Item' : '', 'Garment Color' : '', 'Mono, Initials, Design' : '', 'Font Used' : '', 'Thread/Ink Color' : '', 'Quantity' : '', 'Notes' : '', 'Price/Ea' : '', 'SubTotal' : ''},
    {'Item' : '', 'Garment Color' : '', 'Mono, Initials, Design' : '', 'Font Used' : '', 'Thread/Ink Color' : '', 'Quantity' : '', 'Notes' : '', 'Price/Ea' : '', 'SubTotal' : ''},
    {'Item' : '', 'Garment Color' : '', 'Mono, Initials, Design' : '', 'Font Used' : '', 'Thread/Ink Color' : '', 'Quantity' : '', 'Notes' : '', 'Price/Ea' : '', 'SubTotal' : ''},
    {'Item' : '', 'Garment Color' : '', 'Mono, Initials, Design' : '', 'Font Used' : '', 'Thread/Ink Color' : '', 'Quantity' : '', 'Notes' : '', 'Price/Ea' : '', 'SubTotal' : ''},
    {'Item' : '', 'Garment Color' : '', 'Mono, Initials, Design' : '', 'Font Used' : '', 'Thread/Ink Color' : '', 'Quantity' : '', 'Notes' : '', 'Price/Ea' : '', 'SubTotal' : ''},
    {'Item' : '', 'Garment Color' : '', 'Mono, Initials, Design' : '', 'Font Used' : '', 'Thread/Ink Color' : '', 'Quantity' : '', 'Notes' : '', 'Price/Ea' : '', 'SubTotal' : ''}
  ]); 
  const handleItems = (key, index, event) => {
    // console.log(event.target.value);
    let temp = [...items]
    temp[index][key] = event.target.value
    setItems(temp)

  }; 
  return <GridTable tableID='item' data={items} {...args} elements={{
    'Item' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'Garment Color' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'Mono, Initials, Design' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'Font Used' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'Thread/Ink Color' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'Quantity' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'Notes' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'Price/Ea' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl} onChange={(event) => handleItems(key, index, event)}/>
      },
    'SubTotal' : (tableid, key, index, val, cl) => {
        return <TextArea key={`${tableid}-${key}-${index}`} id={`${tableid}-${key}-${index}`} value={val} className={cl + 'bg-slate-200'} onChange={(event) => handleItems(key, index, event)} disabled/>
      }
  }}/>
};


export const Test = Template.bind({});

Test.args = {
  rowClass : ['', '', '', '', '', '', '', '', 'bg-slate-500'],
  tableClass : 'w-fit flex-1 h-min grid rounded-t-xl overflow-hidden',
  headerContainer : tw(' bg-blue-300', 
                      'flex flex-1'),
  header : tw('p-2 flex-1 self-center text-center'),

  inputContainer : tw(' flex w-full',
                      'border-b '),
  inputDisplay : tw('flex flex-1 bg-transparent rounded-xl border-slate-500 hover:bg-slate-300'),
  input : tw('p-2 resize-none bg-transparent text-center flex-1 self-center outline-none '),
  colWidths : [1, 1, 1.5, 1, 1, 1, 2, 1, 1],
  direction : 'column',
    elementParentFunction : {
      'Item' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'Garment Color' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'Mono, Initials, Design' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'Font Used' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'Thread/Ink Color' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'Quantity' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'Notes' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'Price/Ea' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        },
      'SubTotal' : (tableid, key, index) => {
          return document.getElementById(`${tableid}-${key}-${index}`).focus()
        }
    }
}


