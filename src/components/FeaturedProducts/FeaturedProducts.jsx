import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img1: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Statue-Augustus.jpg",
      img2: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Augustus_Bevilacqua_Glyptothek_Munich_317.jpg",
      title: "Augustus",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://upload.wikimedia.org/wikipedia/commons/1/13/Julius_Caesar_Coustou_Louvre.png",
      img2: "https://bokforlagetaugusti.se/static/12e67bcb6345462e6cf817a73fbb03f9/e55d2/Julius-Caesar-ALFA.jpg",
      title: "Caesar",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img1: "https://www.shenyunperformingarts.org/data/image/original/2021/02/20/fbc73ee8f22e7cbf9e2b7883ce7516bb.png",
      img2: "https://media.britishmuseum.org/media/Repository/Documents/2014_10/9_19/c902aec0_0a95_46e9_9ff6_a3bf0141f4ed/mid_00542305_001.jpg",
      title: "Alexander",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img1: "https://smarthistory.org/wp-content/uploads/2022/08/versailles-1st-version-scaled.jpg",
      img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/250px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
      title: "Napoleon",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum
          nostrum quae sed pariatur quo dolorum nemo ut? Velit minima,
          obcaecati, iste, quae numquam architecto debitis a quibusdam eveniet
          non tenetur quos reprehenderit error aperiam! Soluta dolorem debitis
          at id beatae. Perspiciatis harum autem voluptatem dolor error
          voluptates ex ea!
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>{
           return <Card item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
