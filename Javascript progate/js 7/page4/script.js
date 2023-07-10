const call = (callback) => {
  callback("Ninja Ken", 14);
};

// Tambahkan sebuah function yang menerima dua argument di dalam argument call
call((name, age) => {
  console.log(`${name} berusia ${age} tahun.`);
});
