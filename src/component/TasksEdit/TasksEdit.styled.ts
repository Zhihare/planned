import styled from "styled-components";

export const TasksEditContainer = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    border-radius: 20px;
    width: 90%;
    max-width: 1350px;
    
    height: 80%;
    z-index: 100;

    &&.active{
        display: block;
    }
`

export const TasksEditHeader = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 50px;
    padding-right: 20px;
    background-color: #5d6481;
    

    button{
        background-color: transparent;
        width: 30x;
        height: 30px;
        cursor: pointer;

        svg{
            width: 100%;
            height: 100%;
            color: #d9dae1;
        }

        &:hover{
            color: #ffffff;
        }
    }
    `

export const TasksEditBody = styled.div`
    display: flex;
    height: 100%;

    `


export const TasksEditForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border-bottom-left-radius: 20px;

    background-color: #ffffff;
    width: 65%;

    `

export const TasksEditHistory = styled.div`
    background-color: #f3f4f6;
    border-bottom-right-radius: 20px;
    width: 35%;
    height: 100%;
  
    
    `