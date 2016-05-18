import React from 'react';
import './siderPic.css'
export default class Hello extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
  	let { count , pic } = this.props;
  	let width = 100 / count + '%';
    return  <li className="siderPic" style="{{width:width}}">
    			<img src={pic.src} alt={ pic.alt } />
    		</li>;
  }
}