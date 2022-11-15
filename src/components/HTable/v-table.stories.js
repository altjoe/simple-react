import React from 'react';
import VTable from './v-table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/Vertical-Table',
  component: VTable,
};

const Template = (args) => <VTable {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  wrapperClass : '',
  rowClass : 'border-b',
  headerClass : 'bg-green-200 rounded-xl',
  bodyClass : '',
  headerCellClass : 'text-center',
  inputCellClass : 'resize-none text-center hover:bg-slate-200 rounded-2xl outline-none',
  data : {
    'col1' : [1, 3, 3],
    'col2' : [2, 3, 4],
    'col3' : [3, 4, 5]
  },
  'flex' : [1, 4, 1]
};

