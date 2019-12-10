import React from 'react';
import './Editor.css';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import 'brace/mode/css';
import 'brace/theme/twilight';

class Editor extends React.Component {
  render() {
    return (
      <div className="Editor">
        <div className="Editor__controls">
          <h1 className="Editor__heading">{ this.props.code === 'jsx' ? 'JSX' : 'CSS' }</h1>
          { this.props.code !== 'jsx' ? <button onClick={this.props.onBtnClick}>Save</button> : ''}
          { this.props.code !== 'jsx' ? this.props.saveSuccess : '' }
        </div>
        <AceEditor
          mode={this.props.code === 'jsx' ? 'jsx' : 'css'}
          theme="twilight"
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          height={'650px'}
          width={'650px'}
        />
      </div>
    );
  }
}

export default Editor;