// to store the information of a logged in user.
import { createContext } from "react";

//we can access this usercontext from anywhere in our app using useContext(UserContext) hook.
const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;