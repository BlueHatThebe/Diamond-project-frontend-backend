import React, { useState, useEffect } from "react";
import axios from "axios";

interface IDataItem {
  
  name: string;
  sensors: {
    id: number;
    name: string;
    quantity_kind: string;
    value?: {
      value: number;
      unit: string;
      timestamp: string;
    };
  }[];
}

const DataList: React.FC = () => {
  const [data, setData] = useState<IDataItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<IDataItem>(
        "http://localhost:5001/api/data"
      );
      console.log("Data from Flask API:", response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Data Details</h2>
      {data && ( // Check if data exists
        <div>
          <p>Name: {data.name}</p>
          <p>
            
          </p>
          <p>Sensors:</p>
          <ul>
            {data.sensors && data.sensors.length > 0 ? ( // Check if sensors is defined and has length
              data.sensors.map((sensor, index) => (
                <li key={index}>
                  ID: {sensor.id}, Name: {sensor.name},
                  {sensor.quantity_kind}
                  {sensor.value ? (
                    <ul>
                      <li>
                        Value: {sensor.value.value} {sensor.value.unit}
                        {"Parts Per Million"}
                      </li>
                      <li>Timestamp: {sensor.value.timestamp}</li>
                    </ul>
                  ) : (
                    <p>No values available</p>
                  )}
                </li>
              ))
            ) : (
              <li>No sensors available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataList;
