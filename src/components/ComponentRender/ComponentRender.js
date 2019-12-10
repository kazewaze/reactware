import React from 'react';
import './ComponentRender.css';

function ComponentRender(props) {
  return(
    <div className="ComponentRender">
      {props.children}
    </div>
  );
}

export default ComponentRender;