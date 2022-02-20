import { createContext } from 'react';

import {
  defaultValues,
  TransactionContextType
} from './TransactionContext.types';

export const TransactionContext =
  createContext<TransactionContextType>(defaultValues);
