var s=Object.defineProperty;var e=(t,a)=>s(t,"name",{value:a,configurable:!0});import{B as r}from"./Button.96287346.js";import{j as i}from"./jsx-runtime.871b4a04.js";import"./iframe.381d627f.js";const B={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    isDisabled: { control: 'boolean' }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = arguments_ => (
  <Button {...arguments_} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  appearance: 'primary',
  size: 'default'
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  appearance: 'secondary'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  appearance: 'warning'
};

export const Super = Template.bind({});
Super.args = {
  ...Primary.args,
  size: 'super'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  size: 'full'
};
`,locationsMap:{primary:{startLoc:{col:48,line:18},endLoc:{col:1,line:20},startBody:{col:48,line:18},endBody:{col:1,line:20}},secondary:{startLoc:{col:48,line:18},endLoc:{col:1,line:20},startBody:{col:48,line:18},endBody:{col:1,line:20}},warning:{startLoc:{col:48,line:18},endLoc:{col:1,line:20},startBody:{col:48,line:18},endBody:{col:1,line:20}},super:{startLoc:{col:48,line:18},endLoc:{col:1,line:20},startBody:{col:48,line:18},endBody:{col:1,line:20}},"full-width":{startLoc:{col:48,line:18},endLoc:{col:1,line:20},startBody:{col:48,line:18},endBody:{col:1,line:20}}}}},title:"Components/Button",component:r,argTypes:{appearance:{control:"select"},size:{control:"select"},isDisabled:{control:"boolean"}}},n=e(t=>i(r,{...t}),"Template"),o=n.bind({});o.args={label:"Button",appearance:"primary",size:"default"};const l=n.bind({});l.args={...o.args,appearance:"secondary"};const c=n.bind({});c.args={...o.args,appearance:"warning"};const p=n.bind({});p.args={...o.args,size:"super"};const d=n.bind({});d.args={...o.args,size:"full"};const b=["Primary","Secondary","Warning","Super","FullWidth"];export{d as FullWidth,o as Primary,l as Secondary,p as Super,c as Warning,b as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories.6315f14f.js.map
