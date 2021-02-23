import { createContext, useState } from 'react';

export const ToggleContext = createContext();

export function ToggleProvider(props) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return <ToggleContext.Provider {...props} value={{ on, toggle }} />;
}
