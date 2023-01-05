import React from 'react';


const lessonDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const repeatOptArr = ['Daily', 'Weekly', 'Monthly', 'None'];

export default function LessonCalControl () {
    const lessonData = useSelector((state) => state.lessonData)
    const lessonDayRadio = lessonDayArr.map(day=> {
      
        return (
                    <label className="lesson-control-radio" key={day.toString()} >
                        {day}
                        <input type="radio" id="dayRad" />
                    </label>
              
                );
        });

        const repeatOptRadio = repeatOptArr.map(option=> {
      
            return (
                        <label className="lesson-control-radio" key={option.toString()} >
                            {option}
                            <input type="radio" id="optRad" />
                        </label>
                  
                    );
            });
    return (
        <div className="lessonControl">
            <form id="lessonControlEle">
                <p id="lessonControlP">Set New Lesson Date -or- Select New Lesson Day</p>
                <div className='lesson-date-input 
                    container 
                    d-flex-column justify-content-center align-items-center'>
                    <div className="row w-50" >        
                    <input type="date" name="lesson-date" />
                    </div>
                    <div>
                        {lessonDayRadio}
                    </div>
                </div>
            </form>
            <form id="lessonControlEle">
                <p  id="lessonControlP">Repeat Lesson</p>
                {repeatOptRadio}
            </form>
            <div className="lessonControlBottom">
                <form className="lessonControlBtn" id="lessonControlEle">
                    <button className='btn btn-primary'>Create Lessson</button>
                </form>
                <form id="lessonControlEle" > 
                    <label className="studentSelect" id="lessonControlP">
                        <input type="checkbox" />
                        Only Available to:
                    </label>
                        <input type="text" placeholder='Student Name'/>
                </form>
            </div>
        </div>
    )
}