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
        "http://localhost:5002/api/data"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  console.log("Current data state:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Data Details</h2>
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Sensors:</p>
          <ul>
            {data.sensors && data.sensors.length > 0 ? (
              data.sensors.map((sensor, index) => (
                <li key={index}>
                  ID: {sensor.id}, Name: {sensor.name}, Quantity Kind:{" "}
                  {sensor.quantity_kind}
                  {sensor.value ? (
                    <ul>
                      <li>
                        Value: {sensor.value.value} {sensor.value.unit}
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

