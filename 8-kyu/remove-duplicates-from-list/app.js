function distinct(a) {
    let noDuplicates = []
     a.forEach(element => {
        if(!noDuplicates.includes(element)){
            noDuplicates.push(element)
        }
    })
    return noDuplicates
  }

  let a =  [1,2,3, 2, 1, 4,5,5]

  console.log(distinct(a));