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

