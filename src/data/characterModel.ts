import { iCharacter } from '../interfaces/interfaz';
export class CharacterModel implements iCharacter {
    favorite: boolean | undefined;

    constructor(
        public id: number,
        public name: string,
        public status: string,
        public species: string,
        public gender: string,
        public origin: { name: string; url: string },
        public image: string
    ) {
        this.favorite = false;
    }
}
