import studentMess from '../../styles/studentMess.module.scss';

export default function MessageViewSelect () {
    return (    
        <div className={studentMess.radioContainer}>
            <form className={studentMess.radioForm}>
                <label>
                    <input  type='radio'
                            value='Show All'
                    />
                    Show All
                </label>
                <label>
                    <input  type='radio'
                            value='Show Unread'
                    />
                    Show Unread
                </label>
                <label>
                    <input  type='radio'
                            value='Show Read'
                    />
                    Show Read
                </label>
            </form>
            
            <div className={studentMess.messageViewNewMessageContainer}>
                <button className={studentMess.messageViewNewMessage}>
                    New Message
                </button>
            </div>
        </div>
    )
}