
export async function obterOrganizacoes() {
    return fetch('/api/Organizacoes').then(r => r.json())
}

export async function obterOrganizacao(id) {
    return fetch(`/api/Organizacoes/${id}`).then(r => r.json())
}

export async function cadastrarOrganizacao(org) {
    return fetch('/api/Organizacoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text'
        },
        body: JSON.stringify(org)
    }).then(r => r.status === 201).catch(e => console.log(e))
}