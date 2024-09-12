import css from "./FilterForm.module.css";
import { BsWind } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LuTv } from "react-icons/lu";
import { LuShowerHead } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { useDispatch } from "react-redux";
import {
  setDetails,
  setForm,
  setLocation,
} from "../../redux/filterCampers/slice.js";

const FilterForm = () => {
  const dispatch = useDispatch();

  const handlesubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { location, airConditioner, automatic, kitchen, TV, shower, type } = form.elements;

    dispatch(setLocation(location.value));
    dispatch(setDetails(airConditioner, automatic, kitchen, TV, shower,));
    dispatch(setForm(type.value));

    form.reset();
  };

  return (
    <form onSubmit={handlesubmit} className={css.form}>
      <fieldset className={css.formGroup}>
        <label>
          Location
          <div className={css.wrap}>
            <LuMapPin className={css.pin} />
            <input
              type="text"
              name="location"
              className={css.input}
              placeholder="City"
            />
          </div>
        </label>
      </fieldset>
      <h2 className={css.title}>Filters</h2>
      <fieldset className={css.formGroup}>
        <legend className={css.groupTitle}>Vehicle equipment</legend>
        <div className={css.line}></div>
        <div className={css.formList}>
          <label className={css.icon}>
            <input
              type="checkbox"
              name="airConditioner"
              style={{ display: "none" }}
            />
            <BsWind className={css.wind} />
            <p className={css.text}>AC</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              name="automatic"
              style={{ display: "none" }}
            />
            <TbAutomaticGearbox className={css.wind} />
            <p className={css.text}>Automatic</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              name="kitchen"
              style={{ display: "none" }}
            />
            <TbToolsKitchen2 className={css.wind} />
            <p className={css.text}>Kitchen</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              name="TV"
              style={{ display: "none" }}
            />
            <LuTv className={css.wind} />
            <p className={css.text}>TV</p>
          </label>
          <label className={css.icon}>
            <input
              type="checkbox"
              name="shower"
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
              name="type"
              value="panelTruck"
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
              name="type"
              value="fullyIntegrated"
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
              name="type"
              value="alcove"
              style={{ display: "none" }}
            />
            <svg width="40" height="28">
              <use href="../../src/assets/icons.svg#icon-Button-2"></use>
            </svg>
            <p className={css.text}>Alcove</p>
          </label>
        </div>
      </fieldset>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default FilterForm;
