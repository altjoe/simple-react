
import React from "react";
import {render} from '@testing-library/react'
import {VTable, HTable} from './components'

describe('Table - src default usability', () => {
    test('renders the Table component', () => {
        render(<VTable className={``} />)
    });
});

describe('Table - src default usability', () => {
    test('renders the Table component', () => {
        render(<HTable className={``} />)
    });
});