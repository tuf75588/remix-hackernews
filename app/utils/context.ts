import * as React from 'react';

export interface ICurrentLoggedInUser {
  karma: number;
  id: string;
}

export const MeContext = React.createContext<ICurrentLoggedInUser | undefined>(
  undefined
);
