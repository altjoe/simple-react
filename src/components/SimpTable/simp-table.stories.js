import React from 'react';
import SimpTable from './simp-table';
import { tw } from '../../utils';
import ReactDatePicker from 'react-datepicker';
import TextArea from 'react-expanding-textarea'
// import 'react-datepicker/dist/react-datepicker.css'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/SimpleTable',
  component: SimpTable,
};

const Template = (args) => <SimpTable {...args} />;

const removebutton = <button className={`px-3 py-2 text-center h-fit self-center m-auto rounded-lg bg-red-200`}>X</button>

export const Horizontal = Template.bind({});

Horizontal.args = {
    tableClass : 'p-2 border-spacing-0 w-full',
    rowClass : 'group flex flex-col sm:flex-row',


    titleContainerClass : tw('md:w-1/5 flex bg-green-200 rounded-lg', 
                              'md:rounded-none md:group-first:rounded-t-lg md:group-last:rounded-b-lg'),
    titleDisplayClass : 'text-center self-center m-auto p-2',


    inputContainerClass : 'flex flex-1 border-b',
    inputDisplayClass : 'flex flex-1 hover:bg-green-200 rounded-lg',
    inputClass : 'flex-1 text-center resize-none bg-transparent outline-none px-2 py-1 self-center w-10',

    data : {
      'Description' : ['it would be extremely fucking annoying if this works', 1, 2, 3],
      'Full Name' : ['Joe', 'Ross', 'Meyer'],
      'Row 3' : [0, 1, 2, 3],
      'Date' : [0, 1, 2, 3]
    }, 

    customElements : {'Date' : 'input'},
    customArgs : {
      type : 'date',
      className : 'bg-transparent outline-none self-center m-auto'
    },

    

    flexdirection : 'row'
};

export const Vertical = Template.bind({});

Vertical.args = {
    tableClass : 'group w-full border-collapse caret-transparent table-auto',
    rowClass : tw('flex overflow-hidden first:rounded-xl'),
    titleContainerClass : tw('flex-1 bg-green-200 p-1'),
    titleDisplayClass : tw(''),

    inputContainerClass : 'flex flex-1 border-b m-1',
    inputDisplayClass : tw('flex flex-1 rounded-xl cursor-text mb-1', 
                           'hover:bg-green-100', 
                           'border-4 border-transparent  focus-within:hover:bg-green-100 focus-within:bg-green-100 focus-within:shadow-inner'),
    inputClass : ' flex-1 w-10 resize-none self-center text-center outline-none bg-transparent focus:caret-black ',

    buttonContainerClass : 'flex w-full justify-center',
    buttonClass : ' p-2 m-2 rounded-lg bg-green-200  caret-transparent',
    
    

    data : {
      'description' : ['it would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this works', 1, 2, 3],
      'Full Name' : ['Joe', 'Ross', 'Meyer'],
      'row3' : [0, 1, 2, 3],
      'Date' : ['', '', '', ''],
      'Actions' : ['','','', '']
    },
    hidecolumn : ['Actions'],

    customElements : {'Date' : 'input'},
    customArgs : {
      type : 'date',
      className : ' bg-transparent outline-none self-center m-auto text-center',
      onChange : event => console.log(event.target.value)
    },
    
    groupedCustomElements : {
      'Actions' : removebutton
    },

    flexdirection : 'column',
    flex : [9, 3, 3, 3],

    onChange : event => console.log(event.target.value),
    onClick : event => console.log('Add')
};




export const EmptyComponent = Template.bind({});

EmptyComponent.args = {
  // tableClass : tw(''),
  // rowClass : tw(''),
  // titleContainerClass : tw(''),
  // titleDisplayClass : tw(''),

  // inputContainerClass : tw(''),
  // inputDisplayClass : tw(''),
  // inputClass : tw(''),
  // buttonContainerClass : tw(''),
  // buttonClass : tw(''),
  
  // data : {},
  // hidecolumn : [],
  // customElements : {},
  // customArgs : {},
  // groupedCustomElements : {},

  // flexdirection : tw(''),
  // flex : [],

  // onChange : event => console.log(event.target.value),
  // onClick : event => console.log('Add')
};

export const NoArgs = Template.bind({});

NoArgs.args = {
 
};