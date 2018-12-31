import React, { Component } from 'react';
import callApi from '../../../ApiCaller/Api';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { actFetchProducts } from '../../Products/actions/actions';
import { connect } from 'react-redux';
import VerticalMenu from './VerticalMenu';
class Menu extends Component {
	constructor(props){
		super(props);
		this.state ={
				kind : []
		};
	}
	componentWillMount(){
		callApi('Database/Sanpham','GET',null).then(res =>{
				this.props.fetchAllProducts(_.toArray(res.data));
		});
	}
	showProducts(){
		var result = null;
		var { products } = this.props;
		var kind =_.uniq(_.map(products,e => e.kind));
		if(kind.length > 0){
				result = kind.map((kind, index) => {
					return <VerticalMenu
									key= {index}
									kind={kind}
										/>
				});
		}
		return result;
	}
  render() {
    return (
			<div className="main_menu" style ={{width:'15%'}}>
				{this.showProducts()}
			</div>
     );
  }
}
Menu.propTypes = {
	products : PropTypes.arrayOf(
			PropTypes.shape({
					key : PropTypes.string.isRequired,
					name : PropTypes.string.isRequired,
					description : PropTypes.string.isRequired,
					author : PropTypes.string.isRequired,
					price : PropTypes.string.isRequired,
					rating : PropTypes.number.isRequired,
					url : PropTypes.string.isRequired
			})
	).isRequired,
	fetchAllProducts :PropTypes.func.isRequired
}
const mapStateToProps = state => {
	return {
			products : state.products
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
			fetchAllProducts : (products) => {
					dispatch(actFetchProducts(products));
			}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);