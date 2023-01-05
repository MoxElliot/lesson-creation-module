import instructorMess from '../../styles/instructorMess.module.scss';

export default function MessageViewSelect () {
    return (    
        <div className={instructorMess.radioContainer}>
            <form className={instructorMess.radioForm}>
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
            
            <div className={instructorMess.messageViewNewMessageContainer}>
                <button className={instructorMess.messageViewNewMessage}>
                    New Message
                </button>
            </div>
        </div>
    )
}