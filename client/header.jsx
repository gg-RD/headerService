import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: null
    }
  }
  render () {
    return (<p> this should render once stuff is configured correctly </p>);
  }
}

window.Header = Header;
console.log(module.exports);