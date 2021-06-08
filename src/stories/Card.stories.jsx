import React from 'react'
import Card from '../components/Card'
import '../index.css';
export default {
    title:'Components/Complex',
    component:Card,
}
const imgURL = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
price=109.95,
stars=[true,true,true,false,false]

const Story = (args)=> <Card {...args}/>
export const CardComponent = Story.bind({})
CardComponent.args = {
    imgURL,
    title,
    price,
    stars
}