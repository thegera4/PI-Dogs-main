export function validationError(input){
  const ERROR_MESSAGES = {};
  if(!input.name) ERROR_MESSAGES.name = 'Please enter a breed name';
  if(input.hmin > input.hmax) ERROR_MESSAGES.height = 'Min height must be less than max height';
  return ERROR_MESSAGES; 
}
export function selectHeight(){
  const ARR = [];
    for(let i = 0; i < 111; i++){
      ARR.push(i);
    }
  return ARR;
}
export function selectWeight(){
  const ARR = [];
    for(let i = 0; i < 161; i++){
      ARR.push(i);
    }
  return ARR;
}
export function selectLifespan(){
  const ARR = [];
    for(let i = 0; i < 31; i++){
        ARR.push(i);
    }
  return ARR;
}