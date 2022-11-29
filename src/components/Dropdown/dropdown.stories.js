import React from 'react';
import Dropdown from './dropdown';
import { tw } from '../../utils';

// import 'react-datepicker/dist/react-datepicker.css'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dropdown/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Simple = Template.bind({});

Simple.args = {
    wrapperClass : ' border-4 bg-red-100 rounded-lg w-1/5 overflow-hidden',
    buttonClass : 'w-full bg-red-200 p-2',
    buttonLabel : 'Add New Job',

    listContainerClass : 'static list-none bg-red-100 w-full',
    optionContainerClass : 'p-2',
    optionLabelClass : '',
    

    options : ['Embroidery', 'Screen Print', 'Transfer'],
    optionClicked : {
        'Embroidery' : event => console.log('Embroidery'),
        'Screen Print' : event => console.log('Screen Print'),
        'Transfer' : event => console.log('Transfer')
    }
}