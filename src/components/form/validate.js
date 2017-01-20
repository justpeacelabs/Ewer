import {EN as L} from "../../lang";

const locale = L.UI.ADD_RUMOUR;

const validate = values => {
  const errors = {};
  if (!values.region) {
    errors.region = locale.form.region.validate;
  }

  if (
    values.region && values.region.toLowerCase &&
    values.region.toLowerCase() === "bago" &&
    !values.township
  ) {
    errors.township = locale.form.township.validate;
  }

  if (!values.rumourDate) {
    errors.rumourDate = locale.form.date.validate;
  }

  if (!values['placeHeard']) {
    errors.placeHeard = locale.form.place.validate;
  }

  /*
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    */
  return errors;
};

export default validate;
