import css from "./FilterForm.module.css";

const FilterForm = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Vehicle type</h2>
      <div className={css.line}></div>
      <ul className={css.formList}>
        <li className={css.icon}>
          <svg width="40" height="28">
            <use xlinkHref="../../src/assets/icons.svg#icon-Button"></use>
          </svg>
          <p className={css.text}>Van</p>
        </li>
        <li className={css.icon}>
          <svg width="40" height="28">
            <use href="../../src/assets/icons.svg#icon-Button-1"></use>
          </svg>
          <p className={css.text}>Fully Integrated</p>
        </li>
        <li className={css.icon}>
          <svg width="40" height="28">
            <use href="../../src/assets/icons.svg#icon-Button-2"></use>
          </svg>
          <p className={css.text}>Alcove</p>
        </li>
      </ul>
    </div>
  );
};

export default FilterForm;
