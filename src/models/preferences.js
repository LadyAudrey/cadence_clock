import { types } from "mobx-state-tree";
import { createContext, useContext } from "react";

const Focus = types
  .model("Focus", {
    id: types.identifier,
    length: types.integer,
    music: types.string,
    fadeOut: types.boolean,
  })
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
  }));

const PomPreferences = types
  .model("PomPreferences", {
    focus: types.optional(Focus, {
      id: "1",
      length: 25,
      music: "we'll take care of this later",
      fadeOut: false,
    }),
  })
  .actions((self) => ({
    setFocusLength(length) {
      self.focus.setLength(length);
    },
    setFocusMusic(music) {
      self.focus.setMusic(music);
    },
    toggleFadeOut() {
      self.fadeOut = !self.fadeOut;
    },
  }));

const defaultFocus = Focus.create({
  id: "1",
  length: 25,
  music: "we'll take care of this later",
  fadeOut: false,
});

export default PomPreferences;
