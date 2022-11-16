import React from 'react';
import VTable from './v-table';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/Vertical-Table',
  component: VTable,
  argTypes : {

  }
};

const Template = (args) => <VTable {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  wrapperClass : '',
  rowClass : 'border-b',
  headerClass : 'text-center bg-purple-200 rounded-2xl',
  bodyClass : '',
  headerCellClass : 'm-auto',
  inputContainer : 'flex group flex-1 border-gren-500 hover:bg-slate-200 hover:cursor-text focus-within:bg-slate-200 rounded-2xl',
  inputCellClass : 'p-1 resize-none bg-transparent text-center outline-none',
  data : {
    'col1' : [1, 2, 3], 
    'col2' : [2, 3, 4],
    'col3' : [3, 4, 5],
    'col4' : [4, 5, 6],
  },
  flex : [1, 5, 1, 1]
};

export const NoParams = Template.bind({});

NoParams.args = {

};

export const NoStyle = Template.bind({});

NoStyle.args = {
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
  flex : [1, 1, 1, 1]
};


export const NoStyleNoFlex = Template.bind({});

NoStyleNoFlex.args = {
  wrapperClass : '',
  rowClass : '',
  headerCellClass : '',
  inputCellClass : '',
  data : {
    'col1': [1, 2, 3], 
    'col2' : [2, 3, 4],
    'col3' : [3, 4, 5],
    'col4' : [4, 5, 6],
    
  },
  flex : []
};




