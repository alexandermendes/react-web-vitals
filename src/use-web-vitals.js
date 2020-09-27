import {
  getCLS,
  getFCP,
  getFID,
  getLCP,
  getTTFB,
} from 'web-vitals';
import { useEffect } from 'react';

const noop = () => {};

const defaultReporter = ({
  name,
  value,
}) => {
  const thresholds = {
    LCP: {
      title: 'Largest Contentful Paint',
      warn: 2500,
      error: 4000,
      unit: 'ms',
    },
    FID: {
      title: 'First Input Delay',
      warn: 100,
      error: 300,
      unit: 'ms',
    },
    CLS: {
      title: 'Cumalative Layout Shift',
      warn: 0.1,
      error: 0.25,
      unit: '',
    },
    FCP: {
      title: 'First Contentful Paint',
      warn: 2000,
      error: 4000,
      unit: 'ms',
    },
    TTFB: {
      title: 'Time To First Byte',
      warn: 200,
      error: 400,
      unit: 'ms',
    },
  };

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
