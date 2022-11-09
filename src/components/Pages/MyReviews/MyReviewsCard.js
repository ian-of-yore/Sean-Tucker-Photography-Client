import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { RiDeleteBin3Line } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";

const MyReviewsCard = ({ myReview, handleDeleteReview, handleUpdateReview }) => {
    const { user } = useContext(AuthContext);
    const { _id, userName, serviceId, reviewDetails } = myReview;
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

                                <form onSubmit={(event) => handleUpdateReview(_id, event)} className='w-1/3 mx-auto shadow-xl bg-gray-600 p-8'>
                                    <h3 className='text-3xl font-semibold text-center mb-7 text-white'>Update Review</h3>
                                    {/* <div>
                                        <input type="text" name='userName' placeholder="User Name" className="input w-full" required />
                                        <input type="text" name='userPhoto' placeholder="User PhotoURL" className="input w-full my-3" required />
                                        <input type="email" name='userEmail' placeholder="User Email" defaultValue={user?.email} readOnly className="input w-full mb-3" required />
                                    </div> */}
                                    <textarea name='reviewDetails' className="textarea h-36 border w-full border-black block my-4" placeholder="Update your review" required></textarea>
                                    <div className="modal-action">
                                        <button type="submit"><label htmlFor="my-modal" className="btn btn-ghost text-white">Update</label></button>
                                    </div>
                                </form>

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