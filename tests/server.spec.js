/**
 * @jest-environment node
 */
import { useWebVitals } from '../src';

describe('Server', () => {
  it('does not throw when loaded on the server', () => {
    expect(() => useWebVitals()).not.toThrow();
  });
});
