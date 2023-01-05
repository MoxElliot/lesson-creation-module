import React, { useState, useEffect} from 'react';
import InstCalandarDay from './instCal-day';
import LessonEditControl from '../lesson-controls/lesson-edit-control';
import LessonCreateControl from '../lesson-controls/lesson-create-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonth, advanceYear, makeToday } from '../../redux/slices/weekNavSlice'
import { showEditLesson, showCreateLesson } from '../../redux/slices/lessonControlSlice'



const weekDaysArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthArr =['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
let dispatchCheck = 0

const InstCalandarView = () => {

    const editLesson = useSelector(state => state.lessonControl.editLesson)
    const createLesson = useSelector(state => state.lessonControl.createLesson)

    const dispatch = useDispatch()

    const handleEditLesson = (e) => {
        e.preventDefault()
        dispatch(showCreateLesson(false))
        dispatch(showEditLesson(true))
        console.log("in handle instructor-calendar-view", editLesson)
    }

    const handleCreateLesson = (e) => {
        e.preventDefault()
        dispatch(showCreateLesson(true))
        dispatch(showEditLesson(false))
        console.log("in create handle instructor-calendar-view", createLesson)
    }

    const baseDay = useSelector(state => state.weekNav.baseDay)
    const month = useSelector(state => state.weekNav.month)
    const year = useSelector(state => state.weekNav.year)
    

   
    
    const d = new Date();
    const dayNum = d.getDay()
    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    const daysInMonth = (m) => {
        return getDaysInMonth(year, m + 1, 0)
    }

    useEffect(() => {
        if(baseDay > daysInMonth(month) && dispatchCheck > 0){ //month is accurate
            dispatch(advanceMonth(1));
            dispatch(advanceYear(1));
            dispatchCheck=0;
        } 
    });
    
    const weekDays = weekDaysArr.map((day) => {
   
        const dayOfWeek = () => {
            const dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)

            if (weekDaysArr.indexOf(day) === dayNum) {  // For today
                let today = baseDay 
                if(today > daysInMonth(month)) {
                    today -= daysInMonth(month)
                }

                return today
            } else if (weekDaysArr.indexOf(day) > dayNum || baseDay > daysInMonth(month)) {  //For all days ahead of today
                let daysAhead = dateAdjust
                if (daysAhead > daysInMonth(month)) { //At the end of the month when the days ahead of today are in the next month
                    daysAhead = daysAhead - daysInMonth(month) //the month is accurate

                    return daysAhead
                }
                return daysAhead
            } else if (weekDaysArr.indexOf(day) < dayNum || baseDay < 0  ) { //For all days behind today
                let daysBehind = dateAdjust

                if (daysBehind <= 0) { //At the beginning of the month when the days behind today are in the last month 
                    daysBehind += daysInMonth(month-1) //the month is accurate so last month is -1

                    return daysBehind
                }
                return daysBehind
            }
        
        }
       
        

        return (
            <div 
            className="day-container 
                col-md-3 col-xl"
            key={day.toString()}
            >
            <div className="day-date-label 
                d-flex justify-content-center 
                badge bg-primary fs-6">
               {day} {dayOfWeek()}
            </div>
            
            <InstCalandarDay handleEditLesson={handleEditLesson} />
            
            </div>)
        }
        
        );
   
    return (
        <div className="app 
            container py-3
            d-flex-column justify-content-center align-items-center
            ">
            
            <div className="calendar-date-slider 
                row-12 
                d-flex justify-content-center">
                <div className="col col-lg-1 col-sm-2 
                    d-flex justify-content-end">
                    <button className='arrow-button
                        btn btn-secondary fs-4 fw-bold
                        p-0 m-0'
                        onClick={() =>{
                            dispatch(lastWeek())
                            dispatchCheck = -1;
                            return dispatchCheck;
                            }}
                    >
                        <i className="bi bi-caret-left-fill"></i>
                    </button>
                </div>
                <div className="calandar-date-label
                        col-1 col-lg-2 col-md-3 col-4 fs-5 fs-md-3
                        d-flex justify-content-center align-items-center 
                        badge bg-primary">
                    <p className='m-0'>
                        {monthArr[month]} {year}
                    </p>
                </div>
                <div className='col col-lg-1 col-sm-2 
                    d-flex justify-content-start'>
                    <button className='arrow-button
                        btn btn-secondary fs-4 fw-bold
                        p-0 m-0
                        d-flex-column align-items-center '
                            onClick={() =>{
                                dispatch(nextWeek(7));
                                dispatchCheck = 1;
                                return dispatchCheck;
                                }}
                        >
                        <i className="bi bi-caret-right-fill"></i> 
                    </button>
                </div>
            </div>
            <div className='today-button container'>
                <div className='row-12 d-flex align-items-center justify-content-center'>
                    <button className='btn btn-secondary 
                        fs-6 fw-bold'
                                onClick={() =>{
                                    dispatch(makeToday());
                                }}
                        >
                        Today
                    </button>
                </div>
            </div>
            <div className='calendar-container 
                row overflow-auto 
                d-flex justify-content-center'>
                    {weekDays}
            </div>
            <div className="calendarControlContainer container">
                <div 
                    className='btn-group lessonControlToggle'
                    role="group"
                    aria-label="Basic radio toggle button group"
                >
                    <input 
                        className='btn-check p-1 m-1'
                        type="radio"
                        name="toggleCreate"
                        id="toggleCreate"
                        autoComplete='off'
                        onClick={handleCreateLesson}
                    />
                    <label 
                        className='btn btn-primary'
                        for="toggleCreate"
                    >
                        Create Lesson
                    </label>
                    <input 
                        className='btn-check p-1 m-1'
                        type="radio"
                        name="toggleEdit"
                        id="toggleEdit"
                        autoComplete='off'
                        onClick={handleEditLesson}
                    />
                    <label 
                        className='btn btn-primary'
                        for="toggleEdit"
                    >
                        Edit Lesson
                    </label>
                </div>    
                <LessonEditControl editLesson={editLesson}/>
                <LessonCreateControl createLesson={createLesson}/>   
            </div>
        </div>
        )
    }

export default InstCalandarView