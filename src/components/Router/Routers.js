import React from 'react';
import PushProduct from '../Admin/Manage/ProductsForm/AdminProductContainer';
import PushBill from '../Admin/Manage/Bill/PushBill';
import UserResult from '../Admin/Manage/Form/UserResult';
import EditForm from '../Admin/Manage/ProductsForm/EditForm';
import ProductDetail from '../Products/Components/ProductsDetail';
import ShowMenuProducts from '../pages/ComponentshomePage/ShowMenuProducts';
import CartContainer from '../Products/Containers/CartContainer';
import { PasswordForgetForm } from '../Admin/PasswordForget';
import FormCheck from '../Admin/Manage/CheckCommentForm/FormCheck';
import SearchChildren from '../pages/ComponentshomePage/SearchChildren';
import Admin from '../Admin/Admin/Admin';
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
		path:'/:kind/MenuProducts',
		exact:true,
		main : ({match}) => <ShowMenuProducts match={match}/>
	},
	{
		path:'/cart',
		exact:true,
		main : () => <CartContainer/>
	},
	{
		path:'/App1/PushProduct/CheckComment',
		exact:true,
		main : () => <FormCheck/>
	},
	{
		path:'/:keyword/SearchChildren',
		exact:true,
		main : ({match}) => <SearchChildren match={match}/>
	},
	{
		path:'/Admin',
		exact:true,
		main : () => <Admin/>
	}
];
const Routers2 =[
	// {
	// 	path:'/SignIn',
	// 	exact:true,
	// 	main : () => <SignInForm/>
	// },
	// {
	// 	path:'/SignUp',
	// 	exact:true,
	// 	main : () => <SignUpForm/>
	// },
	{
		path:'/password-forget',
		exact:true,
		main : () => <PasswordForgetForm/>
	}

];
export { Routers,Routers2};