import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className='max-w-7xl mx-auto my-20 p-8 rounded-lg shadow-lg bg-cover bg-center' style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
            <h1 className='text-4xl font-bold text-black text-center mb-6'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5'>
                {
                    allJobs.length <= 0 ? <span className='text-white'>No Job Available</span> : allJobs?.slice(0,6).map((job) => (
                        <div className='bg-white bg-opacity-90 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105'>
                            <LatestJobCards key={job._id} job={job}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestJobs;