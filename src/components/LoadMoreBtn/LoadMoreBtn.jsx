import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  const handleClick = () => setPage((prev) => prev + 1);
  return (
    <div>
      <button onClick={handleClick} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
