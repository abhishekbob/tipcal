import React, { Component } from 'react';
import './Output.css';



export class Output extends Component {
    constructor(props){
        super(props)
        this.state={
            totalBill:'',
            totalCustomers:''
        }
       
        
    }
    addition=()=>{
        var sum=0
        var count=0
       
           this.props.FinalTip.forEach(function(item,index){
    
                 sum=item+sum
                 count=count+1
            })
            console.log(sum)
            console.log(count)

            this.setState({totalBill:sum})
            
            this.setState({totalCustomers:count})

    }
    render() {
       
        console.log(this.state.totalCustomers)
        return (
            <div className='Output'>
                <div className='output1' aria-haspopup='true' aria-expanded='false'
                 style={{backgroundColor:'#76866cd',textAlign:'center',color:'black',border:'solid black',
                 
                 }}>
                    <label className='title'>Customer List</label>
                    <ol>
                       { this.props.CustomerNameAndTip.map((item) => (<li>
                           {item[0]} offered Tip {item[1]} </li>))}
 
                    </ol>
                </div>
                <center>
                    <button style={{fontFamily:'inherit',fontSize:'20px',borderRadius:"10px",padding:'5px' }}onClick={()=>{this.addition()}}>Calculate Tip & Customer</button>
                </center>
                {this.state.totalCustomers>0 &&<table className='table'>
                    <tr>
                        <th>Total Customers</th>
                        <th style={{width:'100'}}>Total Tip</th>
                    </tr>
                    <tr>
                        <td>{this.state.totalCustomers}</td>
                        <td>{this.state.totalBill}</td>
                    </tr>
                </table>}
            </div>
        )
    }
}

export default Output
