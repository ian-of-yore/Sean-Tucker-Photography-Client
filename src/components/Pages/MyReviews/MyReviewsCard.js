import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyReviewsCard = ({ myReview }) => {
    const { user } = useContext(AuthContext);
    const { _id, userName, userPhoto, serviceId, reviewDetails } = myReview;
    const [myReviewService, setMyReviewService] = useState([]);
    const { name, img } = myReviewService;


    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setMyReviewService(data))
    }, [serviceId])

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-10/12 mx-auto mb-5">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Review of: {name}</h2>
                    <h2 className="card-title text-xl   ">by {userName}</h2>
                    <h2 className="font-semibold">email: {user?.email}</h2>
                    <p>Description: {reviewDetails}</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Delete</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
                <figure><img src={img} alt="Movie" /></figure>
            </div>
        </div>
    );
};

export default MyReviewsCard;