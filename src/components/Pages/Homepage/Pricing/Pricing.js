import React from 'react';
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { GiInfinity } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
    return (
        <div className='text-black w-11/12 mx-auto lg:w-10/12 my-36'>
            <div className='text-center mb-16'>
                <h4 className='font-sans font-semibold text-5xl mb-5'>The best investment you may ever make.</h4>
                <h4 className='font-semibold text-4xl mb-1'>"The Ultimate Platform"</h4>
                <p className='font-sans text-lg font-semibold'>Organized. Guided. All-encompassing.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="indicator">
                    <span className='indicator-item py-1 px-3 rounded-md bg-emerald-600 text-white font-bold text-xl mr-16'>New</span>
                    <div className="card shadow-xl bg-base-100 border-t-4 border-indigo-700 pt-5">
                        <div className="card-body">
                            <div className='flex justify-center items-center p-3 shadow-2xl bg-gray-900 text-white rounded-lg'>
                                <BsFillCalendarMonthFill className='w-6 h-6 mr-4'></BsFillCalendarMonthFill>
                                <h1 className='text-xl font-semibold'>Monthly</h1>
                            </div>
                            <div className='mt-3 flex justify-center items-end text-indigo-900'>
                                <div className='flex justify-center'>
                                    <span className='font-bold text-3xl font-serif pt-2'>$</span>
                                    <span className='text-6xl font-serif'>19</span>
                                </div>
                                <div className='ml-3'>
                                    <span className='text-2xl line-through opacity-50'>$29</span>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className="card-actions flex justify-center mt-8">
                                    <button className="btn normal-case text-lg bg-stone-800 hover:bg-stone-900">Select Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border-t-4 border-indigo-700 pt-5">
                    <div className="card-body">
                        <div className='flex justify-center items-center p-3 shadow-2xl bg-gray-900 text-white rounded-lg'>
                            <SlCalender className='w-6 h-6 mr-4'></SlCalender>
                            <h1 className='text-xl font-semibold'>Yearly</h1>
                        </div>
                        <div className='mt-3 flex justify-center items-end text-indigo-900'>
                            <div className='flex justify-center'>
                                <span className='font-bold text-3xl font-serif pt-2'>$</span>
                                <span className='text-6xl font-serif'>99</span>
                            </div>
                            <div className='ml-3'>
                                <span className='text-2xl line-through opacity-50'>$119</span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                            </div>
                            <div className="card-actions flex justify-center mt-8">
                                <button className="btn normal-case text-lg bg-stone-800 hover:bg-stone-900">Select Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <span className='indicator-item py-1 px-3 rounded-md bg-teal-600 text-white font-bold text-xl mr-24'>Best Value</span>
                    <div className="card bg-base-100 shadow-xl border-t-4 border-indigo-700 pt-5">
                        <div className="card-body">
                            <div className='flex justify-center items-center p-3 shadow-2xl bg-gray-900 text-white rounded-lg'>
                                <GiInfinity className='w-6 h-6 mr-3 mt-1'></GiInfinity>
                                <h1 className='text-xl font-semibold'>Lifetime</h1>
                            </div>
                            <div className='mt-3 flex justify-center items-end text-indigo-900'>
                                <div className='flex justify-center'>
                                    <span className='font-bold text-3xl font-serif pt-2'>$</span>
                                    <span className='text-6xl font-serif'>139</span>
                                </div>
                                <div className='ml-3'>
                                    <span className='text-2xl line-through opacity-50'>$159</span>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className='flex justify-center items-center mt-2'>
                                    <TiTick className='w-6 h-6'></TiTick>
                                    <p className='text-serif'>A comprehensive blockchain curriculum.</p>
                                </div>
                                <div className="card-actions flex justify-center mt-8">
                                    <button className="btn normal-case text-lg bg-stone-800 hover:bg-stone-900">Select Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;