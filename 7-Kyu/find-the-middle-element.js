function gimme (triplet) {
    let middleOne = triplet.slice().sort((a, b) => a - b)[1]
    return triplet.indexOf(middleOne)
  }