import React from 'react';
import classNames from 'classnames';

class BarWidget extends React.Component {
  constructor(props) {
    super(props);
    // set up the classes for each bar widget
    var classesObject = {};
    classesObject[props.bar] = true
    classesObject[props.widgetAlignment] = true;
    if (props.nike !== undefined) {
      classesObject[props.nike] = 'nike';
      console.log(classesObject);
    }
    this.classes = classNames(classesObject);
    // functions that apply to all widgets
    
    this.hover = props.hover;
    this.dehover = props.dehover;
    this.toggled = false;
    this.componentNumber = props.componentNumber;
  }
  render() { 
    return (
      <div  className = {this.classes} onClick = {()=> {
        alert('Sorry, we have not built out that page yet');
      }} onMouseEnter = {() =>{
        console.log(this.componentNumber);
        this.hover(this.componentNumber);
        return;
      }} onMouseLeave = {this.dehover}>
        <img src={this.props.img} className = 'headerTopBarImage'/>
      </div>
    ); 
  }
}

export default BarWidget;