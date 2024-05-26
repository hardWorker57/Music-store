import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, GoogleProvider } from '../../../config/firebase';

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err);
        }
    };
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, GoogleProvider);
        } catch (err) {
            console.log(err);
        }
    };
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.log(err);
        }
    };

  return (
      <div className='flex flex-col gap-y-9 items-center'>
          <h2>Auth</h2>
          <div className="inputs">
            <input onChange={(e) => setEmail(e.target.value)} placeholder='email' type="text" /> <span></span>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" />    
          </div>
          <button onClick={signIn}>Sign in</button>
          <button onClick={signInWithGoogle}>Sign in with google</button>
          <button onClick={logOut}>Log out</button>
      </div>
      
  )
}

export default Auth