import React from "react";
import dictionaryReducer from "../redux/reducers/dictionaryReducer";
import historyReducer from "../redux/reducers/historyReducer";


const Home = () => {
  return (
    <div>
     <div className="search">
        <input type="text"  />
        <button>Search</button>
     </div>
    </div>
  );
};

export default Home;
