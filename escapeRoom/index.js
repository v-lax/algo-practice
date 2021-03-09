const keypads = [
  'aelwxyz',
  'aelpxyz',
  'aelpsxy',
  'saelprt',
  'xaebksy'
]

const words = ['words','pleas','please']

const openDoor = keypads.map(pad=>{
  const map = {}
  pad.split('').forEach(char=>map[char]=true)
  console.log(map);
})