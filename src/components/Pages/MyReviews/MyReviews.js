import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewsCard from './MyReviewsCard';
import toast, { Toaster } from 'react-hot-toast';

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

    const handleDeleteReview = (reviewId) => {
        const confirm = window.confirm("Delete this review?");
        if (confirm) {
            fetch(`http://localhost:5000/reviews/${reviewId}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success("Review Deleted!", {
                            duration: 1000
                        })
                        const remaining = myReviews.filter(review => review._id !== reviewId)
                        setMyReviews(remaining);
                    }
                })
        }
    }

    const handleUpdateReview = (reviewId, event) => {
        event.preventDefault();
        const form = event.target;
        const updatedReview = form.reviewDetails.value;

        const review = {
            updatedReview
        }

        fetch(`http://localhost:5000/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Review Updated!", {
                        duration: 1000
                    })
                    const remaining = myReviews.filter(myReview => myReview._id !== reviewId);
                    const selected = myReviews.find(myReview => myReview._id === reviewId);
                    selected.reviewDetails = JSON.stringify(updatedReview);
                    const newReviews = [...remaining, selected];
                    setMyReviews(newReviews);
                }
            })

    }


    return (
        <div style={{ minHeight: "77.8vh" }}>
            <div>
                <Toaster
                    toastOptions={{
                        success: {
                            style: {
                                background: 'green',
                                color: 'white',
                            },
                        }
                    }}
                />
            </div>
            <div>
                {
                    myReviews.length >= 0 ?
                        <h3 className='text-3xl text-center font-semibold my-10'>You have {myReviews.length} reviews</h3>
                        :
                        <h3 className='text-3xl text-center font-semibold my-10'>You have no reviews</h3>
                }
            </div>
            <div>
                {
                    myReviews.map(myReview => <MyReviewsCard
                        key={myReview._id}
                        myReview={myReview}
                        handleDeleteReview={handleDeleteReview}
                        handleUpdateReview={handleUpdateReview}
                    ></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;