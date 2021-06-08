import React from 'react'
import styled from 'styled-components'
import Heart from '../components/Heart'
import BackArrow from '../components/BackArrow'
const ProductSection = styled.section`
display:grid;
place-self:center;
width:max-content;
grid-template-columns: 20vw 20vw;
padding:4rem;
border: #2B2D42 solid 1px ;
overflow:hidden;
border-radius:11px;
gap:1rem;
`
const Img = styled.img`
object-fit:contain;
height:60vh;
`
const Button = styled.button`
background:#2B2D42;
color:white;
border-radius:11px;
border:none;
padding:1rem;
text-transform:uppercase;
`
const Div = styled.div`
display:flex;
flex-direction:column;
&>*:not(first-child){
    margin-top:1rem;
}
`
const Back = styled.a`
font-size:2rem;
`
const _urun = () => {
    let product = {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}
    return(
      <>
            <Back><BackArrow/>Geri</Back>
        <ProductSection>
            <div>
                <Img src={product.image} alt="" />
            </div>
            <Div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <Button>Sepete Ekle</Button>
                <Heart />
            </Div>
        </ProductSection>
      </>
    )
}
export default {
    title:'Component/Pages',
    component:_urun
}
export const UrunComponent = _urun.bind({})