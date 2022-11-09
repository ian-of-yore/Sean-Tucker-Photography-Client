import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews');

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email])


    return (
        <div style={{ minHeight: "77.8vh" }}>
            <h3 className='text-3xl text-center font-semibold my-10'>{user?.email} has {myReviews.length} reviews</h3>
            <div>
                {
                    myReviews.map(myReview => <MyReviewsCard
                        key={myReview._id}
                        myReview={myReview}
                    ></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;