const ImageCard = ({ image, clickHandler }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => clickHandler(image)}
      />
    </div>
  );
};

export default ImageCard;
