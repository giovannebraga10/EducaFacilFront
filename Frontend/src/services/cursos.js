export async function obterCurso(id) {
    return fetch(`/api/Cursos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
        },
    }).then(r => r.json()).catch(e => console.log(e))
}

export async function obterCursos() {
    return fetch(`/api/Cursos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
        },
    }).then(r => r.json()).catch(e => console.log(e))
} 

export async function cadastrarCurso(curso, token) {
    return fetch('/api/Cursos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(curso)
    }).then(r => r.status === 201).catch(e => console.log(e))
}

export async function editarCurso(id, curso, token) {
    return fetch(`/api/Cursos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(curso)
    }).then(r => r.status === 204).catch(e => console.log(e))
}

export async function deletarCurso(id, token) {
    return fetch(`/api/Cursos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            accept: 'plain/text',
            Authorization: `Bearer ${token}`
        }
    }).then(r => r.status === 204).catch(e => console.log(e))
}