import { Children, cloneElement, useState } from 'react';

const allowedTypes = [ToggleButton, ToggleOn, ToggleOff];

function Toggle(props) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return Children.map(props.children, child => {
    if (allowedTypes.includes(child.type)) {
      return cloneElement(child, { on, toggle });
    }

    return child;
  });
}

function ToggleButton({ on, toggle }) {
  return (
    <label className="switch">
      <input type="checkbox" checked={on} onChange={toggle} />
      <span className="slider"></span>
    </label>
  );
}

function ToggleOn({ on, toggle, ...props }) {
  if (!on) return null;
  return <div {...props} />;
}

function ToggleOff({ on, toggle, ...props }) {
  if (on) return null;
  return <div {...props} />;
}

Toggle.Button = ToggleButton;
Toggle.On = ToggleOn;
Toggle.Off = ToggleOff;

export default Toggle;
