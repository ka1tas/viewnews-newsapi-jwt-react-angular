import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HiLogin } from 'react-icons/hi';
import { RiUserAddFill } from 'react-icons/ri';
import { FcNews, FcLike, FcBusinessman, FcList } from 'react-icons/fc';
import Button from '@mui/material/Button';

import { logOut } from '../../store/actions/ViewNewsActions';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showMobilemenu, setShowMobilemenu] = useState(false);
    let user = useSelector(state => state.user);
    let auth = (user.authStatus && !user.isblocked);
    let isAdmin = (user?.user?.role?.name === "Admin");

    const signOut = () => {
        sessionStorage.setItem("JWT_TOKEN", null);
        dispatch(logOut);
        navigate("/s")
    }

    return (
        <nav className="bg-gray-800 text-white">

            <div className="hidden sm:block">
                <div className="flex flex-row justify-between h-16">
                    <div className="flex flex-row justify-start items-center">
                        <Link to="/news" className="flex flex-row items-center mr-5 hover:border-b-4 border-indigo-500">
                            <FcNews className="text-white rounded-lg w-9 h-9" /> News
                        </Link>
                        {auth &&
                            <Link to={"/favourites"} className="flex flex-row items-center hover:border-b-4 border-indigo-500">
                                <FcLike className="rounded-lg w-5 h-5" /> Favourites
                            </Link>
                        }
                        {/* {(auth && isAdmin) &&
                            <Link to={"/admin"} className="flex flex-row items-center ml-5 hover:border-b-4 border-indigo-500">
                                <FcBusinessman className="rounded-lg w-5 h-5" /> Search User
                            </Link>
                        } */}
                    </div>

                    <div className="flex flex-row justify-end items-center mr-3">

                        {!auth &&
                            <Link to={"/signup"} className="flex flex-row items-center ml-5 hover:border-b-4 border-indigo-500">
                                <RiUserAddFill className="rounded-lg w-5 h-5" /> Sign Up
                            </Link>
                        }
                        {!auth &&
                            <Link to={"/login"} className="flex flex-row items-center ml-5 hover:border-b-4 border-indigo-500">
                                <HiLogin className="rounded-lg w-5 h-5" /> Login
                            </Link>
                        }

                        {auth &&
                            <Link to={"#"} onClick={signOut} className="flex flex-row items-center ml-5 hover:border-b-4 border-indigo-500">
                                <HiLogin className="rounded-lg w-5 h-5" /> Logout
                            </Link>
                        }
                    </div>
                </div>
            </div>

            <div className="sm:hidden">
                <div className=" flex justify-between">
                    <Link to="/news" className="flex flex-row items-center "> <FcNews className="text-white rounded-lg w-12 h-10" /> News </Link>
                    <Button onClick={() => setShowMobilemenu(!showMobilemenu)} > <FcList className="rounded-lg w-8 h-8" /></Button>
                </div>
                {showMobilemenu &&
                    <div className="flex flex-col justify-center items-center">
                        {auth &&
                            <Link to={"/favourites"} className="flex flex-row items-center mb-2 hover:bg-white hover:text-black">
                                <FcLike className="rounded-lg w-5 h-5" /> Favourites</Link>}

                        {(auth && isAdmin) && <Link to={"/admin"} className="flex flex-row items-center mb-2 hover:bg-white hover:text-black ">
                            <FcBusinessman className="rounded-lg w-5 h-5" /> Search User</Link>}

                        {!auth && <Link to={"/signup"} className="flex flex-row items-center mb-2 hover:bg-white hover:text-black">
                            <RiUserAddFill className="rounded-lg w-5 h-5" /> Sign Up</Link>
                        }
                        {!auth &&
                            <Link to={"/login"} className="flex flex-row items-center mb-2 hover:bg-white hover:text-black">
                                <HiLogin className="rounded-lg w-5 h-5" /> Login</Link>}
                        {auth &&
                            <Link to={"#"} onClick={signOut} className="flex flex-row items-center ml-5 hover:border-b-4 border-indigo-500">
                                <HiLogin className="rounded-lg w-5 h-5" /> Logout
                            </Link>
                        }
                    </div>
                }
            </div>
        </nav>
    )
}

export default Header