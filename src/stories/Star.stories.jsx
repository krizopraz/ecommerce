import React from 'react'
import Star from '../components/Star'
const Story = (args) => <Star {...args}/>

export default {
    title:'Components/Simple',
    component:Star
}

export const StarComponent = Story.bind({})
StarComponent.args = {
    filled:false
}