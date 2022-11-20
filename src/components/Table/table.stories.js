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

export const Horizontal_Style1 = Template.bind({});

Horizontal_Style1.args = {
    wrapper : 'rounded-lg overflow-clip',
    row : tw('flex flex-col rounded-lg overflow-hidden bg-blue-50 m-2',
             'md:rounded-none md:m-0 md:flex-row md:flex-1'),
    header : 'self-center flex-1',
    headercontainer : tw('flex self-center w-10/12 rounded-lg bg-blue-200 border-b border-blue-200 m-2 p-2', 
                         'md:rounded-none md:p-0 md:m-0 md:self-auto'),
    body : 'group flex flex-col md:flex-row',
    input : tw('flex-1 m-0 bg-transparent resize-none  outline-none w-1'),
    inputdisplay : tw(' flex flex-1 p-1 border-white rounded-lg',
                        'hover:bg-slate-50', 
                        'focus-within:bg-white focus-within:drop-shadow-sm',
                        'hover:focus-within:bg-white'),
    inputcontainer : tw('group border-b border-blue-100 flex flex-1 p-1', 
                        ''),
    cell : tw('text-center ',
              'md:p-0 md:m-0'),

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {'flex' : 1},
    bodystyle : {'flex' : 3},
    inputstyle : {},
    cellstyle : {},

    data : {
        'Date' : [''],
        'Full Name' : ['Joe', 'Meyer'],
        'Email' : ['meyer.joer5@gmail.com'],
        'Friends' : ['none', 'except', 'me']
    },
    types : {
        'Date' : 'date'
    },
    align : true,

};

export const Horizontal_Style2 = Template.bind({});

Horizontal_Style2.args = {
    wrapper : '',
    row : 'group flex flex-col md:flex-row',
    header : 'p-1',
    headercontainer : tw('flex-1 bg-green-200', 
                         'rounded-md m-1'), 
    body : 'flex flex-col md:flex-row rounded-md overflow-hidden',
    input : 'self-center flex-1 resize-none outline-none bg-transparent  w-1',
    inputdisplay : tw('flex flex-1 m-1 rounded-md ',
                      'focus-within:bg-slate-100 ', 
                      'hover:focus-within:bg-slate-100 hover:bg-slate-200 '),
    inputcontainer : 'flex flex-1 group border-b', 
    cell : 'text-center',

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {'flex' : 1},
    bodystyle : {'flex' : 2},
    inputstyle : {},
    cellstyle : {},

    data : {
        'Date' : ['10/22/30'],
        'Full Name' : ['Joe', 'Meyer'],
        'Email' : ['meyer.joer5@gmail.com'],
        'Friends' : ['none', 'except', 'me']
    },
    types : {
        'Date' : 'date'
    },
    align : true
};

export const Vertical_Style1 = Template.bind({});

Vertical_Style1.args = {
    wrapper : tw('flex overflow-scroll snap-x snap-proximity pb-5'),
    row : 'flex-1 group',
    header : 'p-1',
    headercontainer : tw('snap-start bg-red-200',
                         'group-first:rounded-l-md group-last:rounded-r-md group-last:snap-end'), 
    body : '',
    input : 'flex-1 resize-none outline-none bg-transparent',
    inputdisplay : tw('flex flex-1 rounded-md', 
                      'hover:bg-slate-200'),
    inputcontainer : 'flex border-b  p-1', 
    cell : 'text-center text-sm md:text-base',

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {'flex': 1},
    bodystyle : {'flex' : 5},
    inputstyle : {},
    inputdisplaystyle : {},
    inputcontainerstyle : {},
    cellstyle : {},

    data : {
        'Date' : ['10/22/30', 1, 2, 3],
        'Full Name' : ['Jolsakjdf;ajksdf;kajsdhf;kajsdhf;aksdjfha;skdjfhas;kdfjhase', 'Meyer', 1, 2],
        'Email' : ['meyer.joer5@gmail.com', 1, 2, 3],
        'Friends' : ['none', 'except', 'me', 1]
    },
    types : {
        'Date' : 'date'
    },
    align : true,
    aligndirection : 'row'
};

export const Vertical_Style2 = Template.bind({});

Vertical_Style2.args = {
    wrapper : tw('max-h-max flex flex-col flex-wrap pb-3', 
                 'overflow-scroll overflow-y-hidden snap-x snap-proximity', 
                 'sm:flex-row sm:flex-nowrap '),
    row : 'flex flex-1 flex-row sm:flex-col group',
    header : 'flex sm:flex-1 px-0 py-1 m-auto justify-center',
    headercontainer : tw('flex bg-green-100 p-1', 
                         'min-w-min sticky left-0', 
                         'group-first:rounded-t-md group-last:rounded-b-md',
                         'sm:px-2',
                         'sm:flex sm:flex-1 sm:group-first:rounded-l-md sm:group-last:rounded-r-md'), 
    body : tw('flex sm:flex-col flex-row',
              ''),
    input : 'flex-1 resize-none outline-none bg-transparent m-auto',
    inputdisplay : tw('flex flex-1 self-center rounded-md',
                      'hover:bg-slate-200', 
                      ''),
    inputcontainer : tw('flex flex-1 border-b p-1'), 
    cell : 'text-center',

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {'flex' : 1},
    bodystyle : {'flex' : 5},
    inputstyle : {},
    inputdisplaystyle : {},
    inputcontainerstyle : {},
    cellstyle : {},

    data : {
        'Full Name' : ['Jolsakjdf;ajksdf;kajsdhf;kajsdhf;aksdjfha;skdjfhas;kdfjhaseJolsakjdf;ajksdf;kajsdlkjlkjsdlfkjsdfhf;kajsdhf;aksdjfha;skdjfhas;kdfjhase', 'Roy David', 1, 2],
        'Date' : ['', '', '', ''],
        'Email' : ['meyer.joer5@gmail.commeyer.joer5@gmail.commeyer.joer5@gmail.commeyer.joer5@gmail.commeyer.joer5@gmail.commeyer.joer5@gmail.commeyer.joer5@gmail.com', 'roy.david@gmail.com', 2, 3],
        'Friends' : ['Roy', 'Joe', 'me', 1],
        'description' : ['This is a big ole test for description ', '', '', '']
    },
    custom : {
        'Date' : {'element' : 'input', 
            'args' : {'type' : 'date', 'className' : 'flex-1 text-center bg-transparent'}
        }
    },
    align : true,
    aligndirection : 'column',
    fillempty : false
};



export const TestSpeedTable = Template.bind({});

TestSpeedTable.args = {
    wrapper : '',
    row : 'flex group select-none',
    header : 'select-none',
    headercontainer : tw('select-none bg-red-100 p-2', 
                         'group-first:rounded-t-lg group-last:rounded-b-lg'), 
    body : 'flex px-2',
    input : 'flex-1 border-b resize-none bg-transparent outline-none p-1 text-center self-center hover:cursor-pointer',
    inputdisplay : tw('flex flex-1 self-center mx-2',
                      'hover:bg-slate-100',
                      'focus-within:bg-slate-100 focus:bg-green-200'),
    inputcontainer : 'flex flex-1', 
    cell : '',

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {'flex' : 1},
    bodystyle : {'flex': 3},
    inputstyle : {},
    inputdisplaystyle : {},
    inputcontainerstyle : {},
    cellstyle : {},
    
    data : {
        'Customer:' : ['', ''],
        'Date:' : [''],
        'Email:' : ['']
    },
    custom : {
        'Date:' : {'element' : 'input', 'args' : {'type' : 'date', 'className' : 'flex-1 border-b bg-transparent outline-none p-1 text-center self-center hover:cursor-pointer'}}
    },
    
    align : true,
    aligndirection : 'column',
    fillempty : false

};

export const TestSpeedTable2 = Template.bind({});


TestSpeedTable2.args = {
    wrapper : '',
    row : 'flex group select-none',
    header : '',
    headercontainer : tw('bg-red-100 p-2', 
                         'group-first:rounded-t-lg group-last:rounded-b-lg'), 
    body : 'flex px-2',
    input : 'flex-1 resize-none bg-transparent outline-none p-1 py-2 text-center self-center hover:cursor-pointer ',
    inputdisplay : tw('flex flex-1 self-center px-1 rounded-lg',
                      'hover:bg-slate-100',
                      'focus-within:bg-slate-100 focus:bg-green-200'),
    inputcontainer : 'flex flex-1 border-b', 
    cell : '',

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {'flex' : 1},
    bodystyle : {'flex': 3},
    inputstyle : {},
    inputdisplaystyle : {},
    inputcontainerstyle : {},
    cellstyle : {},

    data : {
        'Order In:' : ['', '', ''],
        'Completed:' : [''],
    },

    custom : {
        'Order In:' : {'element' : 'input', 
            'args' : {'type' : 'date', 'className' : 'flex-1 bg-transparent text-center'}
        },
        'Completed:' : {'element' : 'input', 
            'args' : {'type' : 'date', 'className' : 'flex-1 bg-transparent text-center'}
        }
    },
    align : false,
    aligndirection : 'column',
    fillempty : false

};


export const NoStyle = Template.bind({});

NoStyle.args = {
    wrapper : '',
    row : '',
    header : '',
    headercontainer : '', 
    body : '',
    input : '',
    inputdisplay : '',
    inputcontainer : '', 
    cell : '',

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {},
    bodystyle : {},
    inputstyle : {},
    inputdisplaystyle : {},
    inputcontainerstyle : {},
    cellstyle : {},

    data : {
        'Date' : ['10/22/30'],
        'Full Name' : ['Joe', 'Meyer'],
        'Email' : ['meyer.joer5@gmail.com'],
        'Friends' : ['none', 'except', 'me']
    },
    types : {
        'Date' : 'date'
    },
    align : true,
    aligndirection : 'column',
    fillempty : false

};