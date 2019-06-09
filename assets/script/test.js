const beatTimestamps = [];

function play() {
  const now = Date.now();
  const length = 0.25 * 60 * 1000;
  const bpm = 134;
  const interval = 60 * 1000 / bpm;
  for (let i = now; i < now + length; i += interval) {
    beatTimestamps.push(i);
  }
  
  let nextBeatPos = 1;
  window.setInterval(() => {
    const now = Date.now();
    const timeToBeat = beatTimestamps[nextBeatPos] - now;
    if (timeToBeat < 5) {
      console.log('TIC', timeToBeat);
      const out = document.getElementById('output');
      out.innerHTML = nextBeatPos;
      nextBeatPos += 1;
    }
  }, 5)
}

console.log(beatTimestamps);

play();