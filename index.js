const songs = [
  { title: "Bad Blood", singer: "Taylor Swift" },
  { title: "Better Together", singer: "Jack Johnson" },
  { title: "Lover", singer: "Taylor Swift" },
  { title: "Upside Down", singer: "Jack Johnson" },
  { title: "Shake It Off", singer: "Taylor Swift" },
  { title: "White Winter Hymnal", singer: "Pentatonix" },
  { title: "Forever Young", singer: "Rod Stewart" },
];

function getSongBySinger(singerName) {
  //filter songs array to get songs by specific singer
  const filteredSongs = songs.filter((song) => song.singer === singerName);

  //map the filtered songs to get only the song title
  const titles = filteredSongs.map((song) => song.title);

  return titles;
}

// test function
const jackJohnsonSongs = getSongBySinger("Jack Johnson");
console.log(jackJohnsonSongs);
