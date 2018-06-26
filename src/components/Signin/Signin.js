import React from 'react';

class Signin extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	let loginUser = "";
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = (event) => {
		event.preventDefault(); //issue where page refreshes on button click, this prevents it. DO NOT REMOVE

		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ //browser sends http request to server, stringify makes it readable
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(data => {
			data = loginUser;
			console.log(data);
			if ((this.state.isSigned){
				this.props.loadUser(user);
				this.props.onRouteChange('home'); //launches the home page from a successful sign in

			}
		})
	}

	render(){
		const { onRouteChange } = this.props;
		return(
		<article className="br3 ba dark-gray b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l mw5 center" id="mainSignin">
	<main className="pa4 black-80">
  <div className="measure" id="signinForm">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input
				className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
				type="email"
				name="email-address"
				id="email-address"
				onChange={this.onEmailChange}
				/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input
				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
				type="password"
				name="password"
				id="password"
				onChange={this.onPasswordChange}
				/>
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
			type="submit"
			value="Sign in"
			onClick={this.onSubmitSignIn} />

    </div>
    <div className="lh-copy mt3">
      <p onClick={() => onRouteChange('register')} className="f6 link dim black pointer">Register</p>

    </div>
  </div>
</main>
</article>
);
}

}

export default Signin;
