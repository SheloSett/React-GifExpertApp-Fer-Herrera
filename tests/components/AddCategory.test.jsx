import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    
    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={ () => {} }/>)
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Flash' } } );
        expect( input.value ).toBe('Flash');

        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Flash';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>)
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect( onNewCategory ).not.toHaveBeenCalled();

    })
})