import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from './login';
import Signup from './signup';


const Auth = () => {

  const [searchParams] = useSearchParams();
  const longlink = searchParams.get("createNew");
  const navigate = useNavigate();

  const {isAuthenticated, loading} = useState();

  useEffect(() => {
    if(isAuthenticated && !loading){
        navigate(`/dashboard?${longlink ? `createNew=${longlink}` : ""}`);
    }
  }, [isAuthenticated, loading])

  return (
    <div className='mt-36 flex flex-col items-center gap-10'>
        <h1 className='text-5xl font-extrabold'>
            {
                longlink
                ? "Hold up! Let's login first..."
                : "Login / Signup"
            }
        </h1>
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Login/>
            </TabsContent>
            <TabsContent value="signup">
                <Signup/>
            </TabsContent>
        </Tabs>

    </div>
  )
}

export default Auth