const baseURL = 'https://educafacilapi.azurewebsites.net'

export async function login(email, senha) {
    return fetch(`${baseURL}/api/Auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text'
        },
        body: JSON.stringify({ email, senha }),
        mode: "no-cors",
    }).then(r => r.text()).catch(e => console.log(e))
}