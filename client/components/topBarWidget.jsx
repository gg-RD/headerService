import React from 'react';
import classNames from 'classnames';

class TopBarWidget extends React.Component {
  constructor(props) {
    super(props);
    var classesObject = {
      topBarWidget: true,
    }
    classesObject[props.widgetAlignment] = true;
    this.classes = classNames(classesObject);
    this.hover = props.hover;
    this.dehover = props.dehover;
    this.toggled = false;
    this.componentNumber = props.componentNumber;
    console.log(props);
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

export default TopBarWidget;