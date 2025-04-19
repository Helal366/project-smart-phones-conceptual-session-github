import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import Button from "../components/Button";
import { addCartToLS, addFavoriteToLocalStorage, getCartFromLS } from "../utilities/localStorage";
import { CartContext } from "../useContexts/CartContext";

const PhoneDetails = () => {
  const { jhankar } = useParams();
  const data = useLoaderData();
  const idInt = parseInt(jhankar);
  const {setCart}=useContext(CartContext)
  const selectedPhone = data.find((phone) => phone.id === idInt);
  const { name, price, brand, description, camera_info, image, model, storage } =
    selectedPhone;
  console.log(selectedPhone);
const handleFavorite=()=>{
    addFavoriteToLocalStorage(selectedPhone)
};
const handleCartAdd=()=>{
  addCartToLS(selectedPhone);
  setCart(getCartFromLS);
};

  const priceData= Object.entries(price);
  // console.log(priceData[0][0])
  const storageData= Object.entries(storage);

  return (
    <>
      <div className="py-12">
        <img
          src={image}
          alt={name}
          className="w-full mx-auto md:max-w-md mb-10"
        />
        <div className="flex justify-between">
          <h1 className="text-5xl lg:text-6xl font-thin mb-8">{name}</h1>
          <div className="space-x-4">
            <Button onClick={handleCartAdd} label={<MdShoppingCartCheckout />}></Button>
            <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
          </div>
        </div>
        {/* Deatils */}
        <div>
          <p>{brand} {model} </p>
          <p> </p>
          <p>{camera_info} </p>
          <p>{description} </p>
          {/* <p>
            Price: {priceData[0][0]} : {priceData[0][1]} and {priceData[1][0]} : {priceData[1][1]}
          </p>
          <p>
            Storage & RAM: {storageData[0][1]} and {storageData[1][1]}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
