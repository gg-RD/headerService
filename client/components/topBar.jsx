import React from 'react';
import BarWidget from './barWidget.jsx';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'imgs': ['./pictures/converseDeselect.png','./pictures/converseSelect.png', './pictures/hurleyDeselect.png', './pictures/hurleySelect.png', './pictures/jordanDeselect.png', './pictures/jordanSelect.png', './pictures/nikePlusDeselect.png','./pictures/nikePlusSelect.png', './pictures/joinDeselect.png', './pictures/joinSelect.png', './pictures/helpDeselect.png', './pictures/helpSelect.png', './pictures/cartDeselect.png', './pictures/cartSelect.png', './pictures/language.png'],
      'selected': null
    };
  } //
  hover(componentNumber) { // 0, 1, 2, 3
    this.setState({
      imgs: this.state.imgs,
      selected: (componentNumber*2)+1 
    })

    //error handling for special dehover
    var el = document.getElementsByClassName('help');
    console.log(el)
    if (el[0].style.borderBottom !== 'none') {
      el[0].style.borderBottom = 'none';
    }
  }
  specialhover (e, componentNumber) {
    // if the element has a class of help then go to parent
    //else give border
    var el = e.target;

    if (el.classList.contains('headerTopBarImage')) {
      el = el.parentElement;
    }
    if (el.classList.contains('topBar')) {
        el = el.childNodes;
        el = el[6];
    }

    console.log(el);
    el.style.borderBottom = "2px solid black";
    this.setState({
      'imgs': this.state.imgs,
      'selected': componentNumber*2+1
    });
  }
  specialdehover(className) {
    var el = document.getElementsByClassName(className);
    el[0].style.borderBottom = 'none';
    console.log(el[0].style.borderBottom);
    this.setState({
      imgs: this.state.imgs,
      selected: null
    });
  }
  dehover () {
    this.setState({
      'imgs': this.state.imgs,
      'selected': null
    })
  }
  render() {
    if (this.state.selected === null) {
      return (
        <div id = "topBar" className = 'topBar'>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[2]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[4]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[6]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[8]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[10]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[12]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>
        </div>
      ); 
    } else if (this.state.selected === 1) {
      return (
        <div id = "topBar">
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[1]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[2]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[4]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[6]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[8]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[10]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[12]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>
        </div>
      ); 
    } else if (this.state.selected === 3) {
      return (
        <div id = "topBar">
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[3]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[4]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[6]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[8]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[10]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[12]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>/>
        </div>
      ); 
    } else if (this.state.selected === 5) {
      return (
        <div id = "topBar">
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[2]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[5]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[6]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[8]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[10]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[12]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>
        </div>
      ); 
    }
    else if (this.state.selected === 7) {
      return (
        <div id = "topBar">
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[2]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[4]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[7]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[8]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[10]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[12]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>
        </div>
      ); 
    } else if (this.state.selected === 9) {
      return (
        <div id = "topBar">
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[2]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[4]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[6]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[9]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[10]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[12]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>
        </div>
      );
    } else if (this.state.selected === 11) {
      return (
        <div id = "topBar">
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[2]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[4]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[6]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[8]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[11]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[12]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>
        </div>
      );
    } 
    else if (this.state.selected === 13) {
      return (
        <div id = "topBar">
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[2]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {1}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[4]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {2}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[6]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {3}/>
          <div id = 'middleWidget'></div>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img={this.state.imgs[8]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {4}/>
          <BarWidget id = 'help' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[10]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {5}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[13]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {6}/>
          <BarWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[14]} dehover = {this.dehover.bind(this)} hover = {this.dehover.bind(this)} componentNumber = {7}/>
        </div>
      );
    } 
  } 
}
//div id topBar is supposed to be flexbox
export default TopBar;

// border-right: 1px solid grey;
//   border-left: 1px solid grey;

/*
          <TopBarWidget img={this.state.imgs[0]}/>
          <TopBarWidget img={this.state.imgs[2]}/>
          <TopBarWidget img={this.state.imgs[4]}/>
          <TopBarWidget img={this.state.imgs[6]}/>
*/