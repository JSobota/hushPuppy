function typeIn(input, value) {
  input.get(0).value = value.toString()
  input.simulate('change', input)
}
export default {
  typeIn
}
