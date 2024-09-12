import { signOut,  onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store => store.user);
    const showGPTSearchView = useSelector((store)=> store.gpt.showGPTSearch)
    


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            
          }).catch((error) => {
            // An error happened.
            navigate('/Error');
          });

    };

    useEffect ( () => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL,}));
              navigate("/browse");
              
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
              
            }
          });

          // unsubscribes when component unmounts

          return () => unsubscribe();



    },[]);

    const handleGPTSearchClick = () => {

      dispatch(toggleGPTSearchView());


    };

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));

    }







    return (
        <div className=" flex  absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
            <img 
            className="w-44"
            src={LOGO}
            alt="logo"/>
            {user &&
            
            
            

            <div className="flex p-2">
              {showGPTSearchView &&
              <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => <option
                key={lang.identifier} value={lang.identifier}>
                  {lang.name}

                </option>)}
                
              </select>
                           }   
                
                
                
              <button className=" py-2 px-4 my-2  mx-4 rounded-lg bg-purple-800 text-white" 
              onClick={handleGPTSearchClick}>
                {showGPTSearchView?"HomePage":"GPT Search"}


              </button>
                <img className="w-10 h-10"
                
                alt="sign out logo"
                src={user?.photoURL}
                />
                <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">
                    Sign Out
                </button>
            </div>
               }
        </div>
        

        
    );
};
export default Header;