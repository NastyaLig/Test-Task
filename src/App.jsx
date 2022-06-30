import {useState } from 'react';
import Header from "./components/Header";
import User from "components/UsNoFound";
import EmptyState from "./components/EmptyState";
import Search from "./assets/search.svg";
import './App.css';

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header setSearch={setSearch} />
      {search ? (
        <User search={search} />
      ) : (
        <EmptyState icon={Search} text="Start with searching a GitHub user" />
      )}
    </>
  );
}

export default App;
