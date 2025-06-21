import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    const goToResumeMaker = () => {
        navigate("/resume-maker"); // Assuming you have a route for the Resume Maker page
    };

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>
                    Find your dream job with ease!
                </span>
                <h1 className='text-5xl font-bold'>
                    Find. Apply. Succeed.  <br />
                    <span className='text-[#6A38C2]'>Your Dream Job Awaits!</span>
                </h1>
                <p>
                    One platform. Unlimited opportunities. Find your next job or hire top talent today!
                </p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>

                    {/* Resume Maker Button */}
                    <Button 
                        onClick={goToResumeMaker} 
                        className="bg-[#e5def1] text-black px-6 py-3 rounded-full font-bold">
                        Resume Maker
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
