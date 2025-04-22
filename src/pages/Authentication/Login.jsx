// src/components/Login.jsx
import React, { useEffect, useState } from 'react';
import useStore from '../../store';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom';
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Footer from "@/layout/NoAuthLayout/Footer";

function Login() {
    //--------------------importing the useStore hook from the store folder
    const { emailLogin, auth, googleLogin } = useStore();
    //---------------------------------------------------------------------

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await emailLogin(email, password);
        if (success) {
            navigate('/dashboard');
        }
    };

    const googleResponse = async () => {
        const { success, path } = await googleLogin();
        if (success === true) {
            if (path) {
                navigate(path);
            } else {
                console.log('Path not found');
            }
        } else {
            console.log('Google Sign-In Error');
        }
    };

    const [showForm, setShowForm] = useState(true);


    //function detect mouse movement and set hideForm to true to hide the form if user has not moved their mouse and make it visible again if they do
    const handleDoubleClick = () => {
        setShowForm(true);
    }


    useEffect(() => {
        //console.log('login page');
        document.title = 'Login | EduSoftHub';
        if (showForm) {
            setTimeout(() => {
                setShowForm(false);
            }, 30000);
        }

    }, [showForm]);



    return (
        <React.Fragment >
            <div
                tabIndex="0" // Make div focusable
                role="button"
                onDoubleClick={handleDoubleClick}
                onKeyDown={handleDoubleClick}
                className="outline-none"
                onClick={handleDoubleClick}
            >
                <BackgroundGradientAnimation className="z-0" >
                    {/*loginLoading && <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        <BackgroundLines />
                    </div>*/}

                    {!showForm && <div className="absolute bottom-0 w-full flex justify-center mb-10">
                        <h2>Click or press any key to see Login !</h2>
                    </div>
                    }


                </BackgroundGradientAnimation>
                <div
                    className={`
                    fixed top-0 flex flex-col h-screen w-full 
                    items-center justify-center px-4 
                    transition-opacity duration-1000 ease-in-out
                    ${showForm
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'
                        }
    `}
                >
                    <Card className="mx-auto max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl text">Log In to <a href='https://edusofthub.com' className='underline'>EduSoftHub</a></CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="__name@edeninternational.edu.in" required />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <Link href="#" className="ml-auto inline-block text-sm underline">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" required placeholder="**********" />

                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                <Button variant="outline" className="w-full relative overflow-hidden group"
                                    onClick={() => {
                                        googleResponse();
                                    }
                                    }
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] opacity-75 group-hover:animate-spin-slow"></div>
                                    <div className="relative  p-0.5 w-full h-full flex items-center justify-center">
                                        <div style={{ width: "20px", marginRight: "10px" }}>
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 48 48"
                                                style={{ display: "block" }}
                                            >
                                                <path
                                                    fill="#EA4335"
                                                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                                ></path>
                                                <path
                                                    fill="#4285F4"
                                                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                                ></path>
                                                <path
                                                    fill="#FBBC05"
                                                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                                ></path>
                                                <path
                                                    fill="#34A853"
                                                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    d="M0 0h48v48H0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="gsi-material-button-contents ">
                                            Sign in with Google
                                        </span>
                                    </div>
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                    <p className="text-center mt-4 text-xs">© {new Date().getFullYear()} EduSoftHub. Crafted with ❤️
                        by {" "}
                        <a href="https://github.com/5u00n" className='underline'>{"5u00n"}</a>
                    </p>

                    <div className="absolute bottom-0 left-0 right-0">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Login;