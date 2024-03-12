import styled from "styled-components";

export const FlexDivWrapper = styled.div`
display: flex;
overflow-x: scroll;
width: 100%;
&::-webkit-scrollbar {
    display: none;
} 
;
`
export const CartImage = styled.img`
display: flex;
width: 5rem;
`

export const CartName = styled.div`
`
export const CartPrice = styled.div`
`

export const CartItem = styled.div`
display: flex;
align-items:Center;
gap: 1rem;
justify-content: space-between;
width: 30rem;
`