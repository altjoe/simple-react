
import React from "react";
import {render} from '@testing-library/react'

import VTable from './VTable'

describe('VTable - src default usability', () => {
    test('renders the Table component', () => {
        render(<VTable className={``} />)
    });
});


import HTable from './HTable'

describe('HTable - src default usability', () => {
    test('renders the Table component', () => {
        render(<HTable className={``} />)
    });
});
