import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { RiDeleteBin3Line } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";

const MyReviewsCard = ({ myReview, handleDeleteReview, handleUpdateReview }) => {
    const { user } = useContext(AuthContext);
    const { _id, userName, serviceId, reviewDetails } = myReview;
    const [myReviewService, setMyReviewService] = useState([]);
    const { name, img } = myReviewService;

    // fetching service data based the which services user gave reviews to
    useEffect(() => {
        fetch(`https://sean-tucker-server.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setMyReviewService(data))
    }, [serviceId])



    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='h-56'><img src={img} alt="Shoes" className='h-full w-full' /></figure>
            <div className="card-body h-72">
                <h2 className="text-xl font-serif"><span className='text-orange-600 underline'>Review of:</span> {name}</h2>
                <p className='overflow-scroll '><span className='text-orange-600 underline'>Description:</span> {reviewDetails}</p>
                <div className="flex justify-between mt-3">
                    <button className='pb-1'><label htmlFor={_id}><GrDocumentUpdate className='h-6 w-6 mr-2 mt-1'></GrDocumentUpdate></label></button>
                    <input type="checkbox" id={_id} className="modal-toggle" />
                    <div className="modal">

                        <form onSubmit={(event) => handleUpdateReview(event, _id)} className='w-1/3 mx-auto shadow-xl bg-gray-600 p-8'>
                            <h3 className='text-3xl font-semibold text-center mb-7 text-white'>Update Review</h3>
                            <textarea name='reviewDetails' className="textarea h-36 border w-full border-black block my-4" placeholder="Update your review" required></textarea>
                            <div className="modal-action">
                                <button type="submit"><label htmlFor={_id} className="btn btn-ghost text-white">Update</label></button>
                            </div>
                        </form>

                    </div>
                    <button onClick={() => handleDeleteReview(_id)}><RiDeleteBin3Line className='h-8 w-7'></RiDeleteBin3Line></button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;