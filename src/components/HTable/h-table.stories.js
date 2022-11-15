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
  wrapperClass : 'w-1/2',
  rowClass : 'group',
  dataClass : 'border-b',
  headerClass : 'p-2 text-center self-stretch bg-purple-200 group-first:rounded-t-lg group-last:rounded-b-lg',
  headerCellClass : 'm-auto',
  inputContainer : ' group hover:bg-slate-200 group-focus-within:bg-slate-200 hover:cursor-text rounded-lg',
  inputCellClass : 'm-auto text-center outline-none resize-none bg-transparent ',
  data : {
    'Name:' : ['']
  },
  'flex' : [1, 2.5]
};

