
import React from "react";
import {render} from '@testing-library/react'
import { VTable, HTable } from './src'

describe('Table - src default usability', () => {
    test('renders the Table component', () => {
        render(<VTable class={``} />)
    });
    
});

describe('Table - src default usability', () => {
    test('renders the Table component', () => {
        render(<HTable class={``} />)
    });
    
});