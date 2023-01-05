import studentMess from '../../styles/studentMess.module.scss';

export default function MessageViewControls() {

    return (
        <div className={studentMess.messageViewControlContainer}>
            <form className={studentMess.messageViewControl}>
                <div className={studentMess.messageViewSubmitContainer}>
                    <button className={studentMess.messageViewSubmit}>
                        Delete Message
                    </button>
                </div>
                <div className={studentMess.showMessageDD}>
                    <div><p>Arr0</p></div>
                    <select name="showMessage" id="showMessage">
                        <option defaultValue="Show 5 Messages">Show 5 Messages</option>
                        <option value="Show 10 Messages">Show 10 Messages</option>
                        <option value="Show 15 Messages">Show 15 Messages</option>
                        <option value="Show 20 Messages">Show 20 Messages</option>
                    </select>
                    <div>
                        <p>Arr0</p>
                    </div>
                    <div className={studentMess.showMessagePageDisplay}>
                    <p>Page 1 of 3</p>
                    </div>
                </div>
            </form>
        </div>
    )
}