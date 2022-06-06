import { iCharacter } from '../interfaces/interfaz';

export class HttpStoreCharacter {
    url: string;
    constructor() {
        this.url = 'http://localhost:3521/tasks';
    }
    getCharacters(): Promise<Array<iCharacter>> {
        // GET
        return fetch(this.url).then((resp) => {
            console.log(resp.status);
            return resp.json();
        });
    }
    getCharacter(task: iCharacter): Promise<iCharacter> {
        // GET
        return fetch(this.url + `/${task.id}`).then((resp) => resp.json());
    }
    setCharacter(task: iCharacter): Promise<iCharacter> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateCharacter(task: iCharacter): Promise<Partial<iCharacter>> {
        // PUT / PATCH
        return fetch(this.url + `/${task.id}`, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deleteCharacter(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }
}
