import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import _ from 'lodash';
import callApi from '../../../../ApiCaller/Api';
class Rating extends Component {
    constructor() {
        super();
        this.state = {
            rating:3,
            rating_half_star: 0.5,
            rating_empty_initial: 0,
            txtComment:'',
            activeInput:true
          };
      }
      componentWillMount(){
          var {keypd} = this.props;
          var keypd1 = keypd.join('');
          var {authUser} = this.props;
        callApi(`Database/Danhgia/${keypd1}`,'GET',null).then(res=>{
            
            // var key =Object.keys(res.data);
            // key.map((key)=>{
            //     callApi(`Database/Danhgia/${key}`,'GET',null).then(res=>{
                // console.log(res.data);
                var data = _.toArray(res.data);
                if(data.length>0){
                    data.map((product,index)=>{
                        var name = product.name;
                        var email =_.get(authUser,'email');
                        if(name == email){
                            this.setState({
                                activeInput:false
                            })
                        }
                    })
                }
            });    
        }
      onStarClickHalfStar(nextValue, prevValue, name, e) {
        // const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
    
        // if (xPos <= 0.5) {
        //   nextValue -= 0.5;
        // }
    
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        // console.log(e);
        this.setState({rating: nextValue});
      }
    
      onStarClickEmptyInitial(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating: nextValue});
      }
      showRating(){
          var {rating,activeInput} = this.state;
          if(activeInput){
          if(rating == 1){
              return <a>Sản Phẩm Tệ !!</a>
          }
          if(rating == 2){
            return <a>Sản Phẩm Bình Thường !!</a>
            }
            if(rating == 3){
                return <a>Sản Phẩm Khá Tốt !!</a>
            }
            if(rating == 4){
                return <a>Sản Phẩm Rất Tốt !!</a>
            }
            if(rating == 5){
                return <a>Sản Phẩm Tuyệt Vời !!!</a>
            }
      }}
      changedData = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState(() => ({
          [name] : value
        }));
      }
      submitComment = (event) =>{
        event.preventDefault();
        const {txtComment} = this.state;
        var {rating} = this.state;
        const {authUser} = this.props;
        var uid =_.get(authUser,['uid']);
        var name =_.get(authUser,['email']);
        var {keypd} = this.props;
        var keypd1 = keypd.join('');
        var item ={};
            item.txtComment = txtComment;
            item.uid = uid;
            item.rating=rating;
            item.name=name;
            if(item.txtComment != ''){
                callApi(`Database/Danhgia/${keypd1}`,'POST',item).then(res =>{
                });
            }else{
                alert('Bạn chưa nhận xét !!')
            }
        setTimeout((event) => {
            window.location.reload();
        }, 1000);
        }
        showInput =()=>{
            var {activeInput} = this.state;
            if(activeInput){
                return <input type="text" name="txtComment" onChange={ (e) => this.changedData(e) } placeholder="Hãy để lại ý kiến của bạn về sản phẩm" style={{border:'solid 1px',height:'35px'}} />
            }
        }
        showRating2=()=>{
            var {activeInput} = this.state;
            if(activeInput){
                return (<StarRatingComponent
                name="app6"
                starColor="#ffb400"
                emptyStarColor="#ffb400"
                value={this.state.rating}
                onStarClick={this.onStarClickHalfStar.bind(this)}
                renderStarIcon={(index, value) => {
                return (
                    <span style={{fontSize:24}}>
                    <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
                    </span>
                );
            }}/>)
            }
        }
        showButton=()=>{
            var {activeInput} = this.state;
            if(activeInput){
                return <button type="button" className="btn btn-warning" onClick={ (e) => this.submitComment(e) }  >Comment</button>
            }
        }
    render() {
        return (
            <div>
                {this.showRating()}
            <div style={{fontSize: 24 ,display:'block'}}>
                {this.showRating2()}
            <div className="inputComment" style={{width:'1200px',display:'flex'}}>
                {this.showInput()}
                {this.showButton()}
            </div>
        </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    keypd: state.keypd
});
export default connect(mapStateToProps)(Rating);