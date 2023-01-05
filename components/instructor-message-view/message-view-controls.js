import instructorMess from '../../styles/instructorMess.module.scss';

export default function MessageViewControls() {

    return (
        <div className={instructorMess.messageViewControlContainer}>
            <form className={instructorMess.messageViewControl}>
                <div className={instructorMess.messageViewSubmitContainer}>
                    <button className={instructorMess.messageViewSubmit}>
                        Delete Message
                    </button>
                </div>
                <div className={instructorMess.showMessageDD}>
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
                    <div className={instructorMess.showMessagePageDisplay}>
                    <p>Page 1 of 3</p>
                    </div>
                </div>
            </form>
        </div>
    )
}