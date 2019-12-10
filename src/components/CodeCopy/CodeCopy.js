import React, { useRef, useState } from 'react';
import './CodeCopy.css';

function CodeCopy() {
  let testStr = `import React from 'react';
import './Button.css';

class Button extends React.Component {
  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;`;

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('✔️Copied');
  };
//   fontSize: '20px', fontFamily: 'monospace', resize: 'none', width: '250px', height: '150px', color: '#212529', backgroundColor: '#DFE3E5', border: '1px solid #212529', borderRadius: '7px', borderBottomLeftRadius: '14px', borderBottomRightRadius: '14px', borderBottom: '7px solid #212529', padding: '14px'
  return (
    <div className="CodeCopy" style={{fontSize: '20px', fontFamily: 'monospace', resize: 'none', width: '1000px', height: '700px', color: '#212529', backgroundColor: '#DFE3E5', border: '1px solid #212529', borderRadius: '7px', borderBottomLeftRadius: '14px', borderBottomRightRadius: '14px', borderBottom: '7px solid #212529', padding: '14px'}}>
      {
       /* Logical shortcut for only displaying the
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div align="right" className="copy-btn">
          <button onClick={copyToClipboard}>Copy</button>
          <div style={{color: '#32a3ff', marginTop: '7px'}}>{copySuccess}</div>
        </div>
      }
      <form>
        <textarea
          ref={textAreaRef}
          value={testStr}
          style={{fontSize: '20px', fontFamily: 'monospace', resize: 'none', width: '800px', height: '600px', color: '#212529', backgroundColor: '#DFE3E5', borderRadius: '7px', borderBottomLeftRadius: '14px', borderBottomRightRadius: '14px', padding: '14px', border: 'none'}}
        />
      </form>
    </div>
  );
}

export default CodeCopy;