import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 bg-white shadow-md border border-gray-200 rounded-lg p-6 my-10'>
                    <h1 className='font-bold text-2xl text-gray-800 mb-5 text-center'>Sign Up</h1>

                    <div className='my-4'>
                        <Label className="text-gray-700">Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Enter your full name"
                            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                        />
                    </div>

                    <div className='my-4'>
                        <Label className="text-gray-700">Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Enter your email"
                            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                        />
                    </div>

                    <div className='my-4'>
                        <Label className="text-gray-700">Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="Enter your phone number"
                            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                        />
                    </div>

                    <div className='my-4'>
                        <Label className="text-gray-700">Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Enter your password"
                            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                        />
                    </div>

                    <div className='flex items-center justify-between my-5'>
                        <RadioGroup className="flex items-center gap-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer accent-blue-500"
                                />
                                <Label className="text-gray-700">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer accent-blue-500"
                                />
                                <Label className="text-gray-700">Recruiter</Label>
                            </div>
                        </RadioGroup>

                        <div className='flex flex-col gap-1'>
                            <Label className="text-gray-700">Profile Picture</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                            />
                            <p className="text-xs text-gray-500">Upload a clear profile picture (JPEG, PNG, JPG)</p>
                        </div>
                    </div>

                    {loading ? (
                        <Button className="w-full my-4 bg-blue-500 text-white font-semibold py-2 rounded-lg flex items-center justify-center">
                            <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full my-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all">
                            Signup
                        </Button>
                    )}

                    <p className='text-sm text-center text-gray-600'>
                        Already have an account? <Link to="/login" className='text-blue-600 hover:underline'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup;
