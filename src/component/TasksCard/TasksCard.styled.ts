import styled from "styled-components";


export const TasksCardContainer = styled.div`
border: solid 2px #dcdcdc;
border-radius: 10px;
padding: 25px 15px;

`

export const TasksCardHeader = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: space-between;

margin-bottom: 10px;


h3{
    font-weight: 500;
}


    button{
        display: flex;
        align-items: center;

        background-color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
        color: #000000;
    }

    button:hover{
        color: #7a7a7a;
    }

`

export const TasksCardBody = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;

margin-bottom: 20px;

li:nth-child(2n){
    display: flex;
    align-items: center;
    gap: 10px;

    svg{
        width: 20px;
        height: 20px;
    }
}

li:last-child{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 20px;
    width: 100%;

    background-color: #e6eff7;
    border-radius: 20px;
}

li:last-child::before{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #878787;
}

p{
    font-size: 16px;
    color: #a1a1a1;
        width: 290px;
}

`

export const TasksCardSelect = styled.select`
width: 100%;
height: 30px;
padding: 5px 10px;

border: none;
border-radius: 5px;
background-color: #cbd1d7;

font-size: 18px;
font-weight: 600;
`