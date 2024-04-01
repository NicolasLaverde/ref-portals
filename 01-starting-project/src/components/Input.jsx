import React from 'react'

function Input (props, ref) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control"> 
      <label>{props.label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} {...props} />
    </p>
  );
}
export default React.forwardRef(Input)
