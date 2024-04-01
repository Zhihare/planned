import styled from "styled-components";



export const TasksListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

width: calc(100%/4);
min-width: 310px;
margin-top: 30px;



`


export const TasksListHeader = styled.div`
   position: relative;
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 0;
border-top: 1px solid #a1a1a1;
border-bottom: 1px solid #a1a1a1;

h2{
    font-size: 20px;
    font-weight: 500;
}

p{
    font-size: 20px;
    font-weight: 500;
}

`


export const TasksOptions = styled.div`
display: flex;
gap: 20px;


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


export const TasksListButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

font-size: 20px;
padding: 8px 0;
background-color: transparent;

border: 2px dashed #a1a1a1;
border-radius: 5px;

cursor: pointer;

&:hover{
    background-color: #d0d0d8;
    border: 2px solid #ffffff;
}

`

export const TaskListMenu = styled.div`
display: none;
position: absolute;
   right: -160px;
    bottom: -140px;

border: 1px solid #a1a1a1;
width: 180px;
border-radius: 10px;
padding: 20px 10px;

background-color: #ffffff;

z-index: 100;

ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

li{
    button{
        background-color: transparent;
         display: flex;
        gap: 5px;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
    }
}

li:last-child{
    button{
    color: red;
    }
}

&&.active{
    display: block;
}
`

export const TasksListList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;

`

export const TasklistForm = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;


    button{
        background-color: transparent;
        width: 20px;
        height: 20px;
        cursor: pointer;

        svg{
            width: 100%;
            height: 100%;
        }
    }

    input {
        font-size: 18px;
    }
`