import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { firebaseApp } from "../config/firebaseConfig"

const auth = getAuth(firebaseApp)

export const signUpWithEmail = async (email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error("Error signing up with email: ", error)
    }
}

export const signInWithEmail = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error("Error signing in with email: ", error)
    }
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
        await signInWithPopup(auth, provider)
    } catch(error) {
        console.error("Error signing in with Google: ", error)
    }
}

export const logout =  async () => {
    try {
        await signOut(auth)
    } catch(error) {
        console.error("Error signing out: ", error)
    }
}

export const getCurrentUser = () => {
    return auth.currentUser
}