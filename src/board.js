/*
import React, { useState, useEffect } from 'react';
import "./board.css";
import ladder from './ladder.jpg';
import snake from './snake.png';


const Board = ({p1,p2}) => {
    const [position1, setPosition1] = useState(0);
    const [position2, setPosition2] = useState(0);

    console.log('p1', p1);

    useEffect(() => {
        setPosition1(p1)
        setPosition2(p2)
    }, [p1, p2]);

    

    const renderSquare = (index) => {
        const squareNumber = index + 1;
        const rowNumber = Math.floor((squareNumber - 1) / 10);
        const colNumber = (squareNumber - 1) % 10;
        const isEvenRow = rowNumber % 2 === 0;
        const isEvenColumn = colNumber % 2 === 0;
        const isSnakeStart = index === 32;
        const isSnakeEnd = index === 18;
        const isLadderStart = index === 43;
        const isLadderEnd = index === 11;

        const squareClassNames = ['board-square'];
        if (isEvenRow === isEvenColumn) {
            squareClassNames.push('even');
        } else {
            squareClassNames.push('odd');
        }

        if (index === position1) {
            squareClassNames.push('active1');
        }

        if (index === position2) {
            squareClassNames.push('active2');
        }


        return (
            <div key={index} className={squareClassNames.join(' ')} >
                {isSnakeStart && <img src={snake} alt="Snake" className="snake-image" />}
                {isLadderStart && <img src={ladder} alt="Ladder" className="ladder-image" />}
                {squareNumber}
                {isSnakeEnd && <img src={snake} alt="Snake" className="snake-imageww" />}
                {isLadderEnd && <img src={ladder} alt="Ladder" className="ladder-imageww" />}
            </div>
        );
    };


    const renderRow = (rowIndex) => {
        const squares = [];
        const startingIndex = rowIndex * 10;
        for (let i = 0; i < 10; i++) {
            const index = startingIndex + (rowIndex % 2 === 0 ? i : 9 - i);
            squares.push(renderSquare(index));
        }
        return <div key={rowIndex} className="board-row">{squares}</div>;
    };


    const rows = [];
    for (let i = 9; i >= 0; i--) {
        rows.push(renderRow(i));
    }

    return (
        <div className="board">
            {rows}
        </div>
    );
};

export default Board;
*/

import React, { useState, useEffect } from 'react';
import "./board.css";
import ladder from './ladder.jpg';
import snake from './snake.png';
import { useSelector } from "react-redux";
import store, { getPlayerPositions } from "./store";


const Board = () => {
    const playerPositions = useSelector(getPlayerPositions);
    const p1 = playerPositions.p1;
    const p2 = playerPositions.p2;


    const renderSquare = (index) => {
        const squareNumber = index + 1;
        const rowNumber = Math.floor((squareNumber - 1) / 10);
        const colNumber = (squareNumber - 1) % 10;
        const isEvenRow = rowNumber % 2 === 0;
        const isEvenColumn = colNumber % 2 === 0;
        const isSnakeStart = index === 32;
        const isSnakeEnd = index === 18;
        const isLadderStart = index === 43;
        const isLadderEnd = index === 11;

        const squareClassNames = ['board-square'];
        if (isEvenRow === isEvenColumn) {
            squareClassNames.push('even');
        } else {
            squareClassNames.push('odd');
        }

        if (index === p1) {
            squareClassNames.push('active1');
        }

        if (index === p2) {
            squareClassNames.push('active2');
        }


        return (
            <div key={index} className={squareClassNames.join(' ')} >
                {isSnakeStart && <img src={snake} alt="Snake" className="snake-image" />}
                {isLadderStart && <img src={ladder} alt="Ladder" className="ladder-image" />}
                {squareNumber}
                {isSnakeEnd && <img src={snake} alt="Snake" className="snake-imageww" />}
                {isLadderEnd && <img src={ladder} alt="Ladder" className="ladder-imageww" />}
            </div>
        );
    };


    const renderRow = (rowIndex) => { 
        const squares = [];
        const startingIndex = rowIndex * 10; //starting index of each row
        for (let i = 0; i < 10; i++) {
            const index = startingIndex + (rowIndex % 2 === 0 ? i : 9 - i);
            squares.push(renderSquare(index));
        }
        return <div key={rowIndex} className="board-row">{squares}</div>;
    };


    const rows = [];
    for (let i = 9; i >= 0; i--) {
        rows.push(renderRow(i));
    }

    return (
        <div className="board">
            {rows}
        </div>
    );
};

export default Board;