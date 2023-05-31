/*------------------------------------------------------------------try / catch */
try {
  console.log(x);
} catch (error){
  console.log('Error: ' + error)            // Error: reference error: x is not defined
}

function double(number){
  if (isNaN(number)){
    throw new Error(number + 'is not a number')
  }
  return number * 2;
}

try{
  const y = double(10);
  console.log('Success')
} catch (error){
  console.log(Error)
}