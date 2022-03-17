import React, {Component} from 'react';
import "./Layout.css"
class Button extends Component 
{
    render(){
        return(
            <div>
		<button 
		type="button"
		className={`btn-dark btn-lg font-weight-light btn ${this.props.className}`}
                onClick={this.props.onClick}
                data-value={this.props.value}	
		>
                {this.props.label}
	        </button>
            </div>
        );
    }
}

export default Button;
