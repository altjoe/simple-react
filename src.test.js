
import React from "react";
import {render} from '@testing-library/react'
import { Table, tw } from './src'

describe('Table - src default usability', () => {
    test('renders the Table component', () => {
        render(<Table class={``} />)
    });
    
});


describe('Test utility tailwind function', () => {
    test('Should append string data ', () => {
        expect(tw('test', 'hello')).toBe('test hello')
    });
});