```javascript

import React from 'react'
import UserClass from './UserClass'
import User from './User'
import UserContext from '../utils/UserContext'


class About extends React.Component{
  constructor(props){
    super(props)
    // console.log("Parent constructor");
  }

  async componentDidMount(){
    // console.log("Parent did mount");
    //Api Call
  }

  render(){
    // console.log("Parent render");
    //* In class based component, we do not have hooks. How we can access context here?
    return(<div>
      <h1>About class Component</h1>
      <div>
        Logged-In user:
        <UserContext.Consumer>  
          {({loggedInUser}) => {
            // console.log(data); //{loggedInUser: 'Default User'}
            return <h1 className='text-lg font-semibold'>{loggedInUser}</h1>
            }}
        </UserContext.Consumer>
      </div>
      <UserClass location={"Bhopal"} contact={"psinghp888@gmail.com"}/>
    </div>)
  }
}
/*
* -------  Class Component life cycle :  ----------
* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*
*Parent constructor
*Parent render
*First Child constructor
*First render
*Second Child constructor
*Second render
*First did mount
*Second did mount
*Parent did mount
 */
export default About

```