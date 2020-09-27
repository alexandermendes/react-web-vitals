import { renderHook } from '@testing-library/react-hooks';
import * as webVitals from 'web-vitals';

import { useWebVitals } from '../src';
import { thresholds } from '../src/thresholds';

jest.mock('web-vitals');

const originalConsoleError = console.error;

describe('Report', () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  it('includes the expected metrics in the thresholds', () => {
    expect(Object.keys(thresholds)).toEqual([
      'LCP',
      'FID',
      'CLS',
      'FCP',
      'TTFB',
    ]);
  });

  it.each(Object.keys(thresholds))('logs a warning if %s is above the error threshold', (name) => {
    const {
      title,
      error,
      unit,
    } = thresholds[name];

    const value = error + 0.01;

    renderHook(() => useWebVitals());

    webVitals[`get${name}`].mock.calls[0][0]({
      name,
      value,
    });

    expect(console.error.mock.calls[0][0]).toBe(
      `Web Vitals Error: ${title} value is above ${error}${unit} (received ${value}${unit})`,
    );
  });

  it.each(Object.keys(thresholds))('logs a warning if %s is above the warn threshold', (name) => {
    const {
      title,
      warn,
      unit,
    } = thresholds[name];

    const value = warn + 0.01;

    renderHook(() => useWebVitals());

    webVitals[`get${name}`].mock.calls[0][0]({
      name,
      value,
    });

    expect(console.error.mock.calls[0][0]).toBe(
      `Web Vitals Warning: ${title} value is above ${warn}${unit} (received ${value}${unit})`,
    );
  });
});
