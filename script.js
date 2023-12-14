export function exercise01(args) /*defining the function*/ {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  let result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = "Two Words"
  const res = input
  assert.equal(res, 2)
  let result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "Two Words" || currentElement === " Two Words") {
      count = spaces + 1
    } else if (currentElement === " Two Words") {
      count = spaces + 1
    }
  }
  return count
}

export function exercise05(args) {
  const input = "all lower case here...."
  const res = funcs.exercise05(input)
  assert.equal(res, false)
  let result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "Two Words" || currentElement === " Two Words") {
      count = spaces + 1
    } else if (currentElement === " Two Words") {
      count = spaces + 1
    }
  }
  return count
}
