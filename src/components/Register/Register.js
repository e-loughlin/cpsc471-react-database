import React from 'react';

const Register = ({onRouteChange}) => {

	return(
		<article className="br3 ba dark-gray b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l mw5 center">
	<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="firstName">First Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstName"  id="firstName"/>
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="lastName">Last Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lastName"  id="lastName"/>
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email">First Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email"/>
      </div>

      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>

      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Re-enter Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password2"  id="password2"/>
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="Role">Role</label>
        <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="role"  id="role">
                  <option value="Admin">Admin</option>
                  <option value="Instructor">Instructor</option>
                  <option value="Student">Student</option>                                    
        </select>
      </div>

    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={() => onRouteChange('home')}/>
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Go Back" onClick={() => onRouteChange('signin')}/>
    </div>
  </form>
</main>
</article>

		);
}

export default Register;