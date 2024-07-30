import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard alt={image.alt_description} url={image.urls.small} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
