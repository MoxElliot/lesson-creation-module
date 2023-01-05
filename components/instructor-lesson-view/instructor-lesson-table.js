import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { readLesson } from '../../redux/slices/lessonDataSlice'
import { nanoid } from 'nanoid';

export default function InstructorLessonTable() {
    const lessonData = useSelector((state) => state.lessonData.lessonData)
    const lessonAttachmentList = useSelector(state => state.lessonControl.lessonAttachmentList)
    const filters = useSelector(state => state.lessonControl.lessonFilters)

    const dispatch = useDispatch();

    useEffect(() => {

    }, [lessonAttachmentList])
    

    const renderedLessons = lessonData.map((val) => {
        const rowData = [val.id, val.date, val.time, val.status, val.detail, val.attachment, val.name, val.link];
        
        const rowSelect = () => {
            dispatch(readLesson(rowData))
            return rowData
           }

        const lessonRow = 
        <tr className='lesson-table-body-row' key={nanoid()} onClick={rowSelect}>
            <td>{val.date}</td>
            <td>{val.time}</td>
            <td>{val.status}</td>
            <td>{val.detail}</td>
            
            <td> 
                {val.attachment.map((att) => 
                    <p key={att.toString()}>{att}</p>
                )}
            </td>
            <td>{val.name}</td>
            <td>   
                <Link href={val.link}>
                    <a className=''>Lesson Link</a>
                </Link>
            </td>
        </tr>

        switch(filters) {
            case 'AVAILABLE':
                if(val.status === 'Available'){
                    return lessonRow
                };
                break;
            case 'BOOKED':
                if(val.status === 'Booked') {
                    return lessonRow
                };
                break;
            case 'REQUESTED':
                if(val.status === 'Requested') {
                    return lessonRow
                };
                break;
            case 'CANCELED':
                if(val.status === 'Canceled') {
                    return lessonRow
                };
                break;
            default:
                return lessonRow
        }


        // if (val.status !=='Booked'){
        //     return lessonRow 
        // } else {
        //     return null
        // }
    })


    return (
    <table className="lesson-table-content table table-striped table-hover ">
        <thead className="lesson-table-head">
            <tr className='lesson-table-head-row'>
                <th scope='col'>Lesson Date</th>
                <th scope='col'>Lesson Time</th>
                <th scope='col'>Lesson Status</th>
                <th scope='col'>Lesson Detail</th>
                <th scope='col'>Lesson Attachments</th>
                <th scope='col'>Student Name</th>
                <th scope='col'>Lesson Link</th>
            </tr>
        </thead>
        <tbody className="lesson-table-body">
            {renderedLessons}
        </tbody>
        
    </table> 
    )
}