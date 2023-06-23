import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getDatabase, ref, child, get
} from "firebase/database"
import { firebaseApp } from "../config/firebaseConfig";


export const db = getDatabase(firebaseApp)
export const auth = getAuth(firebaseApp);

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing up with email: ", error);
  }
};

export async function SignInAsGuest(): Promise<void> {
  await signInWithEmailAndPassword(auth, "nyanpasu@gmail.com", "nyanpasuuuuu");
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};
