import React from 'react';
import { useDispatch } from 'react-redux';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';
import LessonEditControl from '../lesson-controls/lesson-edit-control';
import LessonCreateControl from '../lesson-controls/lesson-create-control';
import { showEditLesson, showCreateLesson } from '../../redux/slices/lessonControlSlice'

export default function InstructorLessonView () {

    const dispatch = useDispatch()

    const handleEditLesson = () => {
        dispatch(showEditLesson(true))
        dispatch(showCreateLesson(false)) 
    }
    const handleCreateLesson = (e) => {
        dispatch(showCreateLesson(true))
        dispatch(showEditLesson(false))
    }

    return (
      
            <div className="lessonContainer container">
                <div className="viewSelect">
                    <p className="lessonViewSelectHeader">Instructor Lesson View</p>
                    <LessonViewSelect />
                </div>
                <div className="lesson-table-container overflow-auto">
                    <InstructorLessonTable />
                </div>

                
                <div className="lesson-control-container">
                    
                <div 
                    className='btn-group lessonControlToggle'
                    role="group"
                    aria-label="Basic radio toggle button group"
                >
                    <input 
                        className='btn-check p-1 m-1'
                        type="radio"
                        name="btnradio"
                        id="btnradio1"
                        autoComplete='off'
                        defaultChecked
                        onClick={handleCreateLesson}
                    />
                    <label 
                        className='btn btn-outline-primary'
                        htmlFor="btnradio1"
                    >
                        Create Lesson
                    </label>
                    <input 
                        className='btn-check p-1 m-1'
                        type="radio"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete='off'
                        onClick={handleEditLesson}
                    />
                    <label 
                        className='btn btn-outline-primary'
                        htmlFor="btnradio2"
                    >
                        Edit Lesson
                    </label>
                </div>  
                    <LessonEditControl />
                    <LessonCreateControl />
                </div>
            </div>
    )
}