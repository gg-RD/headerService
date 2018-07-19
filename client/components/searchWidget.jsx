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
      searchTerm: 'Search'
    }
  }
  onChange(e) { //
    this.setState({
      'searchTerm': e.target.value
    })
  }
  render() { 
    // if (this.state.searchTerm !== 'Search' && this.state.searchTerm !== '') {
    //   //implement rendering that darkens the lower segments of the page
    // } else {
      return (
      <div  className = {this.classes}>
          <img src= {this.props.img} className = 'sImage' onClick = {()=> {
            this.setState({
              'searchTerm': ''
            });
            alert('sorry, we cant search yet.');
          }}/>
          <input type='text' className ='inputField' value = {this.state.searchTerm} onChange = {this.onChange.bind(this)} onClick = {()=>{this.setState({'searchTerm': ''})}}/>
      </div>
    );
//    }
     
  }
}

export default SearchWidget;