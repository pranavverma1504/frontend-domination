import { createContext, useState } from "react";

// Context create
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello from Parent");

  return (
    <DataContext.Provider value={{ message, setMessage }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
