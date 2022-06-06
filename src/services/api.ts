export class CharacterApi {
    static async getCharacters(): Promise<any> {
        const result = await fetch(
            `https://rickandmortyapi.com/api/character/?page=2`
        );
        return await result.json();
    }
}
