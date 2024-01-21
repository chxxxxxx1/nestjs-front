import { GlobalLayout } from '@/layouts/GlobalLayout';
import type { RuntimeConfig } from '@@/core/defineApp';
import React from 'react';

export const rootContainer: RuntimeConfig['rootContainer'] = (container) => {
  return React.createElement(GlobalLayout, null, container);
};
