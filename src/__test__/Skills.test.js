/**
 * @jest-environment jsdom
 */

import IconChips from "../components/skills/Skills";
import { render } from '@testing-library/react'
import React from 'react'

test('Renders page correctly', () => {
  render (<IconChips />)
  expect(true).toBeTruthy();
});