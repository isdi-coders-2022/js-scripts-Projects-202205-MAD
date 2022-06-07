
export class CharacterApi {
    static async getCharacters(id: any): Promise<any> {
        const result = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${id}`
        );
        return await result.json();
    }
}
