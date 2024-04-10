import React, { useState, useEffect } from "react";

export default function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");

        if (response.status === 304) {
          console.log("Resource not modified. Using cached data.");

          return;
        }

        const data = await response.json();
        setBackendData(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {backendData.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
