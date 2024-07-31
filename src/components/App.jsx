import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./App.css";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import { fetchImg } from "../services/api.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import Loader from "./Loader/Loader.jsx";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    const searchImg = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await fetchImg(query, 20, page);
        setImages((prev) => {
          return [...prev, ...res.results];
        });
        setTotalPages(res.total_pages);
        if (!res.total_pages) toast.error("Nothing is found");
      } catch (error) {
        setIsError(true);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.trim().length) searchImg();
  }, [query, page]);

  const handleSubmit = (searchQuery) => {
    if (searchQuery !== query) setImages([]);
    setQuery(searchQuery);
  };

  const handleOpenModal = (image) => {
    setModalContent(image);
    setModalIsOpen(true);
    console.log(image);
  };

  return (
    <div>
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}
        >
          <div>
            <img
              src={modalContent.urls.regular}
              alt={modalContent.alt_description}
            />
          </div>
          <p>
            {`Author: ${modalContent.user.name} | Likes: ${modalContent.likes}`}
          </p>
        </ImageModal>
      )}

      <SearchBar handleSubmit={handleSubmit} />
      <Toaster position="top-right" />
      {images?.length > 0 && (
        <ImageGallery images={images} clickHandler={handleOpenModal} />
      )}
      {isError && (
        <p className="errorMsg">Error, try again or reload the page...</p>
      )}
      {isLoading && <Loader />}
      {!isLoading && !isError && page < totalPages && (
        <LoadMoreBtn setPage={setPage} />
      )}
    </div>
  );
}

export default App;
