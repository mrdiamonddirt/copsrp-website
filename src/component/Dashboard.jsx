import React, {useEffect, useState} from "react";
import './Dashboard.css'
import image from '../assets/1.png'

const Dashboard = () => {

    const [CommandSent, setCommandSent] = useState('');


    useEffect(() => {
        const textLine = document.querySelector('#text-line');
        textLine.innerHTML = 'CopsRP:~$ ';
        setInterval(() => {
            if (textLine.innerHTML === 'CopsRP:~$ _') {
                textLine.innerHTML = 'CopsRP:~$ ';
            } else {
                textLine.innerHTML = 'CopsRP:~$ _';
            }
        }, 500);
    }), [];

    function CommandSetHandler() {
        setCommandSent(document.querySelector('#commandInput').value);
        console.log(CommandSent);
        const commandSent = document.querySelector('#commandSent');
        commandSent.innerHTML = CommandSent;
    }

    return (
        <div style={{backgroundImage: `url(${image})`, width: "100%", height: "100vh"}}>
        <h1 className="font-face-due-date">Dashboard</h1>
        <p>The Dashboard is Currently Under Development</p>
        {/* create a console like environment */}
        <div className="console-container">
        <div style={{width: 600, height: 20, backgroundColor: 'grey', display: 'flex', justifyContent: 'flex-end'}}><button >X</button></div>
         
        <div style={{width: 600, height: 200, backgroundColor: 'blue'}}>
                <input type="text" placeholder="Enter Command" id="commandInput"></input>
                <button type="submit" onClick={() => CommandSetHandler()}>Submit</button>
            <div style={{width: 600, height: 200, backgroundColor: 'black'}}>
                {/* blinking cursor */
                }
                <p style={{color: 'white', textAlign:'left', padding: 10}} id='text-line'></p>
                {/* <p style={{color: 'white', textAlign:'left', padding: 10}} id='commandSent'></p> */}
                </div>
       
        </div>
        </div>
        </div>
    );
    }

export default Dashboard;