
import React from "react";
import {render} from '@testing-library/react'
import { CompTest }from './components'

describe('CompTest - src default usability', () => {
    test('renders the CompTest component', () => {
        render(<CompTest class={``} />)
    });
});