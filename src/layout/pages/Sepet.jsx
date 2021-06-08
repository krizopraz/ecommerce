import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const SepetWrapper = styled.section``
const Sepet = ({inSepet})=>{
    return(
        <SepetWrapper>
            <table>
                <thead>
                    <td>Ürün Adı</td>
                    <td>Ürün Adedi</td>
                    <td>Ürün Fiyatı</td>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <td colSpan='2'>Toplam tutar</td>
                    <td>{inSepet} Tl</td>
                </tfoot>
            </table>

        </SepetWrapper>
    )
}
Sepet.propTypes = {
    inSepet:PropTypes.array.isRequired
}
export default Sepet