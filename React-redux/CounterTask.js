import { Component } from 'react';
import { connect } from 'react-redux';
import buyLaptop from './Action/Action';


export  class  CounterTask  extends Component {

render(){

    return <div>
    <h1>task</h1>
    <h1>{this.props.numOfLaptops}</h1>
      <button onClick={this.props.buyLaptop} >onclick</button>
    </div>;
}
}
const mapStateToProps =(state)=>{
    return {
        numOfLaptops:state.numOfLaptops
    }
}

const mapDispatchToProps=(dispath)=>{
    return {
        buyLaptop:() =>dispath(buyLaptop())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CounterTask);

//----------------  this onother way of accessing props and dispach , this is another file --------------------

import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import buyLaptop from './Action/Action';

function IncrementTask() {

    const data1=useSelector(stat => stat.numOfLaptops )
    const data2=useDispatch()
    
    
    return <div>
      <h1>{data1}</h1>
      <button onClick={()=>data2(buyLaptop())} >onclick</button>
    </div>;
}
// const mapStatetoProps=(state)=>{
//     return {data:state.numOfLaptops}

// }
// const mapDispatchToProps=(dispath)=>{
//     return {
//         data2:()=>dispath(buyLaptop())
//     }
// }
export default IncrementTask;

