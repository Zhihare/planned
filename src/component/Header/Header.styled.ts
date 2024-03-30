import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  h1{
    font-size: 32px;
  }
  `

export const ButtonContainer = styled.div`
display: flex;
gap: 20px;
`

export const HeaderButton = styled.button`
padding: 5px 10px;
border-radius: 5px;
border: 1px solid #eeeeee;
color: #ffffff;
background-color: #656596;

display: flex;
align-items: center;
gap: 5px;

&:first-child{
    background-color: #ffffff;
    color: #000000;
    
    svg{
    width: 15px;
    height: 15px;
}
}

&:first-child:hover{
    background-color: #d0d0d8;
}

&:hover{
  background-color: #8484b4;
}`