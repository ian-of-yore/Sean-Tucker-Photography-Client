import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Subscribe = () => {

    const handleKeepMeUpdated = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        toast.success('Subscribed for the newsletter');
        form.reset();
    }

    return (
        <div>
            <Toaster></Toaster>
            <div className='w-11/12 mx-auto lg:w-10/12 text-center mt-10'>
                <h2 className='text-2xl md:text-4xl font-bold'>UPDATES AND NEW STUFFS</h2>
                <h3 className='text-base md:text-2xl font-serif my-4'>Sign up for our newsletter and we will let you know what SEAN is cooking up</h3>
                <form onSubmit={handleKeepMeUpdated}>
                    <div>
                        <input type="text" placeholder="First Name" name='firstName' className="input input-bordered w-full max-w-xs mb-3 md:mr-5" />
                        <input type="text" placeholder="Last Name" name='lastName' className="input input-bordered w-full max-w-xs mb-3" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email Address" name='email' className="input input-bordered w-full max-w-xs mb-3" required />
                    </div>
                    <button className='btn w-full max-w-xs md:btn-wide md:mt-4' type="submit">Keep Me Updated</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;