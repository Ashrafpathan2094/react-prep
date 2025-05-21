import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import withAdminLayout from "./withAdminLayout";

const users = [
  { id: 1, name: "Alice Johnson", role: "admin" },
  { id: 2, name: "Bob Smith", role: "editor" },
  { id: 3, name: "Charlie Brown", role: "viewer" },
  { id: 4, name: "Diana Prince", role: "admin" },
  { id: 5, name: "Ethan Hunt", role: "viewer" },
  { id: 6, name: "Fiona Gallagher", role: "editor" },
  { id: 7, name: "George Costanza", role: "viewer" },
  { id: 8, name: "Hannah Baker", role: "admin" },
  { id: 9, name: "Ivan Ivanov", role: "editor" },
  { id: 10, name: "Jane Doe", role: "viewer" },
];

const Blog = (props) => {
  console.log("🚀 ~ Blog ~ props:", props);
  const [userData, setUserData] = useState(users);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState("all");
  const [options, setOptions] = useState([
    { title: "All", value: "all" },
    { title: "Admin", value: "admin" },
    { title: "Editor", value: "editor" },
    { title: "Viewer", value: "viewer" },
  ]);
  useEffect(() => {
    let searchResult;
    if (searchValue === "") {
      if (selectedItem === "all") {
        setUserData(users);
      } else {
        searchResult = users.filter((users) => users.role === selectedItem);
        setUserData(searchResult);
      }
    } else {
      if (selectedItem === "all") {
        searchResult = users.filter((users) =>
          users.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        );
        setUserData(searchResult);
      } else {
        searchResult = users.filter(
          (users) =>
            users.name
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()) &&
            users.role === selectedItem
        );
        setUserData(searchResult);
      }
    }
  }, [searchValue, selectedItem]);

  return (
    <>
      <>{props?.firstName}</>
      <>{props?.lastName}</>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select
        name="item-selected"
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option?.value}>
              {option?.value}
            </option>
          );
        })}
      </select>

      <UserList UserList={userData} />
    </>
  );
};

export default React.memo(withAdminLayout(Blog));
