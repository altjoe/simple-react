import React from 'react';
import CompTest from './comp-test';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tables/CompTest',
  component: CompTest,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    class: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CompTest {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  class : 'border bg-slate-500'
};
