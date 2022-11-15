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
  headerCellClass : '',
  inputCellClass : 'bg-transparent resize-none text-center hover:bg-slate-200 focus:bg-slate-200 rounded-2xl outline-none ',
  data : {
    'col1': [1, 2, 3], 
    'col2' : [2, 3, 4],
    'col3' : [3, 4, 5],
    'col4' : [4, 5, 6],
    
  },
  flex : [1, 5, 1, 1]
};

export const NoParams = Template.bind({});

NoParams.args = {

};


