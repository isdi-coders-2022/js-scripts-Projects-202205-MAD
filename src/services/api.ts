export class CharacterApi {
    static async getCharacters(): Promise<any> {
        let index = 1;
        const result = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${index}`
        );
        return await result.json();
    }
}
