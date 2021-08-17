const rules = {
    3: "fizz",
    5: "buzz"
  };

for (let i = 1; i <= 100; i++) {
  let output = "";

  for (const key in rules) {
    if (i % key === 0) {
      output += rules[key];
    }
  }

  console.log(output || i);
}
