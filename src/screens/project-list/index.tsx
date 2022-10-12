import React, { useState, useEffect } from "react";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import qs from "qs";
import { cleanObject, useMount, useDebounce } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen =() => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);

  const [users, setUsers] = useState([]);

  const debounceValue = useDebounce(param, 500)

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceValue))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceValue])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
