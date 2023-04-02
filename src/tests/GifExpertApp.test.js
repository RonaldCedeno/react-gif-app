import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Prueba de GifExpertApp', () => {

    test('debe de mostrar correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Marvel', 'Goku'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

})