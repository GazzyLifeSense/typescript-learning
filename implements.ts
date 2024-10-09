interface Point {
  x: number;
  y: number;
}

class MyPoint implements Point {
  z: number;
  x: number;
  y: number;
}
interface Point {
  z: number; // New member
}
  