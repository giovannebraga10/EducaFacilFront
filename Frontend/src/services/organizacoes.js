const baseURL = 'https://educafacilapi.azurewebsites.net'

export async function obterOrganizacoes() {
    return fetch(`${baseURL}/api/Organizacoes`, {mode: "no-cors"}).then(r => r.json())
}

export async function obterOrganizacao(id) {
    return fetch(`${baseURL}/api/Organizacoes/${id}`, {mode: "no-cors"}).then(r => r.json())
}

export async function cadastrarOrganizacao(org) {
    return fetch(`${baseURL}/api/Organizacoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text'
        },
        body: JSON.stringify(org),
        mode: "no-cors",
    }).then(r => r.status === 201).catch(e => console.log(e))
}