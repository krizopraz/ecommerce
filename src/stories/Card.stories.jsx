import React from 'react'
import Card from '../components/Card'

export default {
    title:'Components/Complex/Card',
    component:Card,
}
const url = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
price=109.95,
stars=[true,true,true,false,false]

const Story = (args)=> <Card {...args}/>
export const Main = Story.bind({})
Main.args = {
    imgURL:url,
    productName:title,
    price:price
    ,stars:stars
}