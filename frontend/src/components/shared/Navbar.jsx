import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import React from 'react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
import { PopoverContent } from '../ui/popover';
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"
import { LogOut, User2 } from 'lucide-react';
 

const Navbar = () => {
  let user=false;
  return (
    <div className='bg-white'>
    <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
       <div >
        <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
      </div>
      <div className='flex items-center gap-12'>
      <ul className='flex font-medium items-center gap-5'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/jobs'>Jobs</Link></li>
        <li><Link to='/browse'>Browse</Link></li>
      </ul>
      
      {
        !user?(
         <div className='flex items-center gap-2'>
           <Link to='/login'>
          <Button variant='outline'>Login</Button>
          </Link>
          <Link to='/signup'>
          <Button className='bg-[#6A38C2] hover:bg-[#5b30a6] text-white'>Signup</Button>
          </Link>
          </div>
        ):(<Popover>
          <PopoverTrigger asChild>
          <Avatar className='cursor-pointer'>
               <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
          <div className='flex gap-4 space-y-2'>
          <Avatar className='cursor-pointer'>
               <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div>
          <h4 className='font-medium'>Rahul Kumar Pandey</h4>
          <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
          </div>
          </div>
          <div>
          <div className='flex w-fit items-center gap-2 cursor-pointer'>
          <User2/>
          <Button variant='link'>View Profile </Button>
          </div>
          <div className='flex w-fit items-center gap-2 cursor-pointer'>
            <LogOut/>
          <Button variant='link'>Logout </Button>
          </div>
          </div>
          </PopoverContent>
        </Popover>)
      }
      </div>
    </div>
    </div>
  )
}

export default Navbar;
