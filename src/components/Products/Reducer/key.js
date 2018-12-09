import * as Types from './../constants/ActionType';
import { firebaseConnect } from '../../../FirebaseConnect';

var initialState = [];
var nodeData = firebaseConnect.database().ref('/Sanpham');
var findKey = (key) =>{
    var result = -1;
    nodeData.on('value',(snapshot)=>{
         key = Object.keys(snapshot.val());
        if (key != null)
            result= key;
        // console.log(key);
    })
    return result;
}

 const key = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_KEY:
            state = action.key;
            return [...state];
        default: return state;
    }
}
export default key;