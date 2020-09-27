import {
  getCLS,
  getFCP,
  getFID,
  getLCP,
  getTTFB,
} from 'web-vitals';
import { useEffect } from 'react';

import { thresholds } from './thresholds';

const noop = () => {};

const defaultReporter = ({
  name,
  value,
}) => {
  const {
    title,
    error,
    warn,
    unit,
  } = thresholds[name];

  if (value > error) {
    console.error(`Web Vitals Error: ${title} value is above ${error}${unit} (received ${value}${unit})`);
    return;
  }

  if (value > warn) {
    console.error(`Web Vitals Warning: ${title} value is above ${warn}${unit} (received ${value}${unit})`);
  }
};

export const useWebVitals = typeof window === 'undefined' ? noop : ({
  reporter = defaultReporter,
  enabled = process.env.NODE_ENV !== 'production',
} = {}) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    getCLS(reporter);
    getFID(reporter);
    getLCP(reporter);
    getFCP(reporter);
    getTTFB(reporter);
  }, [enabled]);
};
