/*
import React, { useState, useEffect } from "react";
import "./die.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store, { setCurrentPlayer, setHistory  } from "./store";
import Board from "./board.js";

function Die() {
    const currentPlayer = useSelector(state => state.currentPlayer);
    const history = useSelector(state => state.history);
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);
    const [rolling, setRolling] = useState(false);
    const navigate = useNavigate();

    

    useEffect(() => {
        let interval;
        if (rolling) {
            interval = setInterval(() => {
                setValue(Math.floor(Math.random() * 6) + 1);
            }, 50);
        }
        return () => clearInterval(interval);
    }, [rolling]);
    
    const handleRoll = () => {
        if (rolling) {
            const currentPlayerHistory = history.filter(entry => entry.player === currentPlayer);
            const currentPlayerTotal = currentPlayerHistory.reduce((total, entry) => total + entry.roll, 0);
            const newTotal = currentPlayerTotal + value;

            if (newTotal === 100) {
                dispatch(setHistory([...history, { player: currentPlayer, roll: value }]));
                const confirmed = window.confirm(`Player ${currentPlayer} wins! Press "OK" to end the game.`);
                if (confirmed) {
                    dispatch(setHistory([]));
                    dispatch(setCurrentPlayer(1));
                    navigate("/");
                } 
                return;
            } else if (newTotal > 100) {
                dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
            } else {
                dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
                dispatch(setHistory([...history, { player: currentPlayer, roll: value }]));
            }
        }
        setRolling(!rolling);
    };




    const handleSubmit = event => {
        event.preventDefault();
        dispatch(setHistory([]));
        dispatch(setCurrentPlayer(1));
        navigate("/");
    };

    return (
        <div className="dice-container">
            <div className="dicer">
                <div id="die" className="dice">
                    {[...Array(value)].map((_, i) => {
                        const cls = value % 2 === 0 ? "even-" : "odd-";
                        return <div key={i} className={`dot ${cls}${i + 1}`} />;
                    })}
                </div>
            </div>
            <button onClick={handleRoll}>{rolling ? "Pause" : "Roll"}</button>
            <h1>Player {currentPlayer}: Dice: {value} </h1>
            <div>
                <h2>Player 1 Rolls:</h2>
                <ul>
                    {history.filter(entry => entry.player === 1).map((entry, index) => (
                        <li key={index}>
                            Roll {index + 1}: {entry.roll}
                        </li>
                    ))}
                    <li>
                        Total:{" "}
                        {history.filter(entry => entry.player === 1).reduce((total, entry) => total + entry.roll, 0)}
                    </li>
                </ul>
                <h2>Player 2 Rolls:</h2>
                <ul>
                    {history.filter(entry => entry.player === 2).map((entry, index) => (
                        <li key={index}>
                            Roll {index + 1}: {entry.roll}
                        </li>
                    ))}
                    <li>
                        Total:{" "}
                        {history.filter(entry => entry.player === 2).reduce((total, entry) => total + entry.roll, 0)}
                    </li>
                    </ul>
            </div>
            <button onClick={handleSubmit} style={{ position: "absolute", right: "10px", top:"10px"}}>
                Quit
            </button>
            <div className="b">
                <Board p1={history.filter(entry => entry.player === 1).reduce((total, entry) => total + entry.roll, -1)} p2={history.filter(entry => entry.player === 2).reduce((total, entry) => total + entry.roll, -1)} />
            </div>    
        </div>
        
    );
}


export default Die;
*/

/*
import React, { useState, useEffect } from "react";
import "./die.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store, { setCurrentPlayer, setHistory  } from "./store";
import Board from "./board.js";

function Die() {
    const currentPlayer = useSelector(state => state.currentPlayer);
    const history = useSelector(state => state.history);
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);
    const [rolling, setRolling] = useState(false);
    const navigate = useNavigate();

    

    useEffect(() => {
        let interval;
        if (rolling) {
            interval = setInterval(() => {
                setValue(Math.floor(Math.random() * 6) + 1);
            }, 50);
        }
        return () => clearInterval(interval);
    }, [rolling]);
    
    const handleRoll = () => {
        if (rolling) {
            const currentPlayerHistory = history.filter(entry => entry.player === currentPlayer);
            const currentPlayerTotal = currentPlayerHistory.reduce((total, entry) => total + entry.roll, 0);
            const newTotal = currentPlayerTotal + value;

            if (newTotal === 100) {
                dispatch(setHistory([...history, { player: currentPlayer, roll: value }]));
                const confirmed = window.confirm(`Player ${currentPlayer} wins! Press "OK" to end the game.`);
                if (confirmed) {
                    dispatch(setHistory([]));
                    dispatch(setCurrentPlayer(1));
                    navigate("/");
                } 
                return;
            } else if (newTotal > 100) {
                dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
            } else {
                dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
                dispatch(setHistory([...history, { player: currentPlayer, roll: value }]));
            }
        }
        setRolling(!rolling);
    };




    const handleSubmit = event => {
        event.preventDefault();
        dispatch(setHistory([]));
        dispatch(setCurrentPlayer(1));
        navigate("/");
    };

    return (
        <div className="dice-container">
            <div className="dicer">
                <div id="die" className="dice">
                    {[...Array(value)].map((_, i) => {
                        const cls = value % 2 === 0 ? "even-" : "odd-";
                        return <div key={i} className={`dot ${cls}${i + 1}`} />;
                    })}
                </div>
            </div>
            <button onClick={handleRoll}>{rolling ? "Pause" : "Roll"}</button>
            <h1>Player {currentPlayer}: Dice: {value} </h1>
            <div>
                <h2>Player 1 Rolls:</h2>
                <ul>
                    {history.filter(entry => entry.player === 1).map((entry, index) => (
                        <li key={index}>
                            Roll {index + 1}: {entry.roll}
                        </li>
                    ))}
                    <li>
                        Total:{" "}
                        {history.filter(entry => entry.player === 1).reduce((total, entry) => {
                            const nayaTotal = total + entry.roll;
                            if (nayaTotal === 98) {
                                return 20;
                            } else if (nayaTotal === 67) {
                                return 50;
                            } else if (nayaTotal === 43) {
                                return 76;
                            } else if (nayaTotal === 12) {
                                return 92;        
                            } else {
                                return nayaTotal;
                            }
                        }, 0)}
                    </li>
                </ul>
                <h2>Player 2 Rolls:</h2>
                <ul>
                    {history.filter(entry => entry.player === 2).map((entry, index) => (
                        <li key={index}>
                            Roll {index + 1}: {entry.roll}
                        </li>
                    ))}
                    <li>
                        Total:{" "}
                        {history.filter(entry => entry.player === 2).reduce((total, entry) => {
                            const nayaTotal = total + entry.roll;
                            if (nayaTotal === 98) {
                                return 20;
                            } else if (nayaTotal === 67) {
                                return 50;
                            } else if (nayaTotal === 43) {
                                return 76;
                            } else if (nayaTotal === 12) {
                                return 92;        
                            } else {
                                return nayaTotal;
                            }
                        }, 0)}
                    </li>
                    </ul>
            </div>
            <button onClick={handleSubmit} style={{ position: "absolute", right: "10px", top:"10px"}}>
                Quit
            </button>
            <div className="b">
                <Board p1={history.filter(entry => entry.player === 1).reduce((total, entry) => {
                            const nayaTotal = total + entry.roll;
                            if (nayaTotal === 97) {
                                return 19;
                            } else if (nayaTotal === 66) {
                                return 49;
                            } else if (nayaTotal === 42) {
                                return 75;
                            } else if (nayaTotal === 11) {
                                return 91;        
                            } else {
                                return nayaTotal;
                            }
                        }, -1)}
                        p2={history.filter(entry => entry.player === 2).reduce((total, entry) => {
                            const nayaTotal = total + entry.roll;
                            if (nayaTotal === 97) {
                                return 19;
                            } else if (nayaTotal === 66) {
                                return 49;
                            } else if (nayaTotal === 42) {
                                return 75;
                            } else if (nayaTotal === 11) {
                                return 91;        
                            } else {
                                return nayaTotal;
                            }
                        }, -1)}
                />
            </div>    
        </div>
        
    );
}


export default Die;
*/


import React, { useState, useEffect } from "react";
import "./die.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store, { setCurrentPlayer, setHistory  } from "./store";
import Board from "./board.js";

function Die() {
    const currentPlayer = useSelector(state => state.currentPlayer);
    const history = useSelector(state => state.history);
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);
    const [rolling, setRolling] = useState(false);
    const navigate = useNavigate();

    

    useEffect(() => {
        let interval;
        if (rolling) {
            interval = setInterval(() => {
                setValue(Math.floor(Math.random() * 6) + 1);
            }, 50);
        }
        return () => clearInterval(interval);
    }, [rolling]);
    

    const handleRoll = () => {
        if (rolling) {
            const total = history.filter((entry) => entry.player === currentPlayer).reduce((total, entry) => {
                const nayaTotal = total + entry.roll;
                if (nayaTotal === 98) {
                    return 20;
                } else if (nayaTotal === 67) {
                    return 50;
                } else if (nayaTotal === 43) {
                    return 76;
                } else if (nayaTotal === 12) {
                    return 92;
                } else {
                    return nayaTotal;
                }
            },0);

            const newTotal = total + value;
            if (newTotal === 100) {
                dispatch(setHistory([...history, { player: currentPlayer, roll: value }]));
                const confirmed = window.confirm(`Player ${currentPlayer} wins! Press "OK" to end the game.`);
                if (confirmed) {
                    dispatch(setHistory([]));
                    dispatch(setCurrentPlayer(1));
                    navigate("/");
                } 
            return;
        
            } else if (newTotal > 100) {
                dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
            } else {
                dispatch(setHistory([...history, { player: currentPlayer, roll: value }]));
                dispatch(setCurrentPlayer(currentPlayer === 1 ? 2 : 1));
            }
        }
        setRolling(!rolling);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(setHistory([]));
        dispatch(setCurrentPlayer(1));
        navigate("/");
    };

    return (
        <div className="dice-container">
            <div className="dicer">
                <div id="die" className="dice">
                    {[...Array(value)].map((_, i) => {
                        const cls = value % 2 === 0 ? "even-" : "odd-";
                        return <div key={i} className={`dot ${cls}${i + 1}`} />;
                    })}
                </div>
            </div>
            <button onClick={handleRoll}>{rolling ? "Pause" : "Roll"}</button>
            <h1>Player {currentPlayer}: Dice: {value} </h1>
            <div>
                <h2>Player 1 Rolls:</h2>
                <ul>
                    {history.filter(entry => entry.player === 1).map((entry, index) => (
                        <li key={index}>
                            Roll {index + 1}: {entry.roll}
                        </li>
                    ))}
                    <li>
                        Total:{" "}
                        {history.filter(entry => entry.player === 1).reduce((total, entry) => {
                            const nayaTotal = total + entry.roll;
                            if (nayaTotal === 98) {
                                return 20;
                            } else if (nayaTotal === 67) {
                                return 50;
                            } else if (nayaTotal === 43) {
                                return 76;
                            } else if (nayaTotal === 12) {
                                return 92;        
                            } else {
                                return nayaTotal;
                            }
                        }, 0)}
                    </li>
                </ul>
                <h2>Player 2 Rolls:</h2>
                <ul>
                    {history.filter(entry => entry.player === 2).map((entry, index) => (
                        <li key={index}>
                            Roll {index + 1}: {entry.roll}
                        </li>
                    ))}
                    <li>
                        Total:{" "}
                        {history.filter(entry => entry.player === 2).reduce((total, entry) => {
                            const nayaTotal = total + entry.roll;
                            if (nayaTotal === 98) {
                                return 20;
                            } else if (nayaTotal === 67) {
                                return 50;
                            } else if (nayaTotal === 43) {
                                return 76;
                            } else if (nayaTotal === 12) {
                                return 92;        
                            } else {
                                return nayaTotal;
                            }
                        }, 0)}
                    </li>
                </ul>
            </div>
            <button onClick={handleSubmit} style={{ position: "absolute", right: "10px", top:"10px"}}>
                Quit
            </button>
            <div className="b">
                <Board
                />
            </div>    
        </div>
        
    );
}


export default Die;

