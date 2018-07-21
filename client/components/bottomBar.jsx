import React from 'react';
import BarWidget from './barWidget.jsx';
import $ from 'jquery';


class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'imgs': ['./pictures/moveLeft.png', './pictures/returns.png', './pictures/nikePlus.png', './pictures/moveRight.png'],
      'selected': 0
    };
  } //
  moveRight() {
    
    console.log(this.state);
    var context = this;
    if (context.state.selected <= 2) {
      context.setState({
        'imgs': context.state.imgs,
        'selected': ++context.state.selected
      });
    }
    // setTimeout(()=> {
    //   if (context.state.selected <= 2) {
    //   context.setState({
    //     'imgs': context.state.imgs,
    //     'selected': ++context.state.selected
    //   });
    // }
    // }, 4000)
  }
  moveLeft () {
    console.log(this.state.selected);
    if (this.state.selected > 0) {
      this.setState({
        'imgs': this.state.imgs,
        'selected': this.state.selected-1
      })
    }
  }
  render () { // set state with numbers instead images because cleaner and not always 1 image per thing
    if (this.state.selected === 0) { //done
      return (
        <div id= 'bottomBar'>
          <div id = 'bottomBarslider'>
            <div id = 'bottomBarsliderMoveLeft' onClick = {this.moveLeft.bind(this)}>
            </div>
            <div id = 'bottomBarSliderMainContent' className = 'differentClass'>
              <div id = 'bottomBarsliderMainContentIconHolder' >
              </div>
              <div id = 'bottomBarSliderMainContentTextHolder'>
                <p id = 'bottomBarsliderMainContentText'> $5 TWO DAY SHIPPING NOW AVAILABLE </p>
              </div>
              <div id = 'bottomBarSliderMainContentMoreHolder'> 
                <p id = 'bottomBarsliderMainContentMore'> See details </p>
              </div>
            </div>
            <div id = 'bottomBarsliderMoveRight' onClick = {this.moveRight.bind(this)}>
              <img src = {this.state.imgs[3]}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.selected === 1) { // done
      return(
        <div id= 'bottomBar'>
          <div id = 'bottomBarslider'>
            <div id = 'bottomBarsliderMoveLeft' onClick = {this.moveLeft.bind(this)}>
              <img src = {this.state.imgs[0]}/>
            </div>
            <div id = 'bottomBarSliderMainContent'>
                <div id = 'bottomBarsliderMainContentIconHolder'>
                  <img id = 'returnsIcon' src = {this.state.imgs[1]}/>
                </div>
                <div id = 'bottomBarSliderMainContentTextHolder'>
                  <p id = 'bottomBarsliderMainContentText'> 30-DAY FREE RETURNS </p>
                </div>
                <div id = 'bottomBarSliderMainContentSubtitleHolder'> 
                  <p id = 'bottomBarsliderMainContentSubtitle'> Wear it, test it, keep what you like. </p>
                </div>
                <div id = 'bottomBarSliderMainContentMoreHolder'> 
                  <p id = 'bottomBarsliderMainContentMore'> See details </p>
                </div>
              </div>            
            <div id = 'bottomBarsliderMoveRight' onClick = {this.moveRight.bind(this)}>
              <img src = {this.state.imgs[3]}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.selected === 2) {
      return(
        <div id= 'bottomBar'>
          <div id = 'bottomBarslider'>
            <div id = 'bottomBarsliderMoveLeft' onClick = {this.moveLeft.bind(this)}>
                <img src = {this.state.imgs[0]}/>
            </div>
            <div id = 'bottomBarSliderMainContent'>
              <div id = 'bottomBarsliderMainContentIconHolder'>
                <img id = 'nikePlusIcon' src = {this.state.imgs[2]}/>
              </div>
              <div id = 'bottomBarSliderMainContentTextHolder'>
                <p id = 'bottomBarsliderMainContentText'> DOWNLOAD THE NIKE APP</p>
              </div>
              <div id = 'bottomBarSliderMainContentMoreHolder'> 
                <p id = 'bottomBarsliderMainContentMore'> Learn more </p>
              </div>
            </div>
            <div id = 'bottomBarsliderMoveRight' onClick = {this.moveRight.bind(this)}>
              <img src = {this.state.imgs[3]}/>
            </div>
          </div>
        </div>
      );

    } else if (this.state.selected === 3) {
      return(
        <div id= 'bottomBar'>
          <div id = 'bottomBarslider'>
            <div id = 'bottomBarsliderMoveLeft' onClick = {this.moveLeft.bind(this)}>
              <img src = {this.state.imgs[0]}/>              
            </div>
            <div id = 'bottomBarSliderMainContent'>
              <div id = 'bottomBarsliderMainContentIconHolder'>
              </div>
              <div id = 'bottomBarSliderMainContentTextHolder'>
                <p id = 'bottomBarsliderMainContentText'> $5 TWO DAY SHIPPING NOW AVAILABLE </p>
              </div>
              <div id = 'bottomBarSliderMainContentMoreHolder'> 
                <p id = 'bottomBarsliderMainContentMore'> See details </p>
              </div>
            </div>
            <div id = 'bottomBarsliderMoveRight' onClick = {this.moveRight.bind(this)}>
            </div>
          </div>
        </div>
      );

    }
    
  }
}

export default BottomBar;