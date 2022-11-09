import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {

    useTitle('Add service');

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.photoURL.value;
        const price = form.price.value;
        const learners = form.learners.value;
        const description = form.description.value;

        const service = {
            name,
            img,
            price,
            learners,
            description
        }

        fetch('https://sean-tucker-server.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success("Service Added Successfully!", {
                        duration: 1000
                    })
                }
                form.reset();
            })
            .catch((err) => console.log(err))
    }

    return (
        <div style={{ height: "77.3vh" }}>
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
            <form onSubmit={handleAddService} className='w-2/4 mx-auto'>
                <h3 className='text-3xl font-semibold text-center my-10'>Add a new service that Sean Tucker provides</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10'>
                    <input type="text" name='name' placeholder="Service Name" className="input w-full max-w-xs" required />
                    <input type="text" name='photoURL' placeholder="Service PhotoURL" className="input w-full max-w-xs" required />
                    <input type="text" name='price' placeholder="Service Price" className="input w-full max-w-xs" required />
                    <input type="text" name='learners' placeholder="Total Students" className="input w-full max-w-xs" required />
                </div>
                <textarea name='description' className="textarea h-24 border w-full border-black block mb-8" placeholder="Service Details" required></textarea>
                <input type="submit" className='btn btn-ghost btn-sm border-0 w-full' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;