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
async function fetchData(s) {
    let input;
    try {
        input = s + address.value;
        const response = await fetch(input);
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        const status = data.online;
        switch (status) {
            case true:
                const serverName = data.debug.dns.a[0].name;
                result.textContent = serverName;
                break;
            case false:
                result.textContent = 'The server is offline';
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
        fetchData('https://api.mcsrvstat.us/3/');
    }
    else {
        button.textContent = "Java Edition";
        fetchData('https://api.mcsrvstat.us/bedrock/3/');
    }
}
