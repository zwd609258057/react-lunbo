import React, { Component } from "react";

export default class siderArrow extends Component {
	constructor(porps) {
		super(porps)
	}
	//通过porps传递turn函数
	handleArrowClick(option){
		this.porps.turn(option);
	}

	render (){
		return(
			<div className="slider-arrows-wrap">
		        <span
		          className="slider-arrow slider-arrow-left"
		          onClick={this.handleArrowClick.bind(this, -1)}>
		          
		        </span>
		        <span
		          className="slider-arrow slider-arrow-right"
		          onClick={this.handleArrowClick.bind(this, 1)}>
		          
		        </span>
		    </div>
		)
	}

} 