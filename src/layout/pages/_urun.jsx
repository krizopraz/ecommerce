import axios from 'axios'
import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Heart from '../../components/Heart'
import BackArrow from '../../components/BackArrow'
import {NavLink} from 'react-router-dom'
const ProductSection = styled.section`
display:grid;
width:max-content;
grid-template-columns: 500px 500px;
padding:4rem;
border: #2B2D42 solid 1px ;
overflow:hidden;
border-radius:11px;
gap:1rem;
place-content:center;`
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
cursor:pointer;`
const Div = styled.div`
display:flex;
flex-direction:column;
&>*:not(first-child){
    margin-top:1rem;
}
`
const Wrap = styled.div`
display:grid;
&:not(first){
    place-content:center;
}
`
const _urun = () => {
    let slug = useParams()
    const [product,setProduct] = useState({})
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/'+slug.id).then((data)=>{setProduct(data.data)}).catch(err=>console.log(err))

    }, [])
    return(
      <Wrap>
        <NavLink to='/' ><BackArrow/>Geri</NavLink>
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
      </Wrap>
    )
}
export default _urun