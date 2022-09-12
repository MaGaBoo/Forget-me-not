/* eslint-disable eol-last */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react'
import TaskList from './TaskList'

// 0 - Component renders properly
// ** Must install jest-environment-jsdom as is not coming by default anymore

test('0 - Component renders properly', () => {
    const r = render(<TaskList />);
    expect(r).toBeDefined()
});