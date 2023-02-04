import React from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Statue-Augustus.jpg",
      img2: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Augustus_Bevilacqua_Glyptothek_Munich_317.jpg",
      title: "Augustus",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum libero quos qui eos cupiditate rem minus laudantium voluptas tempora doloremque harum ut necessitatibus ullam eum, dolore non aliquam. Aperiam, provident!",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://upload.wikimedia.org/wikipedia/commons/1/13/Julius_Caesar_Coustou_Louvre.png",
      img2: "https://bokforlagetaugusti.se/static/12e67bcb6345462e6cf817a73fbb03f9/e55d2/Julius-Caesar-ALFA.jpg",
      title: "Caesar",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum libero quos qui eos cupiditate rem minus laudantium voluptas tempora doloremque harum ut necessitatibus ullam eum, dolore non aliquam. Aperiam, provident!",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img1} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
