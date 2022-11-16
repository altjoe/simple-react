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
  rowClass : 'group',
  dataClass : 'border-b',
  headerClass : 'p-2 text-center self-stretch bg-purple-200\
                 group-first:rounded-t-lg group-last:rounded-b-lg',
  headerCellClass : 'm-auto',
  inputContainer : ' hover:bg-slate-200 focus-within:bg-slate-200 rounded-2xl',
  inputCellClass : 'm-auto text-center outline-none resize-none bg-transparent',
  data : {
    'Full name': ['', ''],  
    'Email': ['']
  },
  placeholder : {
    'Full name': ['First', 'Last'],
    'Email': ['test@gmail.com']
  },
  'flex' : [1, 1, 1]
};


export const NoParams = Template.bind({});

NoParams.args = {

};

export const NoStyle = Template.bind({});

NoStyle.args = {
  wrapperClass : ``,
  rowClass : ``,
  headerClass : ``,
  dataClass : ``,
  headerCellClass : ``,
  inputContainer : ``,
  inputCellClass : ``,
  data : {'Full name': ['', '']},
  placeholder : {'Full name': ['First', 'Last']},
  flex : [1, 1, 1]
};

export const NoFlex = Template.bind({});

NoFlex.args = {
  wrapperClass : ``,
  rowClass : ``,
  headerClass : ``,
  dataClass : ``,
  headerCellClass : ``,
  inputContainer : ``,
  inputCellClass : ``,
  data : {
    'Full name': ['', '']
  },
  placeholder : {'Full name': ['First', 'Last']},
  flex : []
};


