import React from 'react';
import Table from './table'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    class: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />;

export const normalTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normalTable.args = {
  wrapperClass : 'border',
  headerClass : 'bg-green-300 border-none text-center',
  bodyClass : '',
  rowClass : 'flex border-b',
  cellClass : 'flex-1 text-center focus:bg-slate-200 hover:bg-slate-100',
  data : {
    0: {'col1' : '1', 'col2' : '2', 'col3' : '3'},
    1: {'col1' : '2', 'col2' : '3', 'col3' : '4'},
    2: {'col1' : '3', 'col2' : '4', 'col3' : '5'},
    3: {'col1' : '4', 'col2' : '5', 'col3' : '6'},
    4: {'col1' : '5', 'col2' : '6', 'col3' : '7'}
  },
  flex: [1, 1, 1]
};

export const sidewaysTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
sidewaysTable.args = {
  wrapperClass : 'flex text-center border border-b-transparent',
  headerClass : '',
  bodyClass : 'flex flex-1',
  rowClass : 'flex flex-col flex-1',
  cellClass : 'flex-1 text-center focus:bg-slate-200 hover:bg-slate-200 border-b focus:outline',
  headerCellClass : 'border-b bg-purple-200',
  data : {
    0: {'row1' : '1', 'row2' : 2}
  },
  flex : [1, 1]
};
