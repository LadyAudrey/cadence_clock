import { observer } from "mobx-react-lite";
import { types, getSnapshot } from "mobx-state-tree";
import { defaultPreferences } from "../models/preferences";

const presetPreferences = observer((props) => {
  return <div>Preferences! {defaultPreferences.length}</div>;
});

export function FocusInput() {
  let focusTime = 25;
  const focusMusic = "Youtube or Spotify Link :)";
  const autoRest = false;
  const fadeOut = false;

  function updateFocus(event) {
    focusTime = event.target.value;
  }

  const handleNewInput = function () {
    console.log("this form submitted!");
  };
  return (
    <>
      <h2>Cadence Clock</h2>
      <form onSubmit={handleNewInput}>
        <div>
          <div>
            <h3>How long to Focus?</h3>
            <defaultPreferences />
            <input
              type="text"
              name="focusTime"
              placeholder="ex: 25"
              value={focusTime}
              onChange={updateFocus}
            ></input>
          </div>
          <div>
            <h3>Playlist URL for Focus Tunes</h3>
            <input
              type="text"
              name="focusMusic"
              placeholder="www.youtube...."
              value={focusMusic}
            >
              string, music URL
            </input>
          </div>
          <div>
            <h3>Auto-rest</h3>
            <input type="text" name="autoRest" value={autoRest}>
              checkbox
            </input>
          </div>
          <div>
            <h3>End of Focus Time</h3>
            <input type="checkbox" name="finishSong" value={finishSong}>
              Finish Song
            </input>
            <input type="checkbox" name="fadeOut" value={fadeOut}>
              Fade Out
            </input>
          </div>
        </div>
        <button onClick={handleNewInput}>Next</button>
      </form>
    </>
  );
}
