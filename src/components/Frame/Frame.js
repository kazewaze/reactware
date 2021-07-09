import React, { useState } from 'react'
import { createPortal } from 'react-dom'

function Frame({ children, ...props }) {
  const [contentRef, setContentRef] = useState(null)
  const mountNode = contentRef && contentRef.contentWindow.document.body

  return (
    <iframe title="Component Render" {...props} ref={setContentRef}>
      {mountNode &&
        createPortal(
          React.Children.only(children),
          mountNode
        )}
    </iframe>
  )
}

export default Frame;