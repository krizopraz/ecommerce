import React from 'react'
import Star from '../components/Star'
import '../index.css';
const Story = (args) => <Star {...args}/>

export default {
    title:'Components/Simple/Star Component',
    component:Star
}

export const Basic = Story.bind({})
Basic.args = {
    filled:false
}