"use strict";
const address = document.getElementById('input-box');
const resultDiv = document.getElementById('result-div');
const serverName = document.getElementById('server-name');
const serverMotd = document.getElementById('server-motd');
const serverOnline = document.getElementById('server-online');
const serverIp = document.getElementById('server-ip');
const serverPort = document.getElementById('server-port');
const serverVersion = document.getElementById('server-version');
const serverPlayersMax = document.getElementById('server-players-max');
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
                serverName.textContent = `Server name: ${data.motd.clean[0]}`;
                serverMotd.textContent = `Server MOTD: ${data.motd.clean[1]}`;
                serverOnline.textContent = 'Server status: Online';
                serverIp.textContent = `Server IP: ${data.ip}`;
                serverPort.textContent = `Server port: ${data.port}`;
                serverVersion.textContent = `Server version: ${data.version}`;
                serverPlayersMax.textContent = `Server players: ${data.players.online} - ${data.players.max}`;
                break;
            case false:
                serverOnline.textContent = 'Server status: Offline';
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
