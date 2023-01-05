import studentLess from '../../styles/studentLess.module.scss';

export default function LessonViewSelect () {
    return (    
        <div className={studentLess.radioContainer}>
            <form className={studentLess.radioForm}>
                <label>
                    <input  type='radio'
                            value='Show All'
                    />
                    Show All
                </label>
                <label>
                    <input  type='radio'
                            value='Show Booked'
                    />
                    Show Booked
                </label>
                <label>
                    <input  type='radio'
                            value='Show Requested'
                    />
                    Show Requested
                </label>
                <label>
                    <input  type='radio'
                            value='Show Canceled'
                    />
                    Show Canceled
                </label>
            </form>
        </div>
    )
}