import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLessonAttachmentList, setAttachementList } from '../../redux/slices/lessonControlSlice';
//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react

export default function LessonEditAttachment ({lessonAttachment}) {


    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [attachArray, setAttachArray] = useState([]);

    const lessonAttachmentList = useSelector(state => state.lessonControl.lessonAttachmentList)
    
    const removeIndex = useSelector(state => state.lessonControl.removeIndex)
    //const attachClear = useSelector(state => state.lessonControl.attachClear);

    const dispatch = useDispatch();

    useEffect(() => {
        setAttachArray(lessonAttachment)
        
    }, [])


    useEffect(() => {
       
        dispatch(setAttachementList(attachArray))
        
    }, [attachArray]);
    
    const handleSearchAttachment = (e) => {
        e.preventDefault()
        if(e.target.files.length === 0){
            return attachArray
        } else {
        setSelectedFile(e.target.files[0].name);
        return attachArray
        }
    };
    
    const inputRef = useRef(null);
    const resetFileInput = () => {
        inputRef.current.value = null;
    };

    const handleAddAttachment = (e) => {
        e.preventDefault()
        resetFileInput();
        if(attachArray.includes(selectedFile) || selectedFile === undefined) {
            setIsSelected(!isSelected)
        } else {
            setIsSelected(!isSelected)
            dispatch(updateLessonAttachmentList(selectedFile))
            setAttachArray([...attachArray, selectedFile])
       }
        return attachArray
    };

    const handleRemoveAttachment = (e) => {
        e.preventDefault()
        removeIndex = e.target.id
        let removedAttachArray = attachArray.filter((element, index) => {
            return index != removeIndex
        })
        setAttachArray(removedAttachArray)
    };

    return ( 
        <form className='lessonControlAttachment m-2 p-2
            col col-md-4 col-6
            d-flex flex-column'
            method="post" encType="multipart/form-data">
    
            <p className='lessonControlP lesson-attachment__text'>Lesson Attachments</p>
            <input 
                type='file' 
                name='file'
                ref={inputRef} 
                onChange={handleSearchAttachment} 
            />
           
                {attachArray.map((file, i) => {
                    return(
                    <div key={file.toString()} >
                        <button 
                            className='btn'
                            id={i}
                            onClick={handleRemoveAttachment}
                        > 
                        x 
                        </button>
                        <label> {file}</label>
                    </div>
                    )})}
                 
            <button 
                className='lessonAttachControlBtn btn btn-primary'
                onClick={handleAddAttachment}  
            >
                <label className='bi bi-plus'>Add Attachment</label>
            </button>
                    
        </form>
    )
}