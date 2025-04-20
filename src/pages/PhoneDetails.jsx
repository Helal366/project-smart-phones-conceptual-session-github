import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import Button from "../components/Button";
import {
  addCartToLS,
  addFavoriteToLocalStorage,
  getCartFromLS,
} from "../utilities/localStorage";
import { CartContext } from "../useContexts/CartContext";

const PhoneDetails = () => {
  const { jhankar } = useParams();
  const data = useLoaderData();
  const idInt = parseInt(jhankar);
  const { setCart } = useContext(CartContext);
  const selectedPhone = data.find((phone) => phone.id === idInt);
  const {
    name,
    price,
    brand,
    description,
    camera_info,
    image,
    model,
    storage,
  } = selectedPhone;
  console.log(selectedPhone);
  const handleFavorite = () => {
    addFavoriteToLocalStorage(selectedPhone);
  };
  const handleCartAdd = () => {
    addCartToLS(selectedPhone);
    setCart(getCartFromLS);
  };

  return (
    <>
      <div className="py-12">
        <img
          src={image}
          alt={name}
          className="w-full mx-auto md:w-auto mb-10"
        />
        <div className="flex justify-between">
          <h1 className="text-5xl lg:text-6xl font-thin mb-8">{name}</h1>
          <div className="space-x-4">
            <Button
              onClick={handleCartAdd}
              label={<MdShoppingCartCheckout />}
            ></Button>
            <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
          </div>
        </div>
        {/* Deatils */}

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-thin">Details:</h2>
          {/* brand */}
          <p>
            <b>Brand: </b> {brand}{" "}
          </p>
          {/* model */}
          <p>
            <b>Model: </b> {model}
          </p>

          
          {/* storage */}
          <div className="flex gap-2">
            <p className="font-bold">Storage: </p>
            <div>
              {storage.map((item, i) => (
                <p key={i}>{item} </p>
              ))}
            </div>
          </div>
              {/* price */}
          <div className="flex gap-2">
            <p className="font-bold">Price: </p>
            <div>
              {Object.entries(price).map(([storage, price], i) => (
                <p key={i}>
                  <span>{storage}: </span> <span>{price} </span>
                </p>
              ))}
            </div>
          </div>

              {/* camera info */}
              <p><b>Camera info: </b> {camera_info} </p>
              {/* description */}
              <p><b>Description: </b> {description} </p>
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
