import { iCharacter } from '../interfaces/interfaz';

export class HttpStoreClass {
    constructor(public url: string) {}
    getCharacter(id: number): Promise<iCharacter> {
        // GET
        return fetch(this.url + id).then((resp) => {
            return resp.json();
        });
    }
}
