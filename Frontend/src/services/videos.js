import { getBaseUrl } from "../helpers/requestHelper"

const baseURL = getBaseUrl()

export async function obterVideo(id) {
    return fetch(`${baseURL}/api/Videos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
        },
    }).then(r => r.json()).catch(e => console.log(e))
}

export async function obterVideos() {
    return fetch(`${baseURL}/api/Videos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
        },
    }).then(r => r.json()).catch(e => console.log(e))
}

export async function cadastrarVideo(video, token) {
    return fetch(`${baseURL}/api/Videos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(video)
    }).then(r => r.status === 201).catch(e => console.log(e))
}

export async function editarVideo(id, video, token) {
    return fetch(`${baseURL}/api/Videos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(video)
    }).then(r => r.status === 204).catch(e => console.log(e))
}

export async function deletarVideo(id, token) {
    return fetch(`${baseURL}/api/Videos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
            Authorization: `Bearer ${token}`
        }
    }).then(r => r.status === 204).catch(e => console.log(e))
}