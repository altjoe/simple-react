import React from 'react';
import HTable from './h-table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/Horizontal-Table',
  component: HTable,
};

const Template = (args) => <HTable {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  wrapperClass : '',
  rowClass : 'border-b',
  headerClass : '',
  bodyClass : '',
  headerCellClass : 'text-center',
  inputCellClass : 'resize-none text-center hover:bg-slate-200 rounded-2xl outline-none',
  data : {
    'row1' : [1, 3, 3],
    'row2' : [2, 3, 4],
    'row3' : [3, 4, 5]
  },
  'flex' : [1, 4, 1]
};

