import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../../components/input';
import { login } from '../../actions';
import { required, nonEmpty } from '../../../../utils/validators';

export function LoginForm(props) {
  function onSubmit(values) {
    return props.dispatch(login(values.email, values.password));
  }

  let error;
  if (props.error) {
    error = (
      <div className="form-error" aria-live="polite">
        {props.error}
      </div>
    );
  }

  return (
    <div className="row">
      <h1>Log In</h1>

      <form
        id="log-in-form"
        onSubmit={props.handleSubmit(values =>
          onSubmit(values)
        )}
      >

        <Field
          component={Input}
          name="email"
          type="email"
          label="Email"
          autofocus
          validate={[required, nonEmpty]}
        />

        <Field
          component={Input}
          name="password"
          id="password"
          type="password"
          label="Password"
          validate={[required, nonEmpty]}
        />

        {error}

        <button
          type="submit"
          disabled={!props.valid || props.submitting}
        >
          log in
        </button>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
