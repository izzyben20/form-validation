export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  } else if(!/^[a-zA-Z0-9]+$/.test(values.username.trim())) {
    errors.name = 'Enter a valid username';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}
