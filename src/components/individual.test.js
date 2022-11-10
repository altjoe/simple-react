
import React from "react";
import {render} from '@testing-library/react'

import Table from './Table'

describe('Table - src default usability', () => {
    test('renders the Table component', () => {
        render(<Table className={``} />)
    });
});
