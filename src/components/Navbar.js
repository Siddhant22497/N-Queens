import React, { Component, useState } from 'react'


function Navbar() {
    const [showDemo, setShowDemo] = useState(false);
    const toggle = () => {
        setShowDemo(!showDemo);
    }
    return (
        <>
            {showDemo == true && <div className='modal-background fixed top-0 left-0 w-full h-full   z-10 bg-black bg-opacity-50'></div>}
            {showDemo &&
                <div className='fixed top-10 left-[25vw] h-[80vh] w-[50vw] z-20 rounded-2xl bg-gray-700' >
                    <div className='mt-[2vh] ml-[1vw]'><span className='text-white h-[10vh] relative top-[1vh] text-4xl '>What is N Queens</span><button onClick={toggle} className='h-[7vh] bg-red-500  hover:bg-red-700 hover:scale-105 w-[5vw] border-white border-4 float-right mr-[2vw]'>Close</button></div>
                    <div className='mt-[5vh] text-white pl-[1vw] text-xl'>
                        The <span className='font-bold'>N-Queens</span>  problem is a classic puzzle in computer science and mathematics, which is typically used to demonstrate concepts in backtracking and combinatorial optimization.
                    </div>
                    <h1 className=' text-white pl-[1vw] mt-[3vh] text-4xl'>How to Play</h1>
                    <ol className='text-white pl-[2.5vw] text-xl mt-[2vh] list-decimal' type='1'>
                        <li>No two queens can be in the same row.</li>
                        <li>No two queens can be in the same column.</li>
                        <li>No two queens can be on the same diagonal.</li>
                    </ol>
                </div >}
<div className='navbar h-14 pl-10 bg-gray-700 bg-fixed'>
    <span className='text-3xl relative top-2 text-white'> N Queens</span>
    <button onClick={toggle} className='text-white h-[8vh] rounded-lg border-white border-4 w-[20vw] hover:scale-105 mt-[0.5vh] ml-[5vw]'>What is N Queens/How to play it</button>
    <a className="float-right sticky top-2 right-12" href="https://github.com/Siddhant22497/N-Queens" target="_blank"><img src={require('../github-mark/github-mark-white.png')} alt="github-link" width="40" /></a>
</div>
        </>
    )
}

export default Navbar;