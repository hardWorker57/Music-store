import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";

const AuthDetails = ({isUserAuth}) => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                isUserAuth(user.email);
            }
            else {
                setAuthUser(null);
                isUserAuth(null);
            }
        })
        return () => {
            listen();
        }
    }, []);
    

    function userSignOut() {
        signOut(auth)
            .then(() => console.log('success'))
            .catch((e) => console.log(e));
    }

    return (
        <div>
            {authUser ? (
                <div>
                    <p>{`Signed in as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Log out</button>
                </div>
            ) : (
                    <div>
                    <p>Logged out</p>        
                </div>
            )    
            }
        </div>
    );
};

export default AuthDetails;
