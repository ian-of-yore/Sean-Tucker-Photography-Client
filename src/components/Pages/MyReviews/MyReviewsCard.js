import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { RiDeleteBin3Line } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";

const MyReviewsCard = ({ myReview, handleDeleteReview }) => {
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
            <div className="card card-side grid grid-cols-6 bg-base-100 shadow-xl w-10/12 mx-auto mb-5">
                <div className="card-body col-span-4">
                    <div className='flex justify-between items-start'>
                        <div>
                            <h2 className="text-2xl font-semibold pr-5">Review of: <span className='text-yellow-800'>{name}</span></h2>
                        </div>
                        <div className='flex pt-1'>
                            <button className='pb-1'><label htmlFor="my-modal"><GrDocumentUpdate className='h-6 w-6 mr-2 mt-1'></GrDocumentUpdate></label></button>
                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn">Yay!</label>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleDeleteReview(_id)}><RiDeleteBin3Line className='h-8 w-7'></RiDeleteBin3Line></button>
                        </div>
                    </div>
                    <h2 className="card-title text-xl   ">by <span className='text-orange-700'>"{userName}"</span><span className='text-base'>({user?.email})</span></h2>
                    <p className='pr-3'>Description: {reviewDetails}</p>
                </div>
                <div className='col-span-2'>
                    <figure><img src={img} alt="Movie" /></figure>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;