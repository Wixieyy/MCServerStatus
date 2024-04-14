"use strict";
async function fetchData() {
    const address = document.getElementById('input-box');
    const result = document.getElementById('result-text');
    try {
        const input = 'https://api.mcsrvstat.us/3/' + address.value;
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
function changeVersion() {
    const button = document.getElementById('mcversion');
    if (button.textContent === "Java Edition") {
        button.textContent = "Bedrock Edition";
    }
    else {
        button.textContent = "Java Edition";
    }
}
