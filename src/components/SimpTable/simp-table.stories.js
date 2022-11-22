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


    titleContainerClass : tw('flex flex-1 bg-green-200 rounded-lg', 
                              'md:rounded-none md:group-first:rounded-t-lg md:group-last:rounded-b-lg'),
    titleDisplayClass : 'text-center self-center m-auto p-2',


    inputContainerClass : 'flex flex-1 border-b',
    inputDisplayClass : 'flex flex-1 hover:bg-red-200 rounded-lg ',
    inputClass : 'flex-1 text-center resize-none bg-transparent outline-none px-2 py-1 self-center',

    // data : {
    //   'test1' : [0, 1, 2, 3],
    //   'test2' : [0, 1, 2, 3],
    //   'test3' : [0, 1, 2, 3],
    //   'test4' : [0, 1, 2, 3],
    //   'test5' : [0, 1, 2, 3]
    // }
    data : {
      'description' : ['it would be extremely fucking annoying if this works', 1, 2, 3],
      'Full Name' : ['Joe', 'Meyer'],
      'row3' : [0, 1, 2, 3],
      'row4' : [0, 1, 2, 3]
    }
};


export const NoArgs = Template.bind({});

NoArgs.args = {
    
};