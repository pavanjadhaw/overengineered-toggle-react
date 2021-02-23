import { useContext } from 'react';
import { ToggleContext } from '../context/toggle.context';

function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle can only be used inside <Toggle/>');
  }

  return context;
}

export default useToggle;
