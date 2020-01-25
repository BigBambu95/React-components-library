import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Button from './button';


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

it("Рендеры с разным размером кнопки", () => {
    act(() => {
        render(<Button size="small" />, container);
    });

    expect(container.firstChild.classList.contains('small')).toBe(true);

    act(() => {
        render(<Button size="large" />, container);
    });

    expect(container.firstChild.classList.contains('large')).toBe(true);
});

it("Рендер с кастомным классом кнопки", () => {
    act(() => {
        render(<Button className="custom-btn" />, container);
    });

    expect(container.firstChild.classList.contains('custom-btn')).toBe(true);
});

it("Рендер неактивной кнопки", () => {
    act(() => {
        render(<Button disabled />, container);
    });

    const disabled = () => {
        const el = container.firstChild;
        return el.classList.contains('disabled') && el.hasAttribute('disabled');
    }

    expect(disabled()).toBe(true);
});

it("Рендер круглой кнопки", () => {
    act(() => {
        render(<Button rounded />, container);
    });

    expect(container.firstChild.classList.contains('rounded')).toBe(true);
});

it("Рендеры разных вариантов кнопки", () => {
    act(() => {
        render(<Button variant="contained" />, container);
    });

    expect(container.firstChild.classList.contains('contained')).toBe(true);

    act(() => {
        render(<Button variant="outlined" />, container);
    });

    expect(container.firstChild.classList.contains('outlined')).toBe(true);

    act(() => {
        render(<Button variant="text" />, container);
    });

    expect(container.firstChild.classList.contains('text')).toBe(true);
});

it("Тестирование функции клика по кнопке", () => {

    const onClick = jest.fn();

    act(() => {
        render(<Button onClick={onClick} />, container);
    });

    const button = document.querySelector(".btn");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onClick).toHaveBeenCalledTimes(1);

    act(() => {
        for (let i = 0; i < 5; i++) {
          button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });

    expect(onClick).toHaveBeenCalledTimes(6);
});