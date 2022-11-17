import React from 'react';
import Table from './table';
import { tw } from '../../utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
    wrapper : '',
    row : tw('flex flex-col group rounded-2xl bg-red-50 m-2',
             ' md:flex-row md:flex-1'),
    header : 'self-center flex-1',
    headercontainer : tw('flex self-center w-4/5 bg-red-200 border-b border-red-200 m-2 p-2',
                         'rounded-2xl', 
                         'md:p-0 md:m-0 md:self-auto md:rounded-none md:group-first:rounded-tl-xl md:group-last:rounded-bl-2xl'),
    body : 'flex flex-col md:flex-row',
    input : tw('flex-1 m-0 bg-transparent resize-none outline-none'),
    inputdisplay : tw(' flex flex-1 rounded-2xl p-1',
                        'hover:bg-slate-200', 
                        'focus-within:bg-slate-200'),
    inputcontainer : tw('group flex flex-1  p-1', 
                        'md:border-t-0 '),
    cell : tw('text-center',
              'md:p-0 md:m-0'),

    wrapperstyle : {},
    rowstyle : {},
    headerstyle : {},
    headercontainerstyle : {'flex' : 1},
    bodystyle : {'flex' : 3},
    inputstyle : {},
    cellstyle : {},

    data : {
        col1 : [1],
        col2 : [2, 3],
        col3 : [3]
    },
    types : {
        col2 : 'date'
    }
};

export const Vertical = Template.bind({});

Vertical.args = {
    wrapper : 'flex text-center',
    row : 'flex-1 group',
    header : tw('bg-green-200',
                     'group-first:rounded-l-xl group-last:rounded-r-xl'),
    input : tw('rounded-lg',
                'hover:bg-slate-200',
                'focus:bg-slate-200'),
    cell : 'p-1',
    data : {
        'col1' : [1, 2, 3, 4, 5],
        'col2' : [2, 3, 4, 5, 6],
        'col3' : [3, 4, 5, 6, 7]
    },
    colflex : [1, 1, 1, 1, 1],
    sideflex : [1, 5]
};