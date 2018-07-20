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
    }

    if (props.id !== undefined) {
      classesObject[props.id] = props.id;
      console.log('this ran')
    }
    this.classes = classNames(classesObject);
    // functions that apply to all widgets
    if (props.specialhover !== undefined) {
      this.specialdehover = props.specialdehover;
      this.specialhover = props.specialhover;
      this.id = props.id;
    }
    this.hover = props.hover;
    this.dehover = props.dehover;
    this.toggled = false;
    this.componentNumber = props.componentNumber;
  }
  render() { 
    if (this.props.specialhover !== undefined) {
      return (
        <div  className = {this.classes} onClick = {()=> {
          alert('Sorry, we have not built out that page yet');
        }} onMouseEnter = {(e) =>{
          console.log(this.props.componentNumber);
          this.props.specialhover(e, this.props.componentNumber);
          // this.hover(this.componentNumber);
        }} onMouseLeave = {()=> {
          this.specialdehover(this.id);
          // this.specialdehover(this.props.componentNumber)
          // console.log(this);
          // this.specialdehover();
          // this.dehover();
        }}>
          <img src={this.props.img} className = 'headerTopBarImage'/>
        </div>
      );
    }


     else {
      return (
      <div  className = {this.classes} onClick = {()=> {
        alert('Sorry, we have not built out that page yet');
      }} onMouseEnter = {() =>{
        this.hover(this.componentNumber);
        return;
      }} onMouseLeave = {this.dehover}>
        <img src={this.props.img} className = 'headerTopBarImage'/>
      </div>
    );
    } 
  }
}

export default BarWidget;