import { observer } from "mobx-react-lite";
import { store } from "../models/preferences";

export const FocusInput = observer(() => {
  const { focus } = store;
  // Accessing values from the store
  const { length, music, autoRest, fadeOut, setFadeOut, setAutoRest } = focus;

  const handleNewInput = function (e) {
    e.preventDefault();
    console.log(length, music, fadeOut, autoRest);
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
              onChange={(e) => store.setFocusLength(parseInt(e.target.value))}
            />
          </div>
          <div>
            <h3>Playlist URL for Focus Tunes</h3>
            <input
              type="text"
              name="focusMusic"
              placeholder="www.youtube...."
              value={music}
              onChange={(e) => store.setFocusMusic(e.target.value)}
            />
          </div>
          <div>
            <h3>Auto-rest</h3>
            <input
              type="checkbox"
              name="autoRest"
              checked={autoRest}
              onChange={(e) => store.setAutoRest(e.target.checked)}
            />
          </div>
          <div>
            <h3>End of Focus Time</h3>
            <input
              type="checkbox"
              name="fadeOut"
              checked={fadeOut}
              onChange={() => store.toggleFadeOut()}
            />
            <label>Fade Out</label>
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </>
  );
});
