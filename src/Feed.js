import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user  = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

     <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
     </FlipMove>  
    </div>
  );
}

export default Feed;

//To have a bunch of messages in our feed, in able to capture that, we have to create a variable
//called posts, for every variable that you create using state, should have a setter function
//Whenever we want to change post, we use setPosts to change it, inside we pass in the initial
//value we want for this, so we pass in nothing, empty array
//Everytime we have a post, we are going to render it on the screen
//Everytime we have a clickable function, it has an event
//useEffect hook is a special code that allows us to fire off code when the feed component loads
//it also allows to fire off when the component rerenders if we dont pass the second argument
//if we pass in a blank dependance, then it will fire off once when the feed component loads
//but it will never fire off again after that, when the rerender happens, it will not fire off again.
//db.collection means accessing firebase collection
//onSnapShot gives a realtime connection to database, give me a snapshot of the post collection
//everytime that the collection changes, we will get a snapshot
//everytime the post change, it is going to update my post peice of state
//in a collection, you have many docs, and we are going to map through the docs.
//for every single doc inside of that collection, we are going to return an object
//this is going to get the id of the document and the data.
//created a realtime listener to firebase
//my value of the input field is this input state
//servertimestamp allows us to post from the same time
//whenever you have list, we want react to rerender only the last one that was ended that is why we give it a key
//if you dont give it a key, then react will rerender all the elements
//LINE 20 - orders the post by timestamp in a descending order. desc mean descending
//AUNTHENTICATION - Store the username inside of redux
//this animation needed reference to the object that was going to get animated
