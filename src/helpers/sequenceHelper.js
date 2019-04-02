// This file is used to create an array that can adjust
// the sort order of notes into it's proper base configuration.

const flipSequence = [5, 3, 1, -1, -3, -5]

var container = []
var notesOrder = []

for (let index = 0; index < 22; index++) {
  flipSequence.forEach(item => container.push(item))
}

for (let index = 0; index < container.length - 6; index++) {
  notesOrder.push(index + container[index])
}

// This is to adjust for edgecase numbers that aren't properly truncated
// very hacky but I'm not sure of a better solution currently
notesOrder.push(127)
notesOrder.push(126)

export default {
  notesOrder
}
