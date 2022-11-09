
import React from "react";
import {render} from '@testing-library/react'

import {CompTest} from './src'

describe('CompTest - src default usability', () => {
    test('renders the FlexTable component', () => {
        render(<CompTest class={``} />)
    });
    
});