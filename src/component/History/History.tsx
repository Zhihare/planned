import React from 'react'
import { GoHistoryContainer, HistoryBody, HistoryHeader, HistoryItem } from './History.styled'
import { MdClose } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { selectBackdrop } from '../redax/Tasks/tasksSelector';
import { setBackdrop } from '../redax/Tasks/tasksSlice';



const History: React.FC = () => {
  
  const dispatch = useDispatch();
  const backdrop = useSelector(selectBackdrop);
  console.log(backdrop);

    const toggleActive = () => {
        if (backdrop) {
            dispatch(setBackdrop(false));
        } else {
            dispatch(setBackdrop(true));
        }
  }
    return (
      

    <GoHistoryContainer className={` ${backdrop? 'active' : ''}`}>
            <HistoryHeader>
                <h2>History</h2>
                <button onClick={toggleActive}><MdClose /></button>
            </HistoryHeader>
            <HistoryBody>
                <HistoryItem>
                    <p>You Added <span><CgEditBlackPoint />Post</span> in tasklist </p>
                    <p>wed, 15 Apr 9:28</p>
                </HistoryItem>
            </HistoryBody>
    </GoHistoryContainer>
  )
}

export default History