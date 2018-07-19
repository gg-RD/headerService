import React from 'react';
import classNames from 'classnames';

class SearchWidget extends React.Component {
  constructor(props) {
    super(props);
    // set up the classes for each bar widget
    var classesObject = {};
    classesObject[props.bar] = true
    classesObject[props.widgetAlignment] = true;
    classesObject['search'] = true;
    this.classes = classNames(classesObject);
    // functions that apply to all widgets
    
    this.hover = props.hover;
    this.dehover = props.dehover;
    this.toggled = false;
    this.componentNumber = props.componentNumber;
    this.state = {
      searchTerm: 'search'
    }
  }
  onChange(e) {
    this.setState({
      'searchTerm': e.target.value
    })
  }
  render() { 
    return (
      <div  className = {this.classes}>
          <img src= {this.props.img} classNme = 'sImage'/>
          <input type= 'text' className ='inputField' value = {this.state.searchTerm}></input>
      </div>
    ); 
  }
}

export default SearchWidget;