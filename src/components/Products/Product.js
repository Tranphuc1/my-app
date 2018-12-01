import React, { Component } from 'react'; 
import { firebaseConnect } from '../../FirebaseConnect';

// import * as Message from './../constants/Message';

class Product extends Component {
    // constructor(props){
    //     super(props);
    // //     this.state = {
    // //         name : '',
    // //         author: '',
    // //         description:'',
    // //         id: null,
    // //         inventory:'',
    // //         price: null,
    // //         rating: null
    // //     };
    // }
    // componentDidMount(){
    //     firebaseConnect.database().ref("/Sanpham").once('value',(snapshot) => {
    //         this.setState({
    //                 name : snapshot.val().name,
    //                 author : snapshot.val().author,
    //                 description : snapshot.val().description,
    //                 id :snapshot.val().id,
    //                 inventory : snapshot.val().inventory,
    //                 price : snapshot.val().price,
    //                 rating : snapshot.val().rating
    //             })
    //     } )
    // }
    // componentDidMount(){
    //     firebaseConnect.database().ref("/Sanpham").on('value', (snapshot) => {
    //       var product= (snapshot.val());
    //     });
    //   }
    render() {
        // const product =  JSON.stringify(product);
        // // console.log(this.state.data);
        // console.log(product);
        return (
            
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        {/* <img src={ product.image } */}
                             className="img-fluid" alt={this.props.name} />
                        <a>

                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{ this.props.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                { this.showRatings(this.props.rating) }
                            </li>
                            
                        </ul>
                        <p className="card-text">
                            { this.props.description }
                        </p>
                        <p className="card-text">
                            { this.props.author }
                        </p>
                        <div className="card-footer">{this.props.price}<span className="left">$</span>
                            <span className="right">
                                <a 
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart"
                                    //onClick={ () => this.onAddToCart(product) }
                                ><i className="fa fa-shopping-cart"></i>     
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // onAddToCart = (product) => {
    //     this.props.onAddToCart(product);
    //     this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    // }

    showRatings(rating){
        var result = [];
        for(var i = 1;i <= rating;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j = 1; j <= ( 5-rating);j++){
            result.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        // for (var k = 2;k <=(1+rating/2);k++){
        //     result.push(<i key={k} class="fas fa-star-half-alt"></i></i>)
        // }
        return result;
    }

}

export default Product;
