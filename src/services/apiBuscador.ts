export class CharacterApiBrowser {
    static async getCharacters(name: any): Promise<any> {
        const result = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${name}`
        );
        return await result.json();
    }
}
