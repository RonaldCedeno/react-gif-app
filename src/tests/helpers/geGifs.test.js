import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs', () => {

    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Marvel');
        expect(gifs.length).toBe(10);
    });

    test('debe de tener 0 elementos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

})