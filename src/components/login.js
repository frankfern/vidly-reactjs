import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";
class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = () => {};
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            type="text"
            onChange={this.handleChange}
            value={data.username}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={data.password}
            type="password"
            error={errors.password}
          />
          <button
            type="submit"
            disabled={this.validate()}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
