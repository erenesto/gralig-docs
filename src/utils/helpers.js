export const onKeyPressEnter = (event, cb, ...args) => {
  console.log(event, ...args)
  if (event.key === 'Enter') {
    cb(...args)
  }
}
