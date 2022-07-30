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
export function containsSpecialChars(str) {
    const SPECIAL_CHARS = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    return SPECIAL_CHARS.test(str);
}
export function containsNumbers(num) {
    const NUMBERS = /\d/;
    return NUMBERS.test(num);
}
