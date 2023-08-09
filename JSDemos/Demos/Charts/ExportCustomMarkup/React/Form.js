import React from 'react';

const fontFamily = "'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana, sans-serif";

function Form({ onRef }) {
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    onRef(nodeRef.current);
  }, [onRef]);

  return (
    <div id="custom_markup_container" ref={nodeRef}>
      <svg width="820px" height="420px">
        <path d="M 13 407 L 128 407 L 232 39 L 13 39" fill="#6D39C3"></path>
        <path d="M 46 381 L 161 381 L 265 13 L 46 13" opacity="0.5" fill="#6D39C3"></path>
        <text transform="translate(30,89)"
          style={{
            fill: '#FFFFFF', fontFamily, fontSize: 36, fontWeight: 'bold',
          }}>
          <tspan x="0" y="0">Export </tspan>
          <tspan x="0" y="38">Custom</tspan>
          <tspan x="0" y="76">Markup</tspan>
        </text>
        <text transform="translate(32,199)"
          style={{
            opacity: 0.8, fill: '#FFFFFF', fontFamily, fontSize: 14,
          }}>
          <tspan x="0" y="0">Export a chart with</tspan>
          <tspan x="0" y="19.2">custom elements</tspan>
        </text>
        <path opacity="0.8" d="M 0 0 L 820 0 L 820 420 L 0 420 L 0 0" stroke="#999999" strokeWidth="1"
          strokeLinecap="butt" fill="none" strokeLinejoin="miter"></path>
      </svg>
    </div>
  );
}

export default Form;
