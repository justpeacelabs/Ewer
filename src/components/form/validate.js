const validate = values => {
  const errors = {};
  if (!values.region) {
    errors.region = "Required field";
  }

  if (
    values.region && values.region.toLowerCase &&
    values.region.toLowerCase() === "bago" &&
    !values.township
  ) {
    errors.township = "Required field";
  }

  if (!values.rumourDate) {
    errors.rumourDate = "Approximate date required";
  }

  if (!values['placeHeard']) {
    errors.placeHeard = "Approximate date required";
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
