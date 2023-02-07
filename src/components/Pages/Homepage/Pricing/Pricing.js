import React from 'react';
import { motion } from 'framer-motion';
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
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="card shadow-xl bg-base-100 border-t-4 border-indigo-700 pt-5"
                >
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
                                <p className='text-serif'>Cancel Anytime</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Crystal-clear video explanations</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>In-depth composition analyses.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Unlockable certificate of completion.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A crash course on Exposure.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>An exhaustive course on saturation.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>An glossary of photography terms.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Everything you need to start.</p>
                            </div>
                            <div className="card-actions flex justify-center mt-8">
                                <button className="btn normal-case text-lg bg-stone-800 hover:bg-stone-900">Select Plan</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="card bg-base-100 shadow-xl border-t-4 border-indigo-700 pt-5"
                >
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
                                <p className='text-serif'>A comprehensive photography curriculum.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Comprehensive video explanations.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Unlockable certificate of success.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Detailed written walkthroughs.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Illustrative Exposure diagrams.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A timed composition quiz.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Designed, taught, and reviewed by experts</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>A feature-rich review system.</p>
                            </div>
                            <div className="card-actions flex justify-center mt-8">
                                <button className="btn normal-case text-lg bg-stone-800 hover:bg-stone-900">Select Plan</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="card bg-base-100 shadow-xl border-t-4 border-indigo-700 pt-5"
                >
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
                                <p className='text-serif'>Own forever.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Unlimited access to all contents</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Private Discord server invite.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Beginner friendly video lessons with no fluff.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Unlockable certificate of success.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Possibility of learning at your own pace.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Unlimited access to all courses.</p>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <TiTick className='w-6 h-6'></TiTick>
                                <p className='text-serif'>Unlockable certificate of success.</p>
                            </div>
                            <div className="card-actions flex justify-center mt-8">
                                <button className="btn normal-case text-lg bg-stone-800 hover:bg-stone-900">Select Plan</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;