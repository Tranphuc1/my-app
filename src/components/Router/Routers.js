import React from 'react';
import PushProduct from '../Admin/Manage/ProductsForm/AdminProductContainer';
import PushBill from '../Admin/Manage/Bill/PushBill';
import UserResult from '../Admin/Manage/Form/UserResult';
import EditForm from '../Admin/Manage/ProductsForm/EditForm';
import ProductDetail from '../Products/Components/ProductsDetail';
import ProductList from '../Products/Components/ProductList';
const Routers = [
	{
		path:'/App1/User',
		exact:false,
		main: () => <UserResult/>
	},
	{
		path:'/App1/PushBill',
		exact:true,
		main :() => <PushBill/>
	},
	{
		path:'/App1/PushProduct',
		exact:true,
		main :({match})=><PushProduct match={match}/>
	},
	{
		path:'/App1/PushProduct/:key/EditForm',
		exact:true,
		main : ({match,history}) => <EditForm match={match} history={history}/>
	},
	{
		path:'/:key/ProductDetail',
		exact:true,
		main : ({match}) => <ProductDetail match={match}/>
	},
	{
		path:'/ProductList',
		exact:true,
		main : () => <ProductList/>
	}
];

export default Routers;