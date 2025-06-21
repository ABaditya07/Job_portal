import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { Button, buttonVariants } from './ui/button';

const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Android Developer"
];

const CategoryGrid = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        
        <div className="w-full max-w-4xl mx-auto my-16 p-6 rounded-lg shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/panoramic-view-white-office-desk-with-laptop-apple-stationeries_23-2148178597.jpg?t=st=1743492043~exp=1743495643~hmac=ef10d11f13d079f413b423e35d8d69733de0f0fcfca7849ff358551bea9488ff&w=1380')" }}>
            <h2 className="text-2xl font-bold text-center mb-6 text-blue">Explore Job Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                        <Button onClick={() => searchJobHandler(category)} variant="outline" className="w-full text-lg font-medium">{category}</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;
