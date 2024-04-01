import styled from "styled-components";


export const GoHistoryContainer = styled.div`
display: none;
position: absolute;
top: 0;
right: 0;

width: 450px;
height: 100vh;
z-index: 100;
background-color: #f3f4f6;

&&.active{
    display: block;
}
`

export const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  background-color: #5d6481;
  color: #b5b8c5;


  button{
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: #b5b8c5;
        
    svg{
        width: 30px;
        height: 30px;
    };
  }
`

export const HistoryBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow: hidden;
  overflow-y: scroll;

  gap: 30px;
  margin-bottom: 50px;
  padding: 40px 50px;


  &.historyTask{
    padding: 0;
  }
  `


export const HistoryItem = styled.li`
display: flex;
flex-direction: column;
gap: 8px;

p:first-child{
    font-size: 18px;
    color: #a5a9b9;

        span{
        color: #000000;
        margin: 0 5px;
    }
}


p:last-child{
    color: #a5a9b9;
    font-style: italic;
}
`