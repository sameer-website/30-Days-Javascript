function testing(callback) {
  callback();
  // callback();
}
testing(function () {
  console.log("testing-1");
  testing(function () {
    console.log("tesing-2");
    testing(function () {
      console.log("testing-3");
      testing(function () {
        console.log("testing-4");
      });
    });
  });
});
