import React from 'react';
import Table from './table';
import { tw } from '../../utils';
import ReactDatePicker from 'react-datepicker';
import TextArea from 'react-expanding-textarea'
// import 'react-datepicker/dist/react-datepicker.css'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

const removebutton = (
  <div className={`flex`}>
    <button className={`flex-1 w-4/5 p-2 text-center self-center  rounded-lg bg-red-200`}>✕</button>
  </div>
)
const editbutton = <button className={`w-4/5 p-2 text-center self-center rounded-lg bg-yellow-200`}>Edit</button>
const completedbutton = <button className={`w-4/5 p-2 text-center self-center rounded-lg bg-green-200`}>✓</button>


export const Horizontal = Template.bind({});

Horizontal.args = {
    tableClass : 'p-2 border-spacing-0 w-full',
    rowClass : 'group flex flex-col sm:flex-row',


    titleContainerClass : tw('w-1/5 flex bg-green-200 ', 
                              'md:rounded-none group-first:rounded-t-lg group-last:rounded-b-lg'),
    titleDisplayClass : 'text-center self-center m-auto p-2',


    inputContainerClass : 'flex flex-1 border-b',
    inputDisplayClass : 'flex flex-1 rounded-lg',
    inputClass : 'flex-1 text-center resize-none bg-transparent outline-none px-2 py-1 self-center w-10',

    data : {
      'Description' : ['it would be extremely fucking annoying if this works', 1, 2, 3],
      'Full Name' : ['Joe', 'Ross', 'Meyer', ''],
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
    tableClass : 'table w-full rounded-lg overflow-hidden',
    rowClass : tw('table-row border-b h-full'),
    titleContainerClass : tw('table-cell bg-green-200 p-2'),
    titleDisplayClass : tw('w-full'),

    inputContainerClass : 'group  h-full  table-cell',
    inputDisplayClass : tw('flex w-full h-full text-center group-hover:bg-red-200 rounded-lg'),
    inputClass : 'self-center w-full resize-none text-center bg-transparent text-lg font-semibold',

    buttonContainerClass : '',
    buttonClass : '',
    
    

    data : {
      'description' : ['it would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this worksit would be extremely fucking annoying if this works', 1, 2, 3],
      'Full Name' : ['Joe', 'Ross', 'Meyer'],
      'row3' : [0, 1, 2, 3],
      'Date' : ['', '', '', ''],
      'Edit' : ['','','', ''],
      'Completed' : ['','','', ''],
      'Remove' : ['','','', '']
      
      
    },
    hidecolumn : [],

    customElements : {'Date' : 'input'},
    customArgs : {
      type : 'date',
      className : 'bg-transparent outline-none text-center pl-4 m-auto font-semibold',
      onChange : event => console.log(event.target.value)
    },
    hidecolumn : ['Edit', 'Completed', 'Remove'],
    
    groupedCustomElements : {
      'Edit' : editbutton,
      'Completed' : completedbutton,
      'Remove' : removebutton  
    },
    // hidecolumn : ['Remove', 'Change', 'Edit'],

    flexdirection : 'column',
    flex : [9, 3, 3, 3, 0.3, 0.3, 0.3],

    highlightRows : [true, false, true, false],
    highlightClass : 'bg-orange-300 first:rounded-l-lg last:rounded-r-lg',

    onChange : event => console.log(event.target.value),
    onClick : event => console.log('Add')
};



// export const EmptyComponent = Template.bind({});

// EmptyComponent.args = {

// };

export const NoArgs = Template.bind({});

NoArgs.args = {
 
};






    