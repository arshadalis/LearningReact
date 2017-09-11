


export const Direction = {

  North : {
    M : (x,y,facing) => {
      return({ x : x, y : y+1, facing:facing})
    },
    L : (x,y,facing) => {
      return({ x : x, y : y, facing:'West'})
    },
    R : (x,y,facing) => {
      return({ x : x, y : y, facing:'East'})
      }
    },

  East : {
    M : (x,y,facing) => {
      return({ x : x+1, y : y, facing:facing})
    },
    L : (x,y,facing) => {
      return({ x : x, y : y, facing:'North'})
    },
    R : (x,y,facing) => {
      return({ x : x, y : y, facing:'South'})
      }
    },

  South : {
    M : (x,y,facing) => {
      return({ x : x, y : y-1, facing:facing})
    },
    L : (x,y,facing) => {
      return({ x : x, y : y, facing:'East'})
    },
    R : (x,y,facing) => {
      return({ x : x, y : y, facing:'West'})
      }
    },

    West : {
      M : (x,y,facing) => {
        return({ x : x-1, y : y, facing:facing})
      },
      L : (x,y,facing) => {
        return({ x : x, y : y, facing:'South'})
      },
      R : (x,y,facing) => {
        return({ x : x, y : y, facing:'North'})
        }
      }
}
