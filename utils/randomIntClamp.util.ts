/**
 * Think of a number between x and y.. you get the idea.
*/
export function randomIntClamp(min:number,max:number){
    return Math.floor( Math.random() * ( max-min + 1 ) + min);
}