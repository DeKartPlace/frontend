import React, { useState, useEffect, useMemo } from "react";
import { FixedSizeList as List } from "react-window"; // Efficient rendering of large lists

const RecentCard = ({ togglePop }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://backend-gamma-silk.vercel.app/api/user/allprods",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Origin: "https://frontend-amber-tau-20.vercel.app",
          },
        }
      );
      const data = await response.json();
      setList(data.prods || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Virtualized list item renderer
  const renderItem = ({ index, style }) => {
    const val = list[index];
    const { img, des, uname, price } = val;
    return (
      <div
        className="box shadow"
        key={index}
        onClick={() => togglePop(val)}
        style={style}
      >
        <div className="img">
          <img src={img} alt="" loading="lazy" />
        </div>
        <div className="text">
          <h4>{uname}</h4>
          <p>{des}</p>
        </div>
        <div className="button flex">
          <div>
            <button className="btn2">{price} ETH</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="content mtop">
          <List
            height={600} // Visible height
            itemCount={list.length}
            itemSize={150} // Height of each item
            width="100%"
          >
            {renderItem}
          </List>
        </div>
      )}
    </>
  );
};

export default RecentCard;
