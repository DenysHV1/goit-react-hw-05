import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFound}>
      <h1 className="visually-hidden">NOT FOUND</h1>
      <p>NOT FOUND 404</p>
    </div>
  );
};

export default NotFoundPage;
