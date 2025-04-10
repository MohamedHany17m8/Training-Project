import { useState, useEffect } from "react";

function App() {
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/test");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setTestData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching test data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden p-8">
      <h1 className="text-3xl font-bold mb-6">Vercel Deployment Test</h1>
      
      {loading && <p className="text-blue-400">Loading test data...</p>}
      
      {error && (
        <div className="bg-red-800 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      )}
      
      {testData && (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">API Response:</h2>
          <pre className="bg-gray-700 p-3 rounded overflow-auto">
            {JSON.stringify(testData, null, 2)}
          </pre>
        </div>
      )}
      
      <div className="mt-8">
        <p>
          This page tests the connection between the frontend and backend deployed on Vercel.
        </p>
      </div>
    </div>
  );
}

export default App;
