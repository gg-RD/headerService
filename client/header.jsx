import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/topBar.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <TopBar />
      </div>
    );
  }
}

window.Header = Header;
// console.log(TopBarWidget);