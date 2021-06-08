import React from 'react'
import Card from '../../components/Card'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.section`
display:grid;
grid-template-columns:repeat(auto-fit,250px);
gap:1rem;
padding:1rem;
a{
    color:black;
    text-decoration:none;
}
`

const Urunler = ({products})=>{
    return(
        <Section>
            {products.map(product=><Link to={'/'+product.id} key={product.id}>
                <Card
                    imgURL={product.image}
                    price={product.price}
                    title={product.title} stars={[true,true,true,true,true]}
                                     />
            </Link>)}
        </Section>
    )
}
Urunler.propTypes = {
    products: PropTypes.array.isRequired
}

export default Urunler