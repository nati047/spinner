// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let interval = 200;
let lines = ['|', '/', '-',  '\\', '|', '/', '-', '\\','|'];
lines.forEach((dash, i) => {
  setTimeout(() => {
    process.stdout.write(`\r${dash}   `);
  }, i * interval);
}
);
