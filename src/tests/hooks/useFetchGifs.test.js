// import { useFetchGifs } from "../../hooks/useFetchGifs";
// import { renderHook, waitForNextUpdate } from "@testing-library/react-hooks";

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', () => {

    })

    // test('debe de retornar el estado inicial', async() => {
    //     const {result} = renderHook( () => useFetchGifs('Marvel'));

    //     await waitForNextUpdate();

    //     const {data, loading} = result.current;

    //     expect(data).toEqual([]);
    //     expect(loading).toBe(true);
     
    // });

    // test('debe de retornar un arreglo de imgs y el loading en false', async() => {
    //     const {result, rerender} = renderHook( () => useFetchGifs('Marvel'));
    //     const {data, loading} = result.current;

    //     rerender();

    //     await waitFor(() => {
    //         expect(data.length).toBe(10);
    //     });

    //     await waitFor(() => {
    //         expect(loading).toBe(false);
    //     });
    // });

})