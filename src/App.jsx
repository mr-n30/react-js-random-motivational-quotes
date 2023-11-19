import { useState, useEffect } from "react";
import Article from "./Article.jsx";

function App() {
  const apiUrl =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  // State to store the fetched data
  const [jsonObj, setJsonObj] = useState({});

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON from the response
        const data = await response.json();

        // Update state with the fetched data
        setJsonObj(data);
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      }
    };

    // Call the fetch function
    fetchData();
  }, [apiUrl]); // Add apiUrl as a dependency to ensure useEffect runs when apiUrl changes

  // Render the component with the fetched data
  return <Article quotesArr={jsonObj.quotes} />;
}

export default App;
