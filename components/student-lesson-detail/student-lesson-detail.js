import React from 'react';
import Link from 'next/link';


export default function StudentLessonDetail({showLessonDet}) {

    if(!showLessonDet){
        return null;
    } 

    return (
        <div className="lesson-details container">
            <div className='row'>
            <div className='lesson-text col col-md-6 col-12'>
                <h4>Lesson Details</h4>
                <p className='lesson-detail'>Game Review, Fundamentals Review</p>
                <p className='lesson-detail'>John McStudent</p>
                <p className='lesson-detail'>da/te/year at ti:me - ti:me</p>
                <Link href="/">Discord Link</Link>
            </div>
            <div className="lesson-attachment m-2
                col col-md-4 col-6
                d-flex flex-column">
                <h5 className='m-0'>Lesson Attachments</h5>
                <button className='btn p-0'>
                    <label className='bi bi-plus px-2'>Add Attachment</label>
                </button>
                <Link href="/">
                    <a className='bi bi-paperclip'>game-review.sgf</a>
                </Link>
                <Link href="/">
                    <a className='bi bi-paperclip'>OpeningProblems.sgf</a>
                </Link>
            </div>
            </div>
            <div className="row p-0">
                <div className='col-6 p-0'>
                    <button className='lesson-buttons 
                        d-flex justify-content-center
                        btn  
                        w-100 p-0'>
                        <label className='bi bi-pencil px-2'>Edit Lesson</label>
                    </button>
                </div>
                <div className='col-6 p-0'>
                    <button className='lesson-buttons 
                        d-flex justify-content-center
                        btn 
                        w-100 p-0'> 
                        <label className='bi bi-trash px-2'>Cancel Lesson</label>
                    </button>
                </div>
            </div>
        </div>

    )
}