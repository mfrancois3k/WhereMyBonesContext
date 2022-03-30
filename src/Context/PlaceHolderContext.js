import { useState, useEffect, createContext } from "react";

export const PlaceHolderContext = createContext();

export const PlaceHolderProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let result = fetch(
      "https://codesandbox.io/s/context-api-fetch-data-provider-example-0rymy?file=/src/App.js"
    ).then((res) => setData(res.data));
    return result;
  }, []);
  return (
    <PlaceHolderContext.Provider value={{ data }}>
      {props.children}
    </PlaceHolderContext.Provider>
  );
};

// export default PlaceHolderProvider;
