import React from 'react';
import './normalize.css';
import './App.css';
import CodeCopy from './components/CodeCopy/CodeCopy';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

import ComponentRender from './components/ComponentRender/ComponentRender';
import Button from './components/Button';
import Editor from './components/Editor/Editor';

import axios from 'axios';

// Code - Usage - Dependencies

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jsx: '',
      css: '',
      saveSuccess: ''
    };

    this.onJsxChange = this.onJsxChange.bind(this);
    this.onCssChange = this.onCssChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onJsxChange(newValue) {
    console.log('JSX', newValue);

    this.setState({
      jsx: newValue
    });

    // this.setState(prevState => ({ jsx: prevState.jsx + newValue })); // when we backspace characters this does not work..

    // axios.put('/api/test', { test: newValue });
    console.log(this.state.jsx);

  }

  onCssChange(newValue) {
    console.log('CSS', newValue);
  }

  onBtnClick() {
    // Save React Component in the DB.
    axios.post('/api/test', { test: 'new code' })
    .then(res => {
      console.log(res.data);
    });

    this.setState({
      saveSuccess: 'Saved'
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <div className="Code-Edit">
          <Editor onChange={this.onJsxChange} code={'jsx'} />
          <Editor onChange={this.onCssChange} onBtnClick={this.onBtnClick} saveSuccess={this.state.saveSuccess} />
        </div>
        <ComponentRender>
          <Button>CLick Me</Button>
        </ComponentRender>
        <CodeCopy />
      </div>
    );
  }
}

export default App;