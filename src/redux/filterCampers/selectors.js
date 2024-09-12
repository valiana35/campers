import { createSelector } from "@reduxjs/toolkit";
import { selectAdverts } from "../campers/selectors";

export const selectFilterCampers = createSelector(
  [selectAdverts, (state) => state.filters],
  (adverts, filter) => {
    return adverts.filter((advert) => {
      const machesLocation = advert.location
        .toLowerCase()
        .includes(filter.location.toLowerCase());
      const machesDetails =
        (!filter.equipment.airConditioner ||
          advert.details.airConditioner > 0) &&
        (!filter.equipment.automatic || advert.transmission === "automatic") &&
        (!filter.equipment.kitchen || advert.details.kitchen > 0) &&
        (!filter.equipment.TV || advert.details.TV > 0) &&
        (!filter.equipment.shower || advert.details.shower > 0);
      const machesForm = advert.form.includes(filter.type);
      return machesLocation && machesDetails && machesForm;
    });
  }
);
