import studentLess from '../../styles/studentLess.module.scss';
import React from 'react';
import LessonViewSelect from './student-view-select';
import StudentLessonTable from './student-lesson-table';

export default function StudentLessonView () {
    return (
      
            <div className={studentLess.lessonContainer}>
                <div className={studentLess.viewSelect}>
                    <p className={studentLess.lessonViewSelectHeader}>Student Lesson View </p>
                    <LessonViewSelect />
                </div>
                <div className={studentLess.lessonTable}>
                    <StudentLessonTable />
                </div>
            </div>
    )
}