import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Star from '../../components/Star'
const CardWrapper = styled.div`

`
const Img = styled.img`

`
const Stars = styled.div``
const Content = styled.div``
const Card = ({imgURL,productName,price,stars})=>{
    return(
        <CardWrapper>
            <header>
                <figure>
                    <Img data-testid='image' src={imgURL} />
                    <figcaption><h3 data-testid='productname' >{productName}</h3></figcaption>
                </figure>
            </header>
            <Content>
                <Stars data-testid='stars'>
                    {stars.map(star=><Star key={Math.random()} filled={star} />)}
                </Stars>
                <h4 data-testid='price' >{price} TL</h4>

            </Content>
            <footer>

            </footer>
        </CardWrapper>
    )
}
Card.propTypes = {
    imgURL: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.array.isRequired,
    }

import {render, screen} from '@testing-library/react'
describe('Card Tests - Image/Name/Price', () => {
    const url = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price=109.95,
    stars=[true,true,true,false,false]

    beforeEach(()=>{
        render(<Card 
            imgURL= {url}
            productName={title}
            price={price}
            stars={stars}
            />)
    })
    it('Has image',()=>{
        const image = screen.getByTestId('image').getAttribute('src')
        expect(image).toBe(url)
    })
    it('Has Title',()=>{
        const product = screen.getByTestId('productname').innerHTML
        expect(product).toBe(title)
    })
    it('Has Price',()=>{
        const price = screen.getByTestId('price').innerHTML
        expect(price).toBe('109.95 TL' )
    })
    it('Has Stars',()=>{
        const stars = screen.getByTestId('stars').innerHTML
        expect(stars).toBeTruthy()
    })
    it.todo('It directs')
})
