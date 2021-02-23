import { ToggleProvider } from '../context/toggle.context';
import useToggle from '../hooks/use-toggle';

const Toggle = ToggleProvider;

Toggle.Button = () => {
  const { on, toggle } = useToggle();

  return (
    <label className="switch">
      <input type="checkbox" checked={on} onChange={toggle} />
      <span className="slider"></span>
    </label>
  );
};

Toggle.On = props => {
  const { on } = useToggle();

  if (!on) return null;
  return <div {...props} />;
};

Toggle.Off = props => {
  const { on } = useToggle();

  if (on) return null;
  return <div {...props} />;
};

export default Toggle;
