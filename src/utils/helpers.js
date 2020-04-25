export const onSpecificKeyPress = (event, key, cb, ...args) => {
  if (event.key === key) {
    cb(...args)
  }
}
