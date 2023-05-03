"use client";

import { useState } from "react";

export default function NewProjectForm() {
  const [nameInputValue, setNameInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-slate-600 p-4 flex flex-col"
    >
      <h3 className="mb-4">New Project</h3>
      <div className="flex flex-col mb-2">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setNameInputValue(e.target.value)}
          value={nameInputValue}
          type="text"
          name="name"
          id="name"
          placeholder="Enter the name of your project"
          className="p-2 text-gray-900"
          required
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="description">Description</label>
        <input
          onChange={(e) => setDescriptionInputValue(e.target.value)}
          value={descriptionInputValue}
          type="text"
          name="description"
          id="description"
          placeholder="Describe your project"
          className="p-2 text-gray-900"
        />
      </div>
      <button
        onClick={() =>
          console.log(
            "name: ",
            nameInputValue,
            "description: ",
            descriptionInputValue
          )
        }
        className="mt-2 p-2 bg-slate-500"
      >
        Create Project
      </button>
    </form>
  );
}
