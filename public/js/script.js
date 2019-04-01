// Drum Arrays
let kicks=new Array(16).fill(false);
let snares=new Array(16).fill(false);
let hiHats=new Array(16).fill(false);
let rideCymbals=new Array(16).fill(false);

function toggleDrum(arrayName, arrayIndex) {
  let localArrayName = arrayName || 'default';
  let localArrayIndex = arrayIndex;
  if(localArrayIndex < 0 || localArrayIndex >=16) {
    return;
  }
  switch(localArrayName.toLowerCase()) {
    case 'kicks':
      kicks[localArrayIndex] = !kicks[localArrayIndex];
      break;
    case 'snares':
      snares[localArrayIndex] = !snares[localArrayIndex];
      break;
    case 'hihats':
      hiHats[localArrayIndex] = !hiHats[localArrayIndex];
      break;
    case 'ridecymbals':
      rideCymbals[localArrayIndex]= !rideCymbals[localArrayIndex];
      break;
    default:
      return;
  }
}

function clear(arrayName) {
  let localArrayName = arrayName || 'default';
  switch(localArrayName.toLowerCase()) {
  case 'kicks':
    kicks.forEach((element, index, array)=>array[index]=false);
    break;
  case 'snares':
    snares.forEach((element, index, array)=>array[index]=false);
    break;
  case 'hihats':
    hiHats.forEach((element, index, array)=>array[index]=false);
    break;
  case 'ridecymbals':
    rideCymbals.forEach((element, index, array)=>array[index]=false);
    break;
  default:
    return;
  }
}

function invert(arrayName) {
  let localArrayName = arrayName || 'default';
  switch(localArrayName.toLowerCase()) {
  case 'kicks':
    kicks.forEach((element, index, array)=>array[index]=!element);
    break;
  case 'snares':
    snares.forEach((element, index, array)=>array[index]=!element);
    break;
  case 'hihats':
    hiHats.forEach((element, index, array)=>array[index]=!element);
    break;
  case 'ridecymbals':
    rideCymbals.forEach((element, index, array)=>array[index]=!element);
    break;
  default:
    return;
  }
}

function getNeighborPads(x, y, size) {
  if(size<=0 || x<0 || x>=size || y<0 || y>=size) {
    return [];
  }

  if(x===0) {
    if(y===0) {
      //no left neighbor or below neighbor
      // [right neighbor, above neighbor]
      return [[x+1,y],[x,y+1]];
    }

    if(y===size-1) {
      // no left neighbor or above neighbor
      // [right neighbor, below neighbor]
      return [[x+1,y],[x,y-1]];
    }

    // no left neighbor
    // [right, above, below]
    return [[x+1,y],[x,y+1],[x,y-1]];
  }

  if(x===size-1) {
    if(y===0) {
      // no right neighor or below neighbor
      // [left neighbor, above neighbor]
      return [[x-1,y],[x,y+1]];
    }

    if(y===size-1) {
      // no right neighbor or above neighbor
      // [left neighbor, below neighbor]
      return [[x-1,y],[x,y-1]];
    }

    //no right neighbor
    // [left, above, below]
    return [[x-1,y],[x,y+1],[x,y-1]];
  }

  if(y===0) {
    // no below neighbor
    // [left, right, above]
    return [[x-1,y],[x+1,y],[x,y+1]];
  }

  if(y===size-1) {
    // no above neighbor
    // [left, right, below]
    return [[x-1,y],[x+1,y],[x,y-1]];
  }

  // [left, right, above, below]
  return [[x-1,y],[x+1,y],[x,y+1],[x,y-1]];
}
