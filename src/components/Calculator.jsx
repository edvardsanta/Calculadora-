import React, { Component } from 'react'
import {Row} from "react-bootstrap"
import './Layout.css'
import Button from "./Button"
export class Calculator extends Component
{
    constructor() 
    {
        super();
        this.state = { data: ''}
    }
    handleClick = (event) =>
    {
	const value = event.target.getAttribute('data-value');
	switch(value) 
	{
		case 'clear':
		   this.setState({ data: ''});
                   break;
		case 'equal':
                   this.calc();
                   break;    
		default:
                   this.setState({ data: this.state.data + value});
	}
    }

    calc = () =>
    {
	try 
	{
            const result = eval(this.state.data);
            this.setState({data: result});
        } 
	catch (e) 
	{
            this.setState({data: 'error'})
        }	
    }
    render()
    {
    return (
	<Row>
    	<div className="col d-flex justify-content-center">
	<div id="Calculator">

	
	<input id="Result" type="text"  className="form-control" placeholder={this.state.data} disabled="disabled" />



	<Row>

	 <Button label="C" value="clear" className="clear" onClick={this.handleClick}/>
	 <Button label="/" value="/" onClick={this.handleClick}/>
	 <Button label="x" value="*" className="lastComp" onClick={this.handleClick}/>

	</Row>

	<Row>

	 <Button label="7" value="7" onClick={this.handleClick}/>
	 <Button label="8" value="8" onClick={this.handleClick}/>
	 <Button label="9" value="9" onClick={this.handleClick} />
	 <Button label="-" value="-" className="lastComp" onClick={this.handleClick}/>

	</Row>
	
	<Row>

	 <Button label="4" value="4" onClick={this.handleClick}/>
	 <Button label="5" value="5" onClick={this.handleClick}/>
	 <Button label="6" value="6" onClick={this.handleClick}/>
	 <Button label="+" value="+" className="lastComp" onClick={this.handleClick}/>

	</Row>

	<Row>

	 <Button label="1" value="1" onClick={this.handleClick}/>
	 <Button label="2" value="2" onClick={this.handleClick}/>
	 <Button label="3" value="3" onClick={this.handleClick}/>
         <Button label="=" value="equal" className="enter lastComp" onClick={this.handleClick}/>

	</Row>
	
	<Row id="LayoutAdjustment">

	 <Button label="0" value="0" className="zero" onClick={this.handleClick}/>
	 <Button label="." value="." onClick={this.handleClick}/>

	</Row>

	</div>

	</div>

	</Row>
    )
    }
}

