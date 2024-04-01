import { observer } from "mobx-react-lite";
import { types, getSnapshot } from "mobx-state-tree";
// import { Provider } from "mobx-state-tree";
// import { defaultPreferences } from "../models/preferences";
import PomPreferences from "../models/preferences";
import { useContext } from "react";

const store = PomPreferences.create();

export const FocusInput = observer(() => {
  const store = useContext(PomPreferences);

  // Accessing values from the store
  const { focus } = store;
  const { length, music, fadeOut } = focus;

  const handleNewInput = function (e) {
    e.preventDefault();
    // Access and use MobX-State-Tree actions to update state
    store.setFocusLength(focusTime);
    store.setFocusMusic(focusMusic);
    console.log("Form submitted with values:", {
      focusTime,
      focusMusic,
      autoRest,
      fadeOut,
    });
  };

  return (
    <>
      <h2>Cadence Clock</h2>
      <form onSubmit={handleNewInput}>
        <div>
          <div>
            <h3>How long to Focus?</h3>
            <input
              type="text"
              name="focusTime"
              placeholder="ex: 25"
              value={length}
              onChange={(e) => setFocusTime(parseInt(e.target.value))}
            />
          </div>
          <div>
            <h3>Playlist URL for Focus Tunes</h3>
            <input
              type="text"
              name="focusMusic"
              placeholder="www.youtube...."
              value={music}
              onChange={(e) => setFocusMusic(e.target.value)}
            />
          </div>
          <div>
            <h3>Auto-rest</h3>
            <input
              type="checkbox"
              name="autoRest"
              checked={autoRest}
              onChange={(e) => setAutoRest(e.target.checked)}
            />
          </div>
          <div>
            <h3>End of Focus Time</h3>
            <input
              type="checkbox"
              name="fadeOut"
              checked={fadeOut}
              onChange={() => focus.toggleFadeOut()}
            />
            <label>Fade Out</label>
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </>
  );
});
