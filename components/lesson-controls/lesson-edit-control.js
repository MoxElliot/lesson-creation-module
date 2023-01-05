import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelLesson, editLessonData } from '../../redux/slices/lessonDataSlice';
import { setAttachementList } from '../../redux/slices/lessonControlSlice';
import LessonEditAttachment from './lesson-edit-attachment';
import { nanoid } from '@reduxjs/toolkit';
import validator from 'validator';

// https://us06web.zoom.us/j/83072918518?pwd=L0dacTNUaXhwcUFJeFZUaThkUWFUUT09

export default function LessonEditControl() {

    const singleLessonData = useSelector(state => state.lessonData.singleLessonData);
    const lessonData = useSelector(state => state.lessonData.lessonData);
    const editLesson = useSelector(state => state.lessonControl.editLesson);
    const lessonAttachmentList = useSelector(state => state.lessonControl.lessonAttachmentList)

    const [isEditOn, setIsEditOn] = useState(false);
    const [ lessonComment, setLessonComment ] = useState(singleLessonData[4]);
    const [ lessonName, setLessonName ] = useState(singleLessonData[6]);
    const [ lessonStatus, setLessonStatus ] = useState(singleLessonData[3]);
    const [ lessonDate, setLessonDate ] = useState(singleLessonData[1]);
    const [ lessonTime, setLessonTime ] = useState(singleLessonData[2]);
    const [ lessonLink, setLessonLink ] = useState(singleLessonData[7]);
    const [ lessonAttachment, setLessonAttachment ] = useState(singleLessonData[5]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const dispatch = useDispatch();

    const validate = (value) => {
        if(validator.isURL(value)) {
            setErrorMessage('URL is Valid');
            setLessonLink(value);
        } else {
            setErrorMessage('URL is not Valid');
        }
    };
    
    useEffect(() => {
        setLessonComment(singleLessonData[4])
        setLessonName(singleLessonData[6])
        setLessonStatus(singleLessonData[3])
        setLessonDate(singleLessonData[1]);
        setLessonTime(singleLessonData[2]);
        setLessonLink(singleLessonData[7]);
        setLessonAttachment(singleLessonData[5]);
        dispatch(setAttachementList(singleLessonData[5]))
    }, [singleLessonData])

    useEffect(() => {
       setLessonAttachment(lessonAttachmentList)
    }, [lessonAttachmentList])

    
    const handleCancelLesson = () => {
        const index = lessonData.findIndex(item => item.id === singleLessonData[0])
        dispatch(cancelLesson(index))
    };

    const handleValidateLessonLink = (link) => {
        validate(link);

    }

    const handleEditLessonData = () => {

        const index = lessonData.findIndex(item => item.id === singleLessonData[0])
        let newOb = {lessonIndex: index, selectedLesson:[...singleLessonData]}
        newOb.selectedLesson[4] = lessonComment
        newOb.selectedLesson[6] = lessonName
        newOb.selectedLesson[3] = lessonStatus
        newOb.selectedLesson[1] = lessonDate
        newOb.selectedLesson[2] = lessonTime
        newOb.selectedLesson[7] = lessonLink
        newOb.selectedLesson[5] = lessonAttachmentList
        dispatch(editLessonData(newOb))
        setIsEditOn(!isEditOn)
    }

    if(!editLesson){
        return null;
    } 
    
    if(singleLessonData === "Select a Lesson") {
        return (
            <div className="lesson-detail-container container">
                <p> Select a Lesson to Edit...</p>
            </div>
        )
    } else {
        return (
        <>
            { isEditOn ? 
            (
                <div className="lesson-detail-container__edit-on container">
                    <div className='row'>
                        <div className= 'col'>
                            <div className='lesson-text col'>
                                <h4>Lesson Details</h4>
                                <label className='lesson-text-input'>
                                    Details:
                                    <textarea 
                                        type='text'
                                        rows="3"
                                        cols="30" 
                                        className='lesson-detail'
                                        value={lessonComment}
                                        onChange={(e) => {
                                            setLessonComment(e.currentTarget.value);
                                        }}
                                    />
                                </label>
                                <label className='lesson-text-input'>
                                    Name:
                                    <input 
                                        type='text' 
                                        className='lesson-detail'
                                        value={lessonName}
                                        required
                                        onChange={(e) => {
                                            setLessonName(e.currentTarget.value);
                                        }}
                                    />
                                </label>
                                <label 
                                    className='lesson-text-input'
                                    htmlFor='status-select'>
                                    Status:
                                    <select 
                                        id='status-select'
                                        name='status-select' 
                                        className='lesson-detail'
                                        value={lessonStatus}
                                        required
                                        onChange={(e) => {
                                            setLessonStatus(e.currentTarget.value);
                                        }}
                                    >
                                        <option  
                                            defaultValue
                                            style={{display:"none"}}
                                            >
                                                -- Select a Status --
                                            </option>
                                        <option value='Available'>Available</option>
                                        <option value='Booked'>Booked</option>
                                        <option value='Requested'>Requested</option>
                                        <option value='Canceled'>Canceled</option>
                                    </select>
                                </label>
                                <label className='lesson-text-input'>
                                    Date:
                                    <input 
                                        type='date' 
                                        className='lesson-detail'
                                        value={lessonDate}
                                        required 
                                        onChange={(e) => {
                                            setLessonDate(e.currentTarget.value);
                                        }}   
                                    />
                                </label>
                            
                                <label className='lesson-text-input'>
                                    Time:
                                    <input 
                                        type='time' 
                                        className='lesson-detail'
                                        value={lessonTime}   
                                        required
                                        onChange={(e) => {
                                            setLessonTime(e.currentTarget.value);
                                        }} 
                                    />
                                </label>
                                <label className='lesson-text-input'>
                                    Link:
                                    <input 
                                        type='text'
                                        className='lesson-detail'
                                        value={lessonLink}
                                        onChange={(e) => {
                                            handleValidateLessonLink(e.currentTarget.value)
                                        }}
                                    />
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}>
                                        {errorMessage}
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className='lesson-attachment col col-4'>
                            <LessonEditAttachment
                                lessonAttachment={lessonAttachmentList}
                            />
                        </div>
                    </div>
                    <div className="lesson-detail__buttons">
                        
                            <button 
                                className='lesson-buttons 
                                btn btn-primary'
                                onClick = {handleEditLessonData}
                            > 
                                <label className='bi bi-pencil px-2'>Save</label>
                            </button>
                        
                        
                            <button className='lesson-buttons 
                                btn btn-primary'
                                onClick = {() => setIsEditOn(!isEditOn)}
                                >
                                <label className='bi bi-trash px-2'>Cancel</label>
                            </button>
                        
                        
                    </div>
                </div> 
            ) : 
            (
                <div className="lesson-detail-container__edit-off container">
                    <div className='row'>
                        <div className='lesson-text col col-md-6 col-12'>
                            <h4>Lesson Details</h4>
                            <p className='lesson-detail lesson-comment'>{lessonComment}</p>
                            <div className='lesson-detail'>
                                <label className='lesson-detail__label'>For:</label>
                                <p className='lesson-detail__p'>{lessonName}</p>
                            </div>
                            <div className='lesson-detail'>
                                <label className='lesson-detail__label'>Status:</label>
                                <p className='lesson-detail__p'>{lessonStatus}</p>
                            </div>
                            <div className='lesson-detail'>
                                <label className='lesson-detail__label'>Date:</label>
                                <p className='lesson-detail__p'>{lessonDate} at {lessonTime}</p>
                            </div>
                            <div className='lesson-detail'>
                                <label className='lesson-detail__label'>Lesson Link:</label>
                                <Link href={lessonLink}><a>Lesson Link</a></Link>
                            </div>
                            
                        </div>
                        <div className="lesson-attachment
                            col col-md-4 col-6">
                            <p className='lesson-attachment__text'>Lesson Attachments</p>
                            {lessonAttachment.map((att) => 
                                <Link 
                                    className='bi bi-paperclip'
                                    href="/"
                                    key={att.toString() + nanoid}
                                >
                                    <a>{att}</a>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="lesson-detail__buttons">
                        
                            <button className='lesson-buttons btn btn-primary'
                                onClick = {() => setIsEditOn(!isEditOn)}
                                >
                                <label className='bi bi-pencil px-2'>Edit Lesson</label>
                            </button>
                        
                        
                            <button 
                                className='lesson-buttons btn btn-primary'
                                onClick = {handleCancelLesson}
                            > 
                                <label className='bi bi-trash px-2'>Cancel Lesson</label>
                            </button>
                        
                    </div>
                </div> 
            )}
        </>
        )}
    
}