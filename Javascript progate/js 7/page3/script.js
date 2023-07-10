const printKen = () => {
  console.log("Ninja Ken");
};

const call = (callback) => {
  console.log("Memanggil callback function.");
  callback();
};

call(printKen);

// Deklarasikan function di dalam argument dan teruskan
call(() => {
  console.log("Guru Domba");
});
