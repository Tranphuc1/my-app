import p1 from '../../pages/imgslide/p1.jpg';
import p2 from '../../pages/imgslide/p2.jpg';
import p3 from '../../pages/imgslide/p3.jpg';
var initialState= [
    {
        id : 1,
        name : 'Đắc Nhân Tâm',
        image : p2,
        description : 'Phải Thật Nhẫn Tâm',
        price : 500,
        inventory : 10,
        author:"Sơn thùng MTP",
        rating : 4
    },
    {
        id : 2,
        name : 'Tìm Được Nhau Khó Thế Nào',
        image : p1,
        description : 'Khó nó mới hay',
        price : 400,
        inventory : 15,
        author:'Mr.siro',
        rating : 4.5
    },
    {
        id : 3,
        name : 'Thanh xuân như 1 cơn mưa rào',
        image : p3,
        description : 'Dù cảm lạnh vì mưa cũng muốn được quay lại',
        price : 450,
        inventory : 5,
        author:"Mỹ Tâm",
        rating : 5
    }
];
const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;