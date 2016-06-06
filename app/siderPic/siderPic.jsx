import React from 'react';
export default class Hello extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
  	let { count , item } = this.props;
  	let width = 100 / count + '%';
    return  <li className="slider-item" style={{width: width}}>
        <img src={item.src} alt={item.alt} />
    		</li>;
  }
}