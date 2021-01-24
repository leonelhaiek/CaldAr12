import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginWithFirebase as login } from '../redux/actions/authActions'
import FormField from './FormField'

const Login = ({ login}) => {
  const onSubmitLogin = (values) => {
    login(values);
  };
  const emailField = 
  {
    id:'email',
    type: 'email',
    name:'Email',
    onError:'Invalid email',
    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  };
  const passField = 
  {
    id:'password',
    type: 'password',
    name:'Password',
    onError:'Must have at least 8 characters with numbers and letters',
    pattern: /^[a-zA-Z]{8,}$/
  }
    
  return (
    <div className="container">
      <div className="form-container">
        <h1>Login</h1>
        <Form
          onSubmit={onSubmitLogin}
          render={({ handleSubmit, form, submitting, pristine, values }) =>(
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <FormField
                field = {emailField}
                key = {0}
              />
            </div>
            <div className="form-input">
              <FormField
                field = {passField}
                key = {1}
              />
            </div>
            <div className="submit-container">
              <input disabled={submitting || pristine} type="submit" value="login"/>
            </div>
          </form>
        )}/>
      </div> 
    </div>

  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: login
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);