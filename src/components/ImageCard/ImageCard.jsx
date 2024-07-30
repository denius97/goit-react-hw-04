const ImageCard = ({ alt, url }) => {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageCard;
