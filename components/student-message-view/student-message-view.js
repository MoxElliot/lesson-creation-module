import studentMess from '../../styles/studentMess.module.scss';
import React from 'react';
import MessageViewSelect from './message-view-select';
import StudentMessageTable from './student-message-table';
import MessageViewControls from './message-view-controls';


export default function StudentMessageView () {
    return (
      
            <div className={studentMess.messageContainer}>
                <div className={studentMess.viewSelect}>
                    <p className={studentMess.messageViewSelectHeader}> Student Message View </p>
                    <MessageViewSelect />
                </div>
                <div className={studentMess.messageTable}>
                    <StudentMessageTable />
                </div>
                <div className={studentMess.messageControl}>
                    <MessageViewControls />
                </div>

            </div>
    )
}