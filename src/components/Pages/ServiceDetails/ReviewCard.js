import React from 'react';

const ReviewCard = ({ review }) => {
    const { userName, userPhoto, reviewDetails } = review;

    return (
        <div className='mb-5 p-3 grid md:grid-cols-10 shadow-lg'>
            <div className="avatar sm:col-span-3 md:col-span-1" style={{ height: '10vh', width: '100%' }}>
                <div className="rounded-xl">
                    <img src={userPhoto} alt='' />
                </div>
            </div>
            <div className='sm:col-span-7 md:col-span-9'>
                <p className='font-semibold'>{userName}</p>
                <p><small>{reviewDetails}</small></p>
            </div>
        </div>
    );
};

export default ReviewCard;