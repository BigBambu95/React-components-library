import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Table from '../table/table';
import TableHead from '../table-head/table-head';
import TableRow from '../table-row/table-row';
import TableCell from './table-cell';

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


it("Рендер табличной ячейки с кастомным классом", () => {
    act(() => {
        render(<TableCell className="custom-table-cell" />, container);
    });

    expect(container.firstChild.classList.contains('custom-table-cell')).toBe(true);
});

it("Рендер табличной ячейки с кастомным тегом", () => {
    act(() => {
        render(<TableCell tag="th" />, container);
    });

    expect(container.firstChild.tagName).toBe("TH");
});

it("Рендер табличной ячейки с определенным выравниванием", () => {
    act(() => {
        render(<TableCell align="center" />, container);
    });

    expect(container.firstChild.classList.contains('align-center')).toBe(true);
});

it("Рендер табличной ячейки определенного размера", () => {
    act(() => {
        render(<TableCell size="small" />, container);
    });

    expect(container.firstChild.classList.contains('small')).toBe(true);
});

it("Рендер табличной ячейки находящейся внутри компонента TableHead", () => {
    act(() => {
        render(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                    </TableRow>
                </TableHead>
            </Table>,
            container
        );
    });

    expect(container.firstChild.firstChild.firstChild.firstChild.tagName).toBe('TH');
});