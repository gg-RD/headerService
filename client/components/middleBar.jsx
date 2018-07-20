import React from 'react';
import BarWidget from './barWidget.jsx';
import SearchWidget from './SearchWidget.jsx';

class MiddleBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'imgs': ['./pictures/nike.png', '', '', '', '', '', './pictures/search.png'],
      'selected': null
    }
  }
  hover(componentNumber) { // examples of component number: 0 || 1 || 2 || 3 ...
    this.setState({
      imgs: this.state.imgs,
      selected: (componentNumber*2)+1 
    })
  }
  dehover () {
    this.setState({
      'imgs': this.state.imgs,
      'selected': null
    })
  }
  render () {
    return (
      <div id ='middleBar'>
        <BarWidget  nike = 'nike' bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
        <BarWidget  bar = {this.props.bar} widgetAlignment = 'middleWidgets' img={this.state.imgs[1]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>

        <SearchWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[6]}/>

      </div>
    )
  }
}
//        // <TopBarWidget widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
export default MiddleBar;