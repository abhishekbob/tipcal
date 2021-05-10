import React, { Component } from 'react';
import './input.css'
import Output from '../Output/Output'


export class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            BillAmount:'',
            Service:'Excellent',
            CustomerName:'',
            NewTip:'',
            CustomerNameArray:[],
            CustomerNameAndTip:[],
            FinalTip:[],

            
            
            
        }
        
    }
    handleChangeAmount=(e)=>{
        this.setState({BillAmount:e.target.value})
    }
    handleChangeService=(e)=>{
        this.setState({Service:e.target.value})
    }
    
    addCustomerName  (e){
        this.setState({CustomerName:e.target.value})
        
    }
    
    
    handleClick=()=>{
        let BillAmount= Number(this.state.BillAmount);
        let servicePercentage=0;
        if(this.state.Service==="Excellent"){
            servicePercentage=20
        }
        else if(this.state.Service==="Good"){
            servicePercentage=15
        }
        else if(this.state.Service==="Ok"){
            servicePercentage=10
        }
        else if(this.state.Service==="Average"){
            servicePercentage=5
        }else{
            return;
        }
        this.setState({
            NewTip:BillAmount*(servicePercentage/100),
            FinalTip:[...this.state.FinalTip,BillAmount*(servicePercentage/100)],
        });
        this.setState({
           CustomerNameArray:[...this.state.CustomerNameArray,this.state.CustomerName],
        })
        this.setState({CustomerNameAndTip:[...this.state.CustomerNameAndTip,
            [this.state.CustomerName,BillAmount*(servicePercentage/100)],],})
    }
    render() {
       
        console.log(this.state.CustomerNameAndTip)

        
        return (
            
            <>
            <div className='input1'>
                <label style={{fontFamily:'inherit',fontSize:'25px' }}>Enter Your Bill Amount</label>
                <input style={{borderRadius:"10px",padding:'5px'}} type='text' value={this.state.BillAmount} placeholder='Enter the amount'
                 onChange={this.handleChangeAmount}/>
            </div>
            <div id='addSpace'>
            <div className='input2'>
                <label style={{fontFamily:'inherit',fontSize:'25px' }}>How was the Service</label>
                <select  style={{borderRadius:"10px",padding:'5px'}} value={this.value} onChange={this.handleChangeService.bind(this)} required>
                    <option value='Excellent'>Excellent</option>
                    <option value='Good'>Good</option>
                    <option value='Ok'>ok</option>
                    <option value='Average'>Average</option>
                </select>
            </div>
            
            <div className='input3'>
                <label style={{fontFamily:'inherit',fontSize:'25px' }}>Customer Name</label>
                <input style={{borderRadius:"10px",padding:'5px'}} type='text' value={this.state.CustomerName} placeholder='Enter your name' 
                onChange={this.addCustomerName.bind(this)}/>

                <button style={{borderRadius:"10px",padding:'5px'}}  onClick={this.handleClick.bind(this)}>
                Add Customer</button>
                
                {this.state.CustomerNameAndTip.length > 0 &&<div>

                
                <Output FinalTip={this.state.FinalTip} CustomerNameAndTip={this.state.CustomerNameAndTip} />
                
                </div>
                   }       
            </div>
            </div>
           </> 
        )
    }
}

export default Input
