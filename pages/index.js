import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Layout from '@/components/layout'


function Home () {
  const {data:session} =useSession();
  if (!session) return
  return <Layout>
    <div className="text-blue-900 flex gap-2 justify-between ">
      <h1>

      hello, <b>{session?.user?.name}</b>
      </h1>
      <div className='flex gap-3 bg-gray-300 text-black rounded-lg overflow-hidden'>

      <img src={session?.user?.image} alt="" className='w-6 h-6 ' />
      {session?.user?.email}
      </div>
    </div>

  </Layout>

}




export default Home
