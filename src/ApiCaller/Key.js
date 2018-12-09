
import { firebaseConnect } from '../FirebaseConnect';

export default getKey = () => {
    firebaseConnect.database().ref('/Sanpham',(snapshot) =>{
       key = Object.keys(snapshot.val())[0];
    })
}