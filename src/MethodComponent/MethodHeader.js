import React from 'react';

function MethodHeader(props) {
  return (
    <div>
     <h2>{props.method}</h2>
     <h4>{props.description}</h4>
    </div>
  );
}

export default MethodHeader;