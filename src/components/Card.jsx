import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Star from './Star'
const CardWrapper = styled.article`
    height:330px;
    width:250px;
    padding:1rem;
    border: #8D99AE solid 1px ;
    overflow:hidden;
    border-radius:11px;
    display:flex;
    align-content:center;
    justify-content:center;
    flex-direction:column;
    & > *{
        margin-top:1rem;
    }
`
const Img = styled.img`
    height:200px;
    width:100%;
    object-fit:contain;
`
const Stars = styled.div`
display:inline;`
const Content = styled.div`
display:flex;
width:200px;
justify-content:space-between;`
const Figure = styled.figure`
display:grid;
width:100%;
place-content:center;
text-align:center;
& > figcaption{
    margin-top:.4rem;
}
`
const Card = ({imgURL,productName,price,stars})=>{
    return(
        <CardWrapper>
            <header>
                <Figure>
                    <Img src={imgURL} />
                    <figcaption><h3>{productName}</h3></figcaption>
                </Figure>
            </header>
            <Content>
                <Stars>
                    {stars.map(star=><Star key={Math.random()} filled={star} />)}
                </Stars>
                <i>{price} TL</i>

            </Content>
        </CardWrapper>
    )
}
Card.propTypes = {
    imgURL: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.array.isRequired,
    }

export default Card