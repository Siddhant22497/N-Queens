import React, { useState, useRef } from 'react'






function Game({ n }) {

    const [board, setBoard] = useState(Array.from({ length: n }, () => Array(n).fill('.')));

    const globalCount = useRef(0);

    if (globalCount == 0) {
        console.log("Global counter in top : " + globalCount);
        for (let i = 0; i < n; ++i) {
            let board2 = [];
            console.log("here we again");
            for (let j = 0; j < n; ++j) {
                board2.push(".");
            }
            board.push(board2);
        }
    }


    const [uwin, setUwin] = useState(0);

    const [issubmitted, setSubmitted] = useState(0);

    const checkboundary = (j, i) => {
        //j -> row  i->col
        let row = j;
        let col = i;
        --col;
         //left
        while (col >= 0) {
            if (board[row][col] == "Q") return 0;
            --col;
        }
        //right
        row = j;
        col = i;
        ++col;
        while (col < n) {
            if (board[row][col] == "Q") return 0;
            ++col;
        }
        //top
        row = j;
        col = i;
        --row;
        while (row >= 0) {
            if (board[row][col] == "Q") return 0;
            --row;
        }
        //bottom
        row = j;
        col = i;
        ++row;
        while (row < n) {
            if (board[row][col] == "Q") return 0;
            ++row;
        }
        //diagonally top left
        row = j;
        col = i;
        --col;
        --row;
        while (col >= 0 && row >= 0) {
            if (board[row][col] == "Q") return 0;
            --col;
            --row;
        }
        //diagonally top right
        row = j;
        col = i;
        ++col;
        --row;
        while (col < n && row >= 0) {
            if (board[row][col] == "Q") return 0;
            ++col;
            --row;
        }
        //diagonally bottom left
        row = j;
        col = i;
        --col;
        ++row;
        while (col >= 0 && row < n) {
            if (board[row][col] == "Q") return 0;
            --col;
            ++row;
        }
        //diagonally bottom right
        row = j;
        col = i;
        ++col;
        ++row;
        while (col < n && row < n) {
            if (board[row][col] == "Q") return 0;
            ++col;
            ++row;
        }
        return 1;
    }
    const check = (col) => {
        if (col >= n) {
            return 1;
        }
        for (let j = 0; j < n; ++j) {
            if (board[j][col] == "Q") {
                let result = checkboundary(j, col);
                if (result == 0) return 0;
                let result2 = check(col + 1);
                if (result2 === 0) return 0;

            }
        }
        return 1;
    }
    const toBeChecked = () => {
        if (globalCount.current < n || globalCount.current > n) return 0;
        let result = check(0);
        return result;
    }

    const saveTiles = (e) => {
        let coordinate = e.target.getAttribute('id');
        let sep = coordinate.split('');
        let i = sep[0];
        let j = sep[4];
        let value = e.target.textContent;



        const newBoard=board.map((row)=>[...row]);

        if (value === "") {
            e.target.textContent = "Q";
            newBoard[i][j] = "Q";
            globalCount.current += 1;
        }
        else {
            e.target.textContent = "";
            newBoard[i][j] = ".";
            globalCount.current -= 1;
        }
        setBoard(newBoard);
        console.log("Save Tiles");
        console.log(board);
    }

     const  submit=()=>{
        setSubmitted(1);
        let result = toBeChecked();
        if (result == 1) setUwin(1);
        else setUwin(0);
        console.log("Submit: ");
        console.log(board);
        // console.log(uwin);
        console.log("globalCount: " + globalCount.current);


    }
    async function reset() {
        setSubmitted(0);
        setUwin(0);
        globalCount.current = 0;
        const newBoard = board.map((row) => [...row]);
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                newBoard[i][j] = ".";
                let ele = document.getElementById(i + ' - ' + j + ' id');
                ele.textContent = "";

            }
        }
        setBoard(newBoard);
        console.log(board);
    }


    return (
        <>
            <table className=' m-auto border-8 mt-4'>
                <tbody className='flex flex-col justify-evenly'>
                    {[...Array(n)].map((_, i) => (

                        <tr key={i + ' key-row'} id={i + ' id'} className=' flex justify-between' >

                            {[...Array(n)].map((_, j) => (
                                <button onClick={(e) => saveTiles(e)} className={` ${
                                    (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)
                                      ? 'bg-gray-600'
                                      : 'bg-white'
                                  }`}><td key={i + ' - ' + j + ' key-row-data'} id={i + ' - ' + j + ' id'} className='rounded border-black border-2 w-16 h-10 text-center font-bold text-2xl'></td></button>
                            ))} 

                        </tr>

                    ))}
                </tbody>
            </table>
            <div className='flex justify-center mt-2'><button className="m-auto bg-green-700" onClick={submit}>Submit</button></div>
            <div className='flex justify-center mt-2' ><button className='bg-red-700' onClick={reset}>Reset</button></div>
            <p className="font-bold flex justify-center">
                {
                    uwin && issubmitted ? `Congratulations! You've successfully solved the ${n}-Queens puzzle!` : ""
                }
            </p>
            <p className="font-bold flex justify-center">{
                !uwin && issubmitted ? "Wrong Combination. Try again!" : ""
            }
            </p>

        </>
    )
}

export default Game;

