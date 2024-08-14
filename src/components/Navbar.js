import React, { Component } from 'react'


function Navbar()
{
    return  (
        <>
            <div className='navbar h-14 pl-10 bg-gray-700'>
                <span className='text-3xl relative top-2 text-white'> N Queens</span>
                <a className="float-right sticky top-2 right-12"  href="https://github.com/Siddhant22497/N-Queens" target="_blank"><img src={require('../github-mark/github-mark-white.png')} alt="github-link" width="40" /></a>
            </div>
        </>
    )
}

export default Navbar;