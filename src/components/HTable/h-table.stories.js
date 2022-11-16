import React from 'react';
import HTable from './h-table';
import { tw } from '../../utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/Horizontal-Table',
  component: HTable,
};

const Template = (args) => <HTable {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  wrapperClass : 'text-center ',
  rowClass : 'group flex-col md:flex-row landscape:flex-row',
  dataContainer : tw('flex-col md:flex-row', 
                     'group py-2 md:p-0'),
  headerClass : tw('bg-green-200 p-2',
                   'group-first:rounded-t-xl group-last:rounded-b-xl',
                   'rounded-xl landscape:rounded-none'),
  headerCellClass : 'self-center',
  inputContainer : 'border-b',
  inputCellClass : tw('resize-none outline-none text-center rounded-xl p-1',
                      ''),
  data : {
    'Name': [''],
    'Email': ['']
  },
  placeholder : {
    'Name': ['First Last'],
    'Email': ['test@gmail.com']
  },
  headerflex : [1, 2.5],
  bodyflex : [1]
};


export const NoParams = Template.bind({});

NoParams.args = {

};

export const NoStyle = Template.bind({});

NoStyle.args = {
  wrapperClass : '',
  rowClass : '',
  dataContainer : '',
  headerClass : '',
  headerCellClass : '',
  inputContainer : '',
  inputCellClass : '',
  data : {'Full name': ['', '', '']},
  placeholder : {'Full name': ['First', 'Middle', 'Last']},
  headerflex : [1, 2.5],
  bodyflex : [1, 1, 1]
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


