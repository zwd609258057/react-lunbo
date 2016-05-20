import React from 'react';
export default class Hello extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
  	let { count , item } = this.props;
  	let width = 100 / count + '%';
    return  <li className="siderPic" style="{{width:width}}">
    
          <img src={item.src} alt={item.alt} />
    		</li>;
  }
}