import { useState } from "react";
import NoteContext from "./NoteContext";
import { data } from "react-router";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initnotes = [];
  const [notes, setNotes] = useState(initnotes);
  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdmNWZhNjQxZDQ1ZDNkZTNlMDEwNmYwIn0sImlhdCI6MTc0NDE5NDk0MX0.Onf7myLuMoPvzc6qCb73BPmLAoGfOmoGaBaktj8SFlE",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Notes
  const addNote = async (title, description, tag) => {
    // TODO API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdmNWZhNjQxZDQ1ZDNkZTNlMDEwNmYwIn0sImlhdCI6MTc0NDE5NDk0MX0.Onf7myLuMoPvzc6qCb73BPmLAoGfOmoGaBaktj8SFlE",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding a new note");
    const note = {
      _id: "67f6957690163feb10dac7238",
      user: "67f5fa641d45d3de3e0106f0",
      title: title,
      description: description,
      tag: tag,
      date: "2025-04-09T15:42:46.552Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdmNWZhNjQxZDQ1ZDNkZTNlMDEwNmYwIn0sImlhdCI6MTc0NDE5NDk0MX0.Onf7myLuMoPvzc6qCb73BPmLAoGfOmoGaBaktj8SFlE",
      },
    });
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdmNWZhNjQxZDQ1ZDNkZTNlMDEwNmYwIn0sImlhdCI6MTc0NDE5NDk0MX0.Onf7myLuMoPvzc6qCb73BPmLAoGfOmoGaBaktj8SFlE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    //API Call

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
