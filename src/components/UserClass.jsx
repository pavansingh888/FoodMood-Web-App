import React from 'react'

class UserClass extends React.Component {
//State is created when we are creating an instance of a class. What we mean by creating an instance of a class is :
/*
 * So basically whenever we render a functional component -  we are loading that functional component/ mounting that functional component inside our apps actual DOM.
 * So whenever we are loading a class based component/or we can say creating an instance of that class and giving it some props, so whenever we create an instance of a class component, its constructor is called and this constructor is the best place to recieve props and create state variable for your class based component.
 * x`
 */
    constructor(props){
        super(props)
        // this.state = {
            // count:0,
            // count1: 2,
        // }

        this.state = {
            userInfo : {
              name:"Pavan Singh",
              location: "MP",
              html_url: "Dummy"
            }
          }

        // console.log(this.state.userInfo.name +" Child constructor");
    }

    async componentDidMount(){
        // console.log(this.state.userInfo.name +" did mount");
        //API call
        const data = await fetch("https://api.github.com/users/pavansingh888")
        const json = await data.json()
        // console.log(json);
        this.setState({userInfo:json})
    }

    componentWillUnmount(){
        // console.log("Will unmount called");
    }

    componentDidUpdate(){
        // console.log("Child did updated");
    }

    render(){
        // const {name,location,contact} = this.props; 
        const {name,avatar_url,html_url, location } = this.state.userInfo
        
        // const {count,count1} = this.state;

        // console.log(name +" render");

        return (
    <div>
        {/* <h1>Count = {count}</h1>
        <button onClick={()=>{
            this.setState({count : count+1})                      
        }} >Increase count</button>
        <h1>Count = {count1}</h1> */}
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {html_url}</h4>
    </div>
        )
    }
}

/*
* Mount lifecycle - Parent --> Child(UserClass)
Parent constructor
Parent render
Pavan Singh Child constructor
Pavan Singh render
Pavan Singh did mount
Parent did mount
* Update life cycle after setState in child component - UserClass
Pavan Singh render
Child did updated
* UnMount life cycle before component removed from Actual DOM
Will unmount called 
*/

export default UserClass