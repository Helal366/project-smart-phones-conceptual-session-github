import toast from "react-hot-toast";

const getFavotitesFromLocalStorage=()=>{
    const favListStringified=localStorage.getItem('fav');
    if(favListStringified){
        const favListParsed=JSON.parse(favListStringified);
        return favListParsed;
    };
    return [];
};
const addFavoriteToLocalStorage=(phone)=>{
    const favListParsed=getFavotitesFromLocalStorage();
    let tempFavListParsed=[];
    const isExist=favListParsed.find(p=>p.id===phone.id)
    if(isExist){
        return toast.error('This phone is already added in favorite list !!!!!')
    }else{
        tempFavListParsed=[...favListParsed, phone];
        const favListStringified=JSON.stringify(tempFavListParsed)
        saveFavoritesListToLocalStorege(favListStringified);
        toast.success(`${phone.name} is added to favorite list `)
    }    
};
const removeFavFromLS=id=>{
    const favListParsed=getFavotitesFromLocalStorage();
    const tempFavListParsed=favListParsed.filter(p=>p.id!==id);
    const favListStringified=JSON.stringify(tempFavListParsed);
    saveFavoritesListToLocalStorege(favListStringified);
    toast.success(`Removed successfully`)
};
const saveFavoritesListToLocalStorege=(favListStringified)=>{
    localStorage.setItem('fav', favListStringified);
};

const getCartFromLS=()=>{
    const cartListStringified=localStorage.getItem('cart');
    if(cartListStringified){
        const cartListParsed=JSON.parse(cartListStringified);
        return cartListParsed;
    };
    return [];
};
const addCartToLS=phone=>{
    const cartListParsed=getCartFromLS();
    const isExist=cartListParsed.find(p=>p.id===phone.id);
    if(isExist){
        return toast.error('!!!??This phone is already added to cart!!!??')
    }else{
        const tempCartListParsed=[...cartListParsed, phone];
        const tempCartListStringified=JSON.stringify(tempCartListParsed)
        localStorage.setItem('cart', tempCartListStringified);
        toast.success(`${phone.name} is added to cart list`);
    }
};
const removeCartFromLS=id=>{
    const cartListParsed=getCartFromLS();
    const tempCartListParsed=cartListParsed.filter(p=>p.id!==id);
    const tempCartListStringified=JSON.stringify(tempCartListParsed);
    localStorage.setItem('cart', tempCartListStringified);
    toast.success(`Removed successfully`)
}
export {
    getFavotitesFromLocalStorage,
    addFavoriteToLocalStorage,
    removeFavFromLS,
    getCartFromLS,
    addCartToLS,
    removeCartFromLS
}