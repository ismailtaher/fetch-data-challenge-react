import Header from "./Header";
import Content from "./Content";
import { useEffect, useState } from "react";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [items, setItems] = useState([]);
  const [dataType, setDataType] = useState("users");
  const [fetchError, setFetchError] = useState(null);
  const [tabStyle, setTabStyle] = useState("light");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${dataType}`);
        if (!response.ok) throw Error("Error Occured");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    fetchItems();
  }, [dataType]);

  const handleClick = (dataInput) => {
    setDataType(dataInput);
    changeStyle();
  };

  const changeStyle = () => {
    if (tabStyle !== "light") {
      setTabStyle("dark");
    } else {
      setTabStyle("light");
    }
    console.log(tabStyle);
  };

  return (
    <div>
      <Header dataType={dataType} handleClick={handleClick}></Header>
      <main>
        {fetchError && (
          <p
            style={{
              color: "red",
            }}>{`Error: ${fetchError}`}</p>
        )}
        {!fetchError && <Table items={items}> </Table>}
      </main>
    </div>
  );
}

export default App;
