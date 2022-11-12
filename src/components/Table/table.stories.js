import React from 'react';
import Table from './table'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />;

export const verticalTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
verticalTable.args = {
  vertical : true,
  wrapperClass : '',
  headerClass : 'bg-red-200',
  bodyClass : '',
  rowClass : '',
  headerCellClass : 'flex-1 text-center',
  inputCellClass : 'flex-1 text-center resize-none outline-none',
  data : {
    0: {'col1' : '1', 'col2' : '2', 'col3' : '3'},
    1: {'col1' : '2', 'col2' : '3', 'col3' : '4'},
    2: {'col1' : '3', 'col2' : '4', 'col3' : '5'},
    3: {'col1' : '4', 'col2' : '5', 'col3' : '6'},
    4: {'col1' : '5', 'col2' : '6', 'col3' : '7'}
  },
  flex : [3, 3, 1]
};

export const horizontalTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
horizontalTable.args = {
  vertical : false,
  wrapperClass : 'flex',
  headerClass : 'bg-red-200',
  bodyClass : 'flex',
  rowClass : '',
  headerCellClass : 'flex-1 text-center',
  inputCellClass : 'flex-1 text-center resize-none outline-none',
  data : {
    0: {'col1' : '1', 'col2' : '2', 'col3' : '3'},
    1: {'col1' : '2', 'col2' : '3', 'col3' : '4'},
    2: {'col1' : '3', 'col2' : '4', 'col3' : '5'},
    3: {'col1' : '4', 'col2' : '5', 'col3' : '6'},
    4: {'col1' : '5', 'col2' : '6', 'col3' : '7'}
  },
  flex : [1, 1, 1, 1, 1]
};
