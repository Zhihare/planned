import React from 'react'
import { GoHistoryContainer, HistoryBody, HistoryHeader, HistoryItem } from './History.styled'
import { MdClose } from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectBackdrop } from '../redax/Tasks/tasksSelector';
import { useBackdropToggle } from '../../utils/togle';
import { selectActiveLogs } from '../redax/ActiveLog/activeSelector';
import { formatDate } from './../../utils/date';



const History: React.FC = () => {

    const activLog = useSelector(selectActiveLogs).slice().reverse();
    const backdrop = useSelector(selectBackdrop);
    const toggleActive = useBackdropToggle();
   
  const formatHistoryItem = (item: string) => {
     const regex = /@(\w+).*?@/g;
    return item.replace(regex, (match, username) => `<span>@${username}</span>`);
};
    

    return (
    <GoHistoryContainer className={`${backdrop ? 'active' : ''}`}>
            <HistoryHeader>
                <h2>History</h2>
                <button onClick={toggleActive}><MdClose /></button>
            </HistoryHeader>
            <HistoryBody>
                {activLog.map(item =>
                <HistoryItem key={item.id}>
                   <p dangerouslySetInnerHTML={{ __html: formatHistoryItem(item.action) }} />
                    <p>{formatDate(item.timestamp, 5)}</p>
                    </HistoryItem>
                    )}
            </HistoryBody>
    </GoHistoryContainer>
  )
}

export default History