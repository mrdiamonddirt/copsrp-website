import React from "react";
import "./Discord.css";

const Discord = () => {
    return (
        <div className="discord-details">
        <iframe className="discord-iframe"
            src="https://discord.com/widget?id=356504730786201600&theme=dark"
            allowtransparency="true"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
        </div>
    );
    };

export default Discord;