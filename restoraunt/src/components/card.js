
import React,{Component} from 'react';


class  Card extends Component(){
    render(){
    return(
        <div className="col">
            <div className="card " style={{width: '18rem',textAlign:'center'}}>
        <img src={this.props.image} class="card-img-top " alt="..."/>
        <div className="card-body ">
          <h5 className="card-title">{this.props.plateName}</h5>
            <p className="card-text">{this.props.description}</p>
            <button class="btn btn-outline-danger">Delete</button>
        </div>
        </div>
        </div>
    );
}

}
export default Card;




