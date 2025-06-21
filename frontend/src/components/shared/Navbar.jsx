import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-20 px-6">
                {/* Logo Section */}
                <div>
                    <Link to="/">
                        <img 
                            src="https://t4.ftcdn.net/jpg/05/05/61/73/240_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" 
                            alt="JobSphere Logo"
                            className="h-16 w-auto object-contain rounded-lg shadow-md"
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-6 text-lg">
                        {user && user.role === 'recruiter' ? (
                            <>
                                <li><Link to="/admin/companies" className="hover:text-yellow-300 transition-all">Companies</Link></li>
                                <li><Link to="/admin/jobs" className="hover:text-yellow-300 transition-all">Jobs</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/" className="hover:text-yellow-300 transition-all">Home</Link></li>
                                <li><Link to="/jobs" className="hover:text-yellow-300 transition-all">Jobs</Link></li>
                                <li><Link to="/browse" className="hover:text-yellow-300 transition-all">Browse</Link></li>
                            </>
                        )}
                    </ul>

                    {/* Authentication & User Dropdown */}
                    {!user ? (
                        <div className="flex items-center gap-4">
                            <Link to="/login">
                                <Button variant="outline" className="border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-all">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-lg px-5 py-2 rounded-full shadow-md transition-all">Signup</Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer w-12 h-12 ring-2 ring-white">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-white shadow-lg rounded-lg">
                                <div className="p-4">
                                    <div className="flex gap-3 items-center">
                                        <Avatar className="w-12 h-12 ring-2 ring-blue-500">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                                        </Avatar>
                                        <div>
                                            <h4 className="font-medium text-gray-900">{user?.fullname}</h4>
                                            <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col my-3 text-gray-700 space-y-2">
                                        {user?.role === 'student' && (
                                            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-all">
                                                <User2 />
                                                <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-all">
                                            <LogOut />
                                            <Button onClick={logoutHandler} variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
