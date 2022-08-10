import axios from "axios";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();

  /* STATES */
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loginResult, setLoginResult] = useState("");
  const [recipeRating, setRecipeRating] = useState("");
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [bookedMarkedRecipes, setBookedMarkedRecipes] = useState([]);

  /* TESTTT */

  const [favRecipes, setFaveRecipes] = useState([]);
  //console.log(favRecipes)
  /* END TESSTT */
  /* TOKENS */
  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  /* USER AUTHENTICATION */
  const signup = async (username, email, picture, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/new-user`,
        {
          username,
          email,
          picture,
          password,
        }
      );

      navigate("/user/login");
    } catch (error) {
      console.log(error);
      setLoginResult("Email already exists in the database.");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await client.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      saveToken(response.data.token);
      setUser(response.data.user);

      navigate("/user/profile");
    } catch (error) {
      console.error("incorrect user " + error);
      setLoginResult(`Email or Password is incorrect.`);
    }
  };

  const editUser = async (id, newUsername) => {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/auth/edit-user/${id}`,
      {
        newUsername,
        /* newEmail,
        newPicture,
        newPassword, */
      }
    );
    navigate("/user/profile");
  };

  /* ADMIN RELATED ACTIONS */
  const addProduct = async (name, description, image, price) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/products/add`,
      {
        name,
        description,
        image,
        price,
      }
    );
    navigate("/user/profile");
  };

  /* RECIPES CREATION */
  const createMessage = async (name, email, message) => {
    const response = await client.post(
      `${process.env.REACT_APP_BACKEND_URL}/messages/new-message`,
      {
        name,
        email,
        message,

      }
    );
    setMessage((previousMessage) => {
      return [...previousMessage, response.data];
    });
    navigate("/");
  };



  const readRecipe = async (id) => {
    const response = await client.get(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/read/${id}`
    );

    return response.data;
  };

  




  



  useEffect(() => {
  
  }, []);

  const value = {
 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}