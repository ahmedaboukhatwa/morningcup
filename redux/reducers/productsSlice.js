const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
    name :"products",
    initialState :{
        productsList:[
            {Name:"شمسيه",Src:"/images/content1.jpg"},
            {Name:"حقيبه كتف",Src:"/images/content2.jpg"},
            {Name:"كاب",Src:"/images/content3.jpg"},
            {Name:"حقيبه خصر",Src:"/images/content4.jpg"},
            {Name:"مجموعه قصافات أظافر",Src:"/images/content5.jpg"},
            {Name:"كيس حذاء",Src:"/images/content6.jpg"},
            {Name:"كيس جمرات",Src:"/images/content7.jpg"},
           ]
    },
    reducers:{}
})
export default productsSlice ;