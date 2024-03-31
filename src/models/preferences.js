import { types } from "mobx-state-tree";

const Focus = types.model({
  length: types.integer,
  music: types.string,
  fadeOut: true,
});

const PomPreferences = types.model({
  focus: types.reference(Focus),
});

const defaultFocus = Focus.create({
  length: 25,
  music: "we'll take care of this later",
  fadeOut: false,
});

export const defaultPreferences = PomPreferences.create({
  focus: defaultFocus,
});

// Uncaught Error: [mobx-state-tree] Can only store references with a defined identifier attribute.