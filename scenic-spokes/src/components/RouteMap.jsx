import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";
import "./RouteMap.css";
import { stops } from "../shared/stops";

const RouteMap = () => {
  const [packingList, setPackingList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  useEffect(() => {
    const storedList = localStorage.getItem("packingList");
    if (storedList) {
      setPackingList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("packingList", JSON.stringify(packingList));
  }, [packingList]);

  const addItem = () => {
    if (newItem.trim() !== "") {
      setPackingList([...packingList, newItem]);
      setNewItem("");
    } else {
      return;
    }
  };

  const removeItem = (index) => {
    const updatedList = packingList.filter((_, i) => i !== index);
    setPackingList(updatedList);
  };

  const startEditing = (index, value) => {
    setEditingIndex(index);
    setEditingValue(value);
  };

  const saveEdit = (index) => {
    const trimmedValue = editingValue.trim();
    if (trimmedValue === "") {
      setEditingIndex(null);
      setEditingValue("");
      return;
    }

    const updatedList = [...packingList];
    updatedList[index] = trimmedValue;
    setPackingList(updatedList);
    setEditingIndex(null);
    setEditingValue("");
  };

  return (
    <div className="route-map">
      <div className="sidebar">
        <table className="stops-table">
          <thead>
            <tr>
              <th>
                <h2>Stops</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {stops.map((stop) => (
              <tr key={stop.id}>
                <td>
                  <Link to={`/routes/${stop.id}`} className="details-link">
                    {stop.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="packing-list-area">
        <h2>Packing List</h2>
        {packingList.length === 0 ? (
          <p>No items yet — add something!</p>
        ) : (
          <ul className="packing-list">
            {packingList.map((item, index) => (
              <li key={index}>
                {editingIndex === index ? (
                  <input
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    onBlur={() => saveEdit(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(index);
                    }}
                    autoFocus
                  />
                ) : (
                  <>
                    {item}
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() => startEditing(index, item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => removeItem(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="packing-input">
          <input
            type="text"
            placeholder="Add item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button onClick={addItem}>Add</Button>
        </div>
      </div>
      <div className="mobile-route-map-image"></div>
    </div>
  );
};

export default RouteMap;
