import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lessonFilterControl } from '../../redux/slices/lessonControlSlice'

export default function LessonViewSelect () {

    const dispatch = useDispatch();
    
    const filters = useSelector(state => state.lessonControl.lessonFilters)
    
    const handleFilter = (filter) => {
        dispatch(lessonFilterControl(filter))
    }


    return (    
        <div className="lesson-view-select-filter">
            <form className="lesson-view-select-filter__radioForm">
                <label htmlFor='all'>
                    <input  
                            id='all'
                            type='radio'
                            value='Show All'
                            checked={filters.includes('ALL')}
                            onChange={() => handleFilter('ALL')}
                    />
                    Show All
                </label>
                <label htmlFor='available'>
                    <input  
                            id='available'
                            type='radio'
                            value='Show Booked'
                            checked={filters.includes('AVAILABLE')}
                            onChange={() => handleFilter('AVAILABLE')}
                    />
                    Show Available
                </label>
                <label htmlFor='booked'>
                    <input  
                            id='booked'
                            type='radio'
                            value='Show Booked'
                            checked={filters.includes('BOOKED')}
                            onChange={() => handleFilter('BOOKED')}
                    />
                    Show Booked
                </label>
                <label htmlFor='requested'>
                    <input  
                            id='requested'
                            type='radio'
                            value='Show Requested'
                            checked={filters.includes('REQUESTED')}
                            onChange={() => handleFilter('REQUESTED')}
                    />
                    Show Requested
                </label>
                <label htmlFor='canceled'>
                    <input  
                            id='canceled'
                            type='radio'
                            value='Show Canceled'
                            checked={filters.includes('CANCELED')}
                            onChange={() => handleFilter('CANCELED')}
                    />
                    Show Canceled
                </label>
            </form>
        </div>
    )
}