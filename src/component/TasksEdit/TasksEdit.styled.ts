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
    padding: 50px;
    border-bottom-left-radius: 20px;

    background-color: #ffffff;
    width: 65%;

    `

export const NameSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;

    input{
        margin: 2px;
        letter-spacing: -0.7px;
        font-size: 32px;
        font-weight: 600;
    }

`

export const StatusSection = styled.div`
display: flex;
margin-bottom: 20px;
width: 100%;
gap: 100px;
margin-bottom: 30px;
justify-content: flex-start;
letter-spacing: -1px;


label{
    display: flex;
    align-items: center;
    gap: 10px;
    width: 110px;
    font-size: 16px;
    color: #8a8a8a;
    font-weight: 600;
}

input{
    font-size: 16px;
    font-weight: 600;
    
}

select{
    margin: 4px;
    font-size: 16px;
    font-weight: 600;
    
    width: 150px;
}

`

export const DescriptionSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 20px;
justify-content: flex-start;


label{
    width: 100px;
    font-size: 25px;
    font-weight: 700;
}

textarea{
    width: 100%;
    height: 200px;
    font-size: 16px;
    color: #8a8a8a;
    resize: none;
    margin: 2px;
    letter-spacing: -1px;
}
`


export const TasksEditHistory = styled.div`
    background-color: #f3f4f6;
    border-bottom-right-radius: 20px;
    width: 35%;
    height: 100%;
    padding: 50px;
    

  h2{ 
    width: 100%;
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.7px;
  }


    
    `