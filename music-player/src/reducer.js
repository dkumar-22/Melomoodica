export const initialState = {
  logged: false,
  username: null,
  playlists: [],
  currentSong: {},
  playing: false,
  songs: [],
  happy: [],
  neutral: [],
  angry: [],
  sad: [],
  favorites: null,
  flag: 0,
  mood: "angry",
  emoji: "",
  moodd: false,
  //Remove after finishing the debugging
};

function reducer(state, action) {
  console.log("🕺", action);
  switch (action.type) {
    case "SET_HAPPY":
      return {
        ...state,
        happy: action.happy,
      };
    case "SET_EMOJI":
      return {
        ...state,
        emoji: action.emoji,
      };
    case "SET_NEUTRAL":
      return {
        ...state,
        neutral: action.neutral,
      };
    case "SET_SAD":
      return {
        ...state,
        sad: action.sad,
      };
    case "SET_ANGRY":
      return {
        ...state,
        angry: action.angry,
      };
    case "SET_USER":
      return {
        ...state,
        username: action.username,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_LOGGED":
      return {
        ...state,
        logged: action.logged,
      };
    case "SET_FLAG":
      return {
        ...state,
        flag: action.flag,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SONGS":
      return {
        ...state,
        songs: action.songs,
      };
    case "SET_CSONG":
      return {
        ...state,
        currentSong: action.currentSong,
      };
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.favorites,
      };
    case "SET_MOOD":
      return {
        ...state,
        mood: action.mood,
      };
    case "SET_MOODD":
      return {
        ...state,
        mood: action.moodd,
      };
    default:
      return state;
  }
}

export default reducer;
