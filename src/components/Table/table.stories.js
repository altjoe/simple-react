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
    wrapper : 'flex flex-col',
    row : 'flex flex-1 group',
    header : tw('flex-1 bg-red-200 ',
                    'group-first:rounded-t-xl group-last:rounded-b-xl'),
    input : 'flex-1',
    cell : 'text-center',
    data : {
        col1 : [1, 2, 3, 4, 5],
        col2 : [2, 3, 4, 5, 6],
        col3 : [3, 4, 5, 6, 7]
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