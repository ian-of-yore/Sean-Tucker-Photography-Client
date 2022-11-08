import React from 'react';

const ReviewCard = ({ review }) => {
    const { userName, userPhoto, reviewDetails } = review;

    return (
        <div className='mb-5 p-3 grid grid-cols-10 shadow-lg'>
            <div className="avatar col-span-1" style={{ height: '10vh', width: '10vw' }}>
                <div className="rounded-xl">
                    <img src={userPhoto} alt='' />
                </div>
            </div>
            <div className='col-span-9'>
                <p className='font-semibold'>{userName}</p>
                <p><small>{reviewDetails}</small></p>
            </div>
        </div>
    );
};

export default ReviewCard;