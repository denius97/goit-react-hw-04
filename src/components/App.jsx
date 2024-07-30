import { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import { fetchImg } from "../services/api.js";
import SearchBar from "./SearchBar/SearchBar.jsx";

function App() {
  const [images, setImages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetchImg("cars", 20);
  //       setImages(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //      getData();
  // }, []);

  const handleSubmit = async ({ query }) => {
    try {
      setI
      const res = await fetchImg(query, 20);
      setImages(res);
    } catch (error) {
      console.log(error);
    } finally{}
  };

  console.log(images.results);

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {images.results && <ImageGallery images={images.results} />}
    </div>
  );
}

export default App;
