import sendRequest from "./send-request";
const BASE_URL= '/api/notes';

export async function createNote(noteData) {
    console.log(noteData)
    return await sendRequest(`${BASE_URL}`, 'POST', noteData);
}

export async function indexNote() {
    return await sendRequest(`${BASE_URL}`)
}