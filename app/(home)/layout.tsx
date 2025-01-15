
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div className='border-b'>
            <nav className='max-w-7xl mx-auto py-2 flex items-center justify-between'>
                <div>
                <h1 className='text-2xl font-bold'>Formify.ai</h1>
                </div>
                <div className='flex items-center'>
                    <Button variant={"link"}>Dashboard</Button>
                    <UserButton/>

                </div>
            </nav>
        </div>
        {children}
    </div>
  )
}

export default layout