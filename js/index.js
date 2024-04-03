async function fetchData() {
    const address = document.getElementById('input-box')
    const result = document.getElementById('result-text')

    try {
        const input = 'https://api.mcsrvstat.us/3/' + address.value
        const response = await fetch (input)
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }

        const data = await response.json()

        const status = data.online
        switch (status) {
            case true:

                result.textContent = 'The server is online'
                break;
            case false:
                result.textContent = 'The server is offline'
                break;
        }

    } catch (error) {
        console.error(error)
    }
}