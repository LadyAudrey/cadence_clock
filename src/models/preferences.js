// PVA types- it is a function that allows create different definitions of what your objects/ state
import { types } from "mobx-state-tree";
import { createContext, useContext } from "react";

// a "factory"
const Focus = types
  .model("Focus", {
    id: types.identifier,
    length: types.integer,
    music: types.string,
    fadeOut: types.boolean,
    autoRest: types.boolean,
  })
  // Calls the actions method of the t export- receives model definition "self"
  // implicit return in .actions() and is relatively predictable
  .actions((self) => ({
    setLength(length) {
      self.length = length;
    },
    setMusic(music) {
      self.music = music;
    },
    setFadeOut(fadeOut) {
      self.fadeOut = fadeOut;
    },
    setAutoRest(autoRest) {
      self.autoRest = autoRest;
    },
  }));

const PomPreferences = types
  .model("PomPreferences", {
    focus: types.optional(Focus, {
      id: "1",
      length: 25,
      music: "we'll take care of this later",
      fadeOut: false,
      autoRest: false,
    }),
  })
  .actions((self) => ({
    setFocusLength(length) {
      self.focus.setLength(length);
    },
    setFocusMusic(music) {
      self.focus.setMusic(music);
    },
    setFadeOut() {
      self.fadeOut = !self.fadeOut;
    },
    setAutoRest() {
      self.autoRest = !self.autoRest;
    },
  }));

export const store = PomPreferences.create();
