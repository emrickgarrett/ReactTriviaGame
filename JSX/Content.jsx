import React from 'react';
import ReactDOM from 'react-dom';


class Content extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<div className='page_content'>	
				{this.props.children}
			</div>
		</div>
		);	
	}
}

export default Content;