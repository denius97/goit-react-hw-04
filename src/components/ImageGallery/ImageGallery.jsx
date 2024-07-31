import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, clickHandler }) => {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.galleryItem}>
            <ImageCard image={image} clickHandler={clickHandler} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
