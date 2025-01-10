import React, { Component, useState } from 'react'


function Navbar() {
    const [showDemo, setShowDemo] = useState(false);
    const toggle = () => {
        setShowDemo(!showDemo);
    }
    return (
        <>
            {showDemo && <div className='modal-background fixed top-0 left-0 w-full h-full   z-10 bg-black bg-opacity-50'></div>}
            {showDemo &&
                <div className='fixed mt-[12vh] left-[25vw] h-[70vh] w-[50vw] z-20 rounded-2xl bg-gray-700' >
                    <div className='mt-[2vh] ml-[1vw]'><span className='text-white h-[10vh] relative top-[1vh] text-[2.5vw] '>What is N Queens</span><button onClick={toggle} className='h-[7vh] bg-red-500 box-content hover:bg-red-700 hover:scale-105 text-[1.5vw] w-[5vw] border-white border-4 float-right mr-[2vw]'>Close</button></div>
                    <div className='mt-[5vh] text-white pl-[1vw] text-[1.5vw]'>
                        The <span className='font-bold'>N-Queens</span>  problem is a classic puzzle in computer science and mathematics, which is typically used to demonstrate concepts in backtracking and combinatorial optimization.
                    </div>
                    <h1 className=' text-white pl-[1vw] mt-[3vh] text-[2.5vw]'>How to Play</h1>
                    <ol className='text-white  pl-[2.5vw] text-[1.5vw] mt-[2vh] list-decimal' type='1'>
                        <li>No two queens can be in the same row.</li>
                        <li>No two queens can be in the same column.</li>
                        <li>No two queens can be on the same diagonal.</li>
                    </ol>
                </div >}
            <div className='navbar h-[11vh] bg-gray-700 bg-fixed flex items-center' style={{ width: "100%" }}>
                <span className='relative float-left top-[0.1vh] left-[1vw] text-white text-[1.7vw]'>N Queens</span>
                <div className='inline-flex h-[8vh] w-[18vw] ml-[5vw] mt-[0.2vh]'>
                    <button onClick={toggle} className='text-white rounded-lg border-white border-4 text-[1vw] hover:scale-105'>
                        What is N Queens/How to play it
                    </button>
                </div>
                <a className="ml-auto mr-[1vw] mt-[0.2vh]" href="https://github.com/Siddhant22497/N-Queens" target="_blank">
                    <img src={require('../github-mark/github-mark-white.png')} alt="github-link" className='h-[6.5vh]' />
                </a>
            </div>

        </>
    )
}

export default Navbar;