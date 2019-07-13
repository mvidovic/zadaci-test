function lpf(a) {
  b = 2;
  while (a > b) {
    if (a % b == 0) {
      a = a / b;
      b = 2;
    } else {
      b += 1;
    }
  }
  return b;
}
lpf(600851475143);
