import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Table from './table';
import TableHead from '../table-head/table-head';
import TableRow from '../table-row/table-row';
import TableCell from '../table-cell/table-cell';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Рендер таблицы с кастомным классом", () => {
    act(() => {
        render(<Table className="custom-table"></Table>, container);
    });

    expect(container.firstChild.classList.contains('custom-table')).toBe(true);
});

it("Рендер таблицы с переданным размером", () => {
    act(() => {
        render(
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
            </Table>, 
            container
        );
    });

    expect(container.firstChild.firstChild.firstChild.firstChild.classList.contains('small')).toBe(true);
});