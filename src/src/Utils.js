

export const matchExactString = (regex,string) => {
  const matched= string.match(regex)
  return  (matched !==null && matched[0] === string )
}


export const getRange = (end) =>  Array(end).fill().map((_,i) => i)
