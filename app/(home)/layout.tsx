
import { DarkMode } from '@/components/Darkmode'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div className='border-b'>
        <nav className="flex items-center justify-between max-w-7xl mx-auto py-2">
                <div>
                <h1 className='text-2xl font-bold'>Formify.ai</h1>
                </div>
                <div className='flex items-center'>
                    <Button variant={"link"}>Dashboard</Button>
                    <UserButton/>
                    <DarkMode/>

                </div>
            </nav>
        </div>
        {children}
    </div>
  )
}

export default layout