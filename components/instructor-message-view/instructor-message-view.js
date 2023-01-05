import instructorMess from '../../styles/instructorMess.module.scss';
import React from 'react';
import MessageViewSelect from './message-view-select';
import InstructormessageTable from './instructor-message-table';
import MessageViewControls from './message-view-controls';

export default function InstructorMessageView () {
    return (
      
            <div className={instructorMess.messageContainer}>
                <div className={instructorMess.viewSelect}>
                    <p className={instructorMess.messageViewSelectHeader}>Instructor Message View </p>
                    <MessageViewSelect />
                </div>
                <div className={instructorMess.messageTable}>
                    <InstructormessageTable />
                </div>
                <div className={instructorMess.messageControl}>
                    <MessageViewControls />
                </div>
            </div>
    )
}