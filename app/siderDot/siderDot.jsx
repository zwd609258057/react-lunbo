import React, { Component } from 'react';
export default class SliderDots extends Component {
  constructor(props) {
    super(props);
  }

  handleDotClick(i) {
    var option = i - this.props.nowLocal;
    this.props.turn(option);
  }
  // clickHandler: function (options, e) {
  //    e.preventDefault();
  //    this.props.clickHandler(options, e);
  //  },


  render() {
    let dotNodes = [];
    let {count , cur} = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span key={'dot'+i} 
          className={"siderDot"+ (i === this.props.cur ? "cur": "")} 
          onClick={this.handleDotClick.bind(this,i)}>
        </span>
      )
    } 
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}