import React, { Component } from 'react'
import {Row} from "react-bootstrap"
import './Calc.css'
import Button from "./Button"
export class Calculator extends Component
{
    
    render()
    {
    return (
	<Row>
    	<div className="col d-flex justify-content-center">
	<div id="Calculator">

	/* Result output */
	<input id="resultado" type="text"  className="form-control result" placeholder="0" disabled="disabled" />


	/* Buttons */
	<Row>
	 <button type="button" onClick={() => setInput("")} className="btn btn-dark btn-lg clear font-weight-light">
	    C
	 </button>
	    
	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    /
	 </button>
	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light last_comp">
	    x
	 </button>
	</Row>

	<Row>
	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    7
	 </button>

	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    8
	 </button>

	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    9
	 </button>

	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light last_comp">
	    -
	 </button>
	</Row>
	
	<Row>
	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    4
	 </button>

	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    5
	 </button>

	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    6
	 </button>

	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light last_comp">
	    +
	 </button>
	</Row>

	<Row>
	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    1
	 </button>
	
	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    2
	 </button>
         
	 <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    3
	 </button>

         <button type="button" onclick="" className="btn btn-dark btn-lg enter last_comp">
	    =
	 </button>
	</Row>
	
	<Row id="LayoutAdjustment">
	 <button type="button" onclick="" className="btn btn-dark zero btn-lg font-weight-light">
	    0
	 </button>

         <button type="button" onclick="" className="btn btn-dark btn-lg font-weight-light">
	    .
	 </button>
	</Row>
	</div>
	</div>
	</Row>
    )
    }
}

