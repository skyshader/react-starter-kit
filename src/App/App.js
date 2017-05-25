import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App(props: { children: Component }): Component {
  return (
    <div className="App container-fluid">
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
