import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addLesson } from '../../redux/slices/lessonDataSlice'
import LessonCreateAttachment from './lesson-create-attachment';
import { clearLessonAttachmentList, toggleAttachClear, setAttachementList } from '../../redux/slices/lessonControlSlice';

// const lessonDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

export default function LessonCreateControl () {
    const dayjs = require('dayjs')
    const createLesson = useSelector(state => state.lessonControl.createLesson)
    const attachArray = useSelector(state => state.lessonControl.lessonAttachmentList)
  
    const [date, setDate] = useState('');
    // const [day, setDay] = useState('');  //used for eventual repeat lesson by day of weekfeature //
    const [toggleRepeat, setToggleRepeat] = useState(false)
    const [repeat, setRepeat] = useState(0);
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [attachment, setAttachment] = useState([]);
    const [status, setStatus] = useState('Available');
    const [link, setLink] = useState('Discord');
    const [isRepeatChecked, setIsRepeatChecked] = useState(false);
    const [isAvailChecked, setIsAvailChecked] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        setAttachment(attachArray)
        
    }, [attachArray])

    
    const onDateChange = e => setDate(e.target.value);
    const onToggleRepeatChange = (e) => {
        setToggleRepeat(!toggleRepeat);
        setIsRepeatChecked(e.target.checked)
        if (toggleRepeat === true) {
            document.getElementById("lessonRepeat").disabled=true;
            // document.getElementById("repeatDaySelect").hidden=true //used for eventual repeat lesson by day of weekfeature //
        } else {
            document.getElementById("lessonRepeat").disabled=false
            // document.getElementById("repeatDaySelect").hidden=false //used for eventual repeat lesson by day of weekfeature //
        }
    }
    const onRepeatChange = e => setRepeat(e.target.value);
    const onTimeChange = e => setTime(e.target.value);
    const onNameChange = e => setName(e.target.value);
    const onDetailChange = e => setDetail(e.target.value);
    const onAttachmentChange = () => setAttachment(lessonAttachmentList);
    const onStatusChange = (e) => {
        setStatus("Booked");
        setIsAvailChecked(e.target.checked);
    }
  
    const onCreateLessonClick = (e) => {
        e.preventDefault();
       
        for (let i = 0; i <= repeat; i++){
        dispatch(
            addLesson({
                id:nanoid(),
                date: date,
                // day, //used for eventual repeat lesson by day of weekfeature //
                // repeat, //used for eventual repeat lesson by day of weekfeature //
                time: time,
                status: status,
                detail: detail,
                attachment: attachment,
                name: name,
                link: link
            })
        )
        const d = 7
        let repeatDate = dayjs(date).add(d, 'd')
        const {$y, $M, $D} = repeatDate
        date =  $y + "-" + ($M+1) +"-" + $D
        }
        
        setDate('');
        // setDay('') //used for eventual repeat lesson by day of weekfeature //
        setRepeat(0);
        setTime('');
        setName('');
        setDetail('');
        setAttachment([]);
        setStatus('Available');
        setLink('Discord');
        setIsAvailChecked(false);
        setIsRepeatChecked(false);
        setToggleRepeat(false);
        setIsRepeatChecked(false);
        dispatch(clearLessonAttachmentList([]));
        dispatch(toggleAttachClear(true));
    }

    if(!createLesson){
        return null;
    }
    //used for eventual repeat lesson by day of weekfeature // 
    // const lessonDayRadio = lessonDayArr.map((dayOfWeek, i)=> (
    //                 <label 
                        
    //                     className="lesson-control-radio" 
    //                     id="repeatDaySelect"
                        
    //                     key={dayOfWeek.toString()} >
    //                     {dayOfWeek}
    //                     <input 
    //                         type="radio" 
    //                         id="dayRad"
    //                         name="dayRad"
    //                         value={i}
    //                         onChange={onDayChange} 
    //                         />
    //                 </label>
              
    //         ));
    return (
        <div className='lesson-create-control'>
            <div className="lesson-control-left col mx-2">
                <h4 className="lesson-text">
                    Create Lesson
                </h4>
                <form className="lesson-control-left__form" method="post" encType="multipart/form-data">
                    <div className='lesson-control-left__date'>
                        <label className="lesson-control-left__date-label">
                            Lesson Date: 
                        </label>
                        <input 
                            type="date" 
                            name="lesson-date"
                            id="lesson-date"
                            value={date}
                            onChange={onDateChange} 
                        />  
                    </div>

                    <div className='lesson-control-left__time'>
                        
                        <label className="lesson-control-left__time-label">
                            Set New Lesson Time
                        </label>
                            
                        <input 
                            type="time" 
                            name="lesson-time"
                            id="lesson-time"
                            value={time}
                            onChange={onTimeChange} 
                        />
                    </div>
                
                    <div className='lesson-control-left__repeat'>
                        <input 
                                className='lesson-control-left__repeat-checkbox' 
                                name="repeatLesson"
                                checked={isRepeatChecked}
                                value={toggleRepeat}
                                onChange={onToggleRepeatChange}
                                type="checkbox"
                        />
                        <label className='lesson-control-left__repeat-label'>
                        Weeks to repeat lesson:
                        </label>
                        <input 
                            disabled
                            size="4"
                            id="lessonRepeat"
                            name="lessonRepeat"
                            value={repeat}
                            onChange={onRepeatChange}
                        />
                    </div>
                    {/* <div className='mx-5' id="repeatDaySelect" hidden>
                        {lessonDayRadio}
                        </div> * used for eventual repeat lesson by day of weekfeature */}
                    <div className="lesson-control-left__name">
                        <input 
                            type="checkbox" 
                            className='lesson-control-left__name-checkbox'
                            name="lessonStatus"
                            checked={isAvailChecked}
                            onChange={onStatusChange}
                        />
                        <label className='lesson-control-left__name-label '>Only Available to:</label>
                        <input 
                            type="text" 
                            placeholder='Student Name'
                            id="studentName"
                            name="studentName"
                            className='studentName mx-3'
                            value={name}
                            onChange={onNameChange}
                        />
                    </div>
                </form> 
                <div className="lessonControlBtn col">
                    <button 
                        className='btn btn-primary'
                        id="lessonSubmit"
                        name="lessonSubmit"
                        onClick={onCreateLessonClick}
                    >
                        Create Lessson
                    </button>
                </div> 
            </div>

            <div className='lesson-control-right col'>
                
                <form className='lesson-control-right__form'>
                    <p className='lesson-control-right__details-label'>Lesson Details</p>
                    <textarea 
                        rows="3"
                        cols="30"
                        name="lessonDetail"
                        value={detail}
                        onChange={onDetailChange}
                    />
                </form>

                <div className='row'>
                    <LessonCreateAttachment
                        onChange={onAttachmentChange}
                        lessonAttachment={[]}/>
                </div>

            </div>
        </div>
    )
}