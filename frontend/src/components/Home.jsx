import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import ResumeMaker from './ResumeMaker'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/panoramic-view-white-office-desk-with-laptop-apple-stationeries_23-2148178597.jpg?t=st=1743492043~exp=1743495643~hmac=ef10d11f13d079f413b423e35d8d69733de0f0fcfca7849ff358551bea9488ff&w=1380')" }}
    >
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <CustomerReviews />
      <Footer />
    </div>
  )
}

export default Home
