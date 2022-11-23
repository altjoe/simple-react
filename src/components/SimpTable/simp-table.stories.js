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

export const Horizontal = Template.bind({});

Horizontal.args = {
    tableClass : 'p-2 border-spacing-0 w-full',
    rowClass : 'group flex flex-col sm:flex-row',


    titleContainerClass : tw('md:w-1/5 flex bg-green-200 rounded-lg', 
                              'md:rounded-none md:group-first:rounded-t-lg md:group-last:rounded-b-lg'),
    titleDisplayClass : 'text-center self-center m-auto p-2',


    inputContainerClass : 'flex flex-1 border-b',
    inputDisplayClass : 'flex flex-1 hover:bg-red-200 rounded-lg ',
    inputClass : 'flex-1 text-center resize-none bg-transparent outline-none px-2 py-1 self-center w-10',

    data : {
      'Description' : ['it would be extremely fucking annoying if this works', 1, 2, 3],
      'Full Name' : ['Joe', 'Ross', 'Meyer'],
      'Row 3' : [0, 1, 2, 3],
      'Row 4' : [0, 1, 2, 3]
    }, 
    flexdirection : 'row'
};

export const Vertical = Template.bind({});

Vertical.args = {
    tableClass : 'group w-full border-collapse caret-transparent',
    rowClass : tw('flex overflow-hidden first:rounded-xl'),
    titleContainerClass : tw('flex-1 bg-red-200 border-b border-white'),
    titleDisplayClass : '',

    inputContainerClass : 'flex flex-1 border-b',
    inputDisplayClass : tw('flex flex-1 rounded-xl cursor-text', 
                           'hover:bg-red-100', 
                           'border-4 border-transparent focus-within:border-red-200 focus-within:bg-red-100'),
    inputClass : 'flex-1 w-10 resize-none self-center text-center outline-none bg-transparent focus:caret-black ',

    buttonContainerClass : 'flex w-full justify-center',
    buttonClass : 'p-2 m-2 rounded-lg bg-green-200  caret-transparent',

    data : {
      'description' : ['it would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this works', 1, 2, 3],
      'Full Name' : ['Joe', 'Ross', 'Meyer'],
      'row3' : [0, 1, 2, 3],
      'row4' : [0, 1, 2, 3]
    },
    flexdirection : 'row',
    flex : [3, 1, 1, 1]
};


export const NoArgs = Template.bind({});

NoArgs.args = {
    
};