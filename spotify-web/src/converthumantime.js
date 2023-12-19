export default function convertHumanTime(duration) {
  let sec = (duration / 1000) % 60
  let min = (duration / (1000 * 60)) % 60
  sec = sec < 10 ? '0' + parseInt(sec, 10) : parseInt(sec, 10)
  min = parseInt(min, 10)
  return `${min}:${sec}`
}