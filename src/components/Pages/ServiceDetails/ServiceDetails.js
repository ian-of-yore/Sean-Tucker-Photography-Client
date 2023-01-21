import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import toast, { Toaster } from 'react-hot-toast';
import ReviewCard from './ReviewCard';


const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { user } = useContext(AuthContext);

    useTitle('Service Details')
    const { _id, name, img, price, description, learners } = serviceDetails;

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://sean-tucker-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const userPhoto = form.userPhoto.value;
        const reviewDetails = form.reviewDetails.value;
        const userEmail = form.userEmail.value;

        const review = {
            serviceId: _id,
            userName,
            userPhoto,
            reviewDetails,
            userEmail
        }

        fetch('https://sean-tucker-server.vercel.app/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success("Review Added Successfully!", {
                        duration: 1000
                    })
                    const newReviews = [review, ...reviews];
                    setReviews(newReviews);
                }
                form.reset();
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {/* The following code is for toaster styling */}
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

            {/* The following code is for showing laoder while data fetching */}
            <div className='flex justify-center'>
                {
                    setReviews.length ? '' : <button className="btn loading bg-black">loading</button>
                }
            </div>

            {/* This following code is for service details section*/}
            <div className='mt-10 w-11/12 mx-auto'>
                <div className="bg-base-100 shadow-xl grid md:grid-cols-12">
                    <div className='md:col-span-7'>
                        <figure><img src={img} alt="Movie" style={{ width: "100%", height: "70vh" }} /></figure>
                    </div>
                    <div className="md:col-span-5 card-body" style={{ width: "100%" }}>
                        <h2 className="card-title text-3xl">{name}</h2>
                        <p className='sm:mb-5'>{description}</p>
                        <div className="card-actions justify-end">
                            <button className="bg-gray-800 text-white px-5 py-3 rounded-xl hover:bg-gray-900">Join <span className='text-yellow-500'>{learners}</span> Aspiring Photographers today! for <span className='text-orange-600'>${price}</span></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Following code is for the review section */}
            <div className='my-20 grid md:grid-cols-6 w-11/12 mx-auto'>
                <div className='md:col-span-4 pr-10'>
                    {
                        reviews.map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard>)
                    }
                </div>

                <div className='text-center  md:col-span-2 shadow-xl p-3'>
                    {
                        user?.email ?
                            <form onSubmit={handleReviewSubmit} className='w-full'>
                                <h3 className='text-3xl font-semibold text-center mb-3'>Add a Review</h3>
                                <div>
                                    <input type="text" name='userName' placeholder="User Name" className="input w-full" required />
                                    <input type="text" name='userPhoto' placeholder="User PhotoURL" className="input w-full my-3" required />
                                    <input type="email" name='userEmail' placeholder="User Email" defaultValue={user?.email} readOnly className="input w-full mb-3" required />
                                </div>
                                <textarea name='reviewDetails' className="textarea h-12 border w-full border-black block my-4" placeholder="Add Your Review" required></textarea>
                                <input type="submit" className='btn btn-outline btn-sm border-0 w-full' value="Submit Review" />
                            </form>
                            :
                            <Link to='/signin'><button className='btn'>Log In to Add Review</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;