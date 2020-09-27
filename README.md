# React Web Vitals

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](https://badge.fury.io/js/react-web-vitals.svg)](https://badge.fury.io/js/react-web-vitals)

A React hook to print warnings if [Web Vitals](https://web.dev/vitals/) are above best practice thresholds.

## Installation

```
yarn add react-web-vitals
```

## Usage

Add the following hook to start monitoring web vitals:

```jsx
import { useWebVitals } from 'react-web-vitals';

useWebVitals();
```

## Settings

The hook accepts an object with the following settings:

| Option   | Description        | Default                                 |
|----------|--------------------|-----------------------------------------|
| enabled  | Enable reporting.  | `process.env.NODE_ENV !== 'production'` |
| reporter | A custom reporter. | See code.                               |

## Build setup

```bash
# Run tests
yarn run test

# Run linting checks
yarn run lint
```
