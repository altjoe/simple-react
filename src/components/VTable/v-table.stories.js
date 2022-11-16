import React from 'react';
import VTable from './v-table';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Split-Table/Vertical-Table',
  component: VTable,
  argTypes : {

  }
};

const Template = (args) => <VTable {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  wrapperClass : 'text-xs',
  rowClass : ' border-b',
  headerClass : 'text-center bg-blue-200 rounded-2xl',
  headerCellClass : 'm-auto',
  bodyClass : '',
  inputContainer : 'group border-gren-500 hover:bg-slate-200 hover:cursor-text focus-within:bg-slate-200 rounded-2xl',
  inputCellClass : 'p-1 resize-none bg-transparent text-center outline-none',
  data : {
    'col1' : [1, 2, 3], 
    'Description' : [2, 3, 4],
    'col3' : [3, 4, 5],
    'col4' : [4, 5, 6],
  },
  flex : [1, 2, 1, 1],
  flexbox : true
};

export const NoStyleFlexbox = Template.bind({});

NoStyleFlexbox.args = {
  wrapperClass : '',
  rowClass : '',
  headerClass : '',
  bodyClass : '',
  headerCellClass : '',
  inputCellClass : '',
  data : {
    'col1': [1, 2, 3], 
    'col2' : [2, 3, 4],
    'col3' : [3, 4, 5],
    'col4' : [4, 5, 6],
    
  },
  flex : [1, 1, 1, 1],
  flexbox : true
};


export const ScrollTable = Template.bind({});

ScrollTable.args = {
  wrapperClass : 'flex',
  rowClass : '',
  headerClass : 'flex-1',
  headerCellClass : 'flex-1',
  bodyClass : 'flex',

  inputContainer : '',
  inputCellClass : '',
  data : {
    'col1': [1, 2, 3, 1, 1, 1, 1], 
    'col2' : [2, 3, 4, 1, 1, 1, 1],
    'col3' : [3, 4, 5, 1, 1, 1, 1],
    'col4' : [4, 5, 6, 1, 1, 1, 1],
    
  },
  // flex : [1, 1, 1, 1],
  flexbox : false
};

export const NoParams = Template.bind({});

NoParams.args = {

};


