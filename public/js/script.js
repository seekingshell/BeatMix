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
  let neighborPads=[];
  if(size<=0 || x<0 || x>=size || y<0 || y>=size) {
    return [];
  }

  neighborPads.push([x - 1, y]);
  neighborPads.push([x, y - 1]);
  neighborPads.push([x + 1, y]);
  neighborPads.push([x, y + 1]);
  return neighborPads.filter((neighbor) => {
    return neighbor.every((val) => {
      return val >= 0 && val < size;
    });
  });
}
