import { SlMenu } from 'react-icons/sl';
import {RxCross1 } from 'react-icons/rx';
import NavLink from "../NavLink/NavLink";
import { useState } from 'react';


const Navbar = () => {
    const routes =[
        {id:1, path:'/', name:'Home'},
        {id:2, path:'/about', name:'About'},
        {id:3, path:'/services', name:'Services'},
        {id:4, path:'/contact', name:'Contact'},
        {id:5, path:'*', name:'Not Found'},
    ]

    const [open, setOpen] = useState(false)
    
    return (
        <nav>
            
            <div className='text-3xl md:hidden bg-amber-300 p-2' onClick={() => setOpen(!open)}>
                 {
                    open === true ? <SlMenu></SlMenu> : <RxCross1></RxCross1>
                 }
            </div>

            <ul className={`md:flex md:static absolute duration-2000 bg-amber-300 p-4 
              ${!open ? 'top-10' : '-top-52'}
             `}>
            {
                routes.map(route => <NavLink route={route}></NavLink>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;