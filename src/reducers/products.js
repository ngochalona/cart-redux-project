var initialState = [
    {
        id: 1,
        name: "Iphone 7 plus",
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836615184176790_ip7-plus-den-1.png',
        description: 'San pham do apple san xuat',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: "SamSung 7 plus",
        image: 'https://viostore.vn/wp-content/uploads/2017/06/Pdpkeyfeature-sm-g935pzdaspr-600x600-C1-062016.jpg',
        description: 'San pham do SamSung san xuat',
        price: 450,
        inventory: 10,
        rating: 3
    },
    {
        id: 3,
        name: "Oppo 7",
        image: 'https://assorted.downloads.oppo.com/static/archives/images/en/Smartphones/Reno2%20Series/Thumbnail-Reno2%20F%401x.png',
        description: 'San pham do china san xuat',
        price: 350,
        inventory: 10,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}
export default products;