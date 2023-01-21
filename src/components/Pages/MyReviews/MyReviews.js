import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewsCard from './MyReviewsCard';
import toast, { Toaster } from 'react-hot-toast';

const MyReviews = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useTitle('My Reviews');

    useEffect(() => {
        fetch(`https://sean-tucker-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("seanTucker-token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogOut()
                }
                return res.json();
            })
            .then(data => {
                setMyReviews(data);
                setSpinner(false);
            })
    }, [user?.email, userLogOut])

    const handleDeleteReview = (reviewId) => {
        const confirm = window.confirm("Delete this review?");
        if (confirm) {
            fetch(`https://sean-tucker-server.vercel.app/reviews/${reviewId}`, {
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

    const handleUpdateReview = (event, reviewId) => {

        event.preventDefault();
        const form = event.target;
        const updatedReview = form.reviewDetails.value;

        const review = {
            updatedReview
        }

        fetch(`https://sean-tucker-server.vercel.app/reviews/${reviewId}`, {
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
                    const newReviews = [selected, ...remaining];
                    setMyReviews(newReviews);
                }
            })

    }


    return (
        <div className='mb-10 min-h-screen w-11/12 mx-auto lg:w-10/12'>
            <div className='flex justify-center'>
                {
                    spinner === true ? <button className="btn loading bg-black">loading</button> : ''
                }
            </div>
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
            <div className='mt-10'>
                {
                    myReviews.length === 0 ?
                        <h3 className=' text-3xl font-semibold flex justify-center items-center'>No reviews were added</h3>
                        :
                        <></>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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