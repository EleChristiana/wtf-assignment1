function factorial(num)
{
    let sum = 1;
    for(let i = 1; i<=num; i++){
    sum *=i;
}
  return sum;
}

console.log(factorial(20));