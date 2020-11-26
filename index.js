const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray){
  let result = objArray.find(obj => obj.result === 'W')
  if (objArray.every(obj => obj.result !== 'W')){
    return undefined
  } else {
    return result.year
  }

}