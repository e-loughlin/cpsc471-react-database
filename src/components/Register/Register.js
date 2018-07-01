import React from 'react';

const Register = ({onRouteChange}) => {

	return(

    <div>
		<article className="br3 ba dark-gray b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l mw5 center">
	<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="firstName">User Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="userName"  id="userName"/>
      </div>


      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="firstName">First Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstName"  id="firstName"/>
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="lastName">Last Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lastName"  id="lastName"/>
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
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


    <div>
      <h2>To register: First check if all fields are valid. If they are, then:</h2>
    </div>

     <div>
      <h2>INSERT INTO members (username, first_name, last_name, email, password) VALUES (field1, field2, field3, field4, field5); </h2>
    </div>

    <div>
      <h2>(Require additional fields, depending on instructor, student, or admin...); </h2>
    </div>

    <div>
      <h2>INSERT INTO instructor (username) VALUES (field1); </h2>
    </div>

    <div>
      <h2>INSERT INTO student (username) VALUES (field1); </h2>
    </div>

    <div>
      <h2>INSERT INTO admin (username) VALUES (field1); </h2>
    </div>


</div>


		);
}

export default Register;