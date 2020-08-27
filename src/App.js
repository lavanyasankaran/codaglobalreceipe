import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./components/items";
import SearchBox from "./components/searchbox";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsPage from "./components/detailsPage";
import * as test from "./test.json";
const App = () => {
  const [array, setArray] = useState(test.default);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://starlord.hackerearth.com/recipe");
      setArray(res.data);
    };
    fetch();
  }, []);
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const filteredReceipe = array.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <Router>
        <SearchBox searchChange={onSearchChange} /> <br />
        <Route path="/" exact render={() => <Item list={filteredReceipe} />} />
        <Route
          path="/recipes/:id"
          render={() => {
            return <DetailsPage recipes={array} />;
          }}
        />
        {/*array.map((ro)=>{return(<div>{ro.name}</div>)})*/}
      </Router>
    </div>
  );
};

export default App;
