import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";

const App = () => {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState("");
  return (
    <div className="App container border border-slate-200 min-h-screen mx-auto flex flex-col">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <main className="flex-grow p-2 border border-geen-400 rounded-lg m-2 mt-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route exact path="/post" element={<NewPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
