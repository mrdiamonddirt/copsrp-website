import React from "react";
import { BsDiscord } from "react-icons/bs";


const Home = () => {
    return (
        <div>
        <h1 className="font-face-due-date">Home</h1>
        <p>CopsRP is a FiveM Roleplay Community</p>
        {/* give a brief explaination of the server and the community */}
        <p>We Are always looking to expand the community and currently the best way of doing that is via Discord.</p>
        <h2>Discord: <a href="https://discord.gg/uu8MXcM">https://discord.gg/uu8MXcM</a></h2>
        <p>Our server is based on the QBCore framework and is a Leo roleplay server.</p>
        {/* links to the discord server and the game server link */}
        {/* <BsDiscord className="discord-icon"/> */}
        <h2>Game Server: <a href="cfx.re/join/zll4yd">cfx.re/join/zll4yd</a></h2>
        </div>
    );
    }

export default Home;
