class Animal {
  // Tambahkan argument「name」dan「age」
  constructor(name, age) {
    // Ganti nilai string "Leo" dengan nilai milik argument name
    this.name = name;
    
    // Ganti「3」dengan nilai milik argument age
    this.age = age;
  }
}

// Teruskan argument「"Mocha"」「8」ke constant animal di bawah
const animal = new Animal("Mocha", 8);

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);
