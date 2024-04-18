"use strict";
const address = document.getElementById('input-box');
const resultDiv = document.getElementById('result-div');
const serverName = document.getElementById('server-name');
const serverMotd = document.getElementById('server-motd');
const serverOnline = document.getElementById('server-online');
const serverIp = document.getElementById('server-ip');
const serverPort = document.getElementById('server-port');
const serverVersion = document.getElementById('server-version');
const serverPlayersMax = document.getElementById('server-version');
async function fetchData() {
    let input = () => {
        if (button.textContent === 'Java Edition') {
            return `https://api.mcsrvstat.us/3/${address.value}`;
        }
        else {
            return `https://api.mcsrvstat.us/bedrock/3/${address.value}`;
        }
    };
    try {
        const response = await fetch(input());
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        const status = data.online;
        switch (status) {
            case true:
                serverIp.textContent = `Server IP: ${data.ip}`;
                break;
            case false:
                serverOnline.textContent = 'The server is offline';
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
}
const button = document.getElementById('mcversion');
function changeVersion() {
    if (button.textContent === "Java Edition") {
        button.textContent = "Bedrock Edition";
    }
    else {
        button.textContent = "Java Edition";
    }
}
