import css from "./FilterForm.module.css";
import { BsWind } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LuTv } from "react-icons/lu";
import { LuShowerHead } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

const FilterForm = () => {
  return (
    <form className={css.form}>
      <fieldset className={css.formGroup}>
        <label>
          Location
          <div className={css.wrap}>
          <LuMapPin className={css.pin}/>
          <input type="text" className={css.input} placeholder="City" />
          </div>
        </label>
      </fieldset>
      <fieldset className={css.formGroup}>
        <legend className={css.groupTitle}>Vehicle equipment</legend>
        <div className={css.line}></div>
        <div className={css.formList}>
          <label className={css.icon}>
            <input
              type="checkbox"
              value="van"
              name="equipment"
              style={{ display: "none" }}
            />
            <BsWind className={css.wind} />
            <p className={css.text}>AC</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              value="fullyIntegration"
              name="equipment"
              style={{ display: "none" }}
            />
            <TbAutomaticGearbox className={css.wind} />
            <p className={css.text}>Automatic</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              value="alcove"
              name="equipment"
              style={{ display: "none" }}
            />
            <TbToolsKitchen2 className={css.wind} />
            <p className={css.text}>Kitchen</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              value="alcove"
              name="equipment"
              style={{ display: "none" }}
            />
            <LuTv className={css.wind} />
            <p className={css.text}>TV</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              value="alcove"
              name="equipment"
              style={{ display: "none" }}
            />
            <LuShowerHead className={css.wind} />
            <p className={css.text}>Shower/WC</p>
          </label>
        </div>
      </fieldset>
      <fieldset className={css.formGroup}>
        <legend className={css.groupTitle}>Vehicle type</legend>
        <div className={css.line}></div>
        <div className={css.formList}>
          <label className={css.icon}>
            <input
              type="radio"
              value="van"
              name="type"
              style={{ display: "none" }}
            />
            <svg width="40" height="28">
              <use xlinkHref="../../src/assets/icons.svg#icon-Button"></use>
            </svg>
            <p className={css.text}>Van</p>
          </label>
          <label className={css.icon}>
            <input
              type="radio"
              value="fullyIntegration"
              name="type"
              style={{ display: "none" }}
            />
            <svg width="40" height="28">
              <use href="../../src/assets/icons.svg#icon-Button-1"></use>
            </svg>
            <p className={css.text}>Fully Integrated</p>
          </label>
          <label className={css.icon}>
            <input
              type="radio"
              value="alcove"
              name="type"
              style={{ display: "none" }}
            />
            <svg width="40" height="28">
              <use href="../../src/assets/icons.svg#icon-Button-2"></use>
            </svg>
            <p className={css.text}>Alcove</p>
          </label>
        </div>
      </fieldset>
      <button type="submit" className={css.btn}>Search</button>
    </form>
  );
};

export default FilterForm;
