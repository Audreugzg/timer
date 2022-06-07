const args = process.argv.slice(2);
for (const t of args) {
  
    let timeout = Number(t) * 1000;
    if(isNaN(timeout)){
      continue;
    }
    if(timeout < 0){
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeout);
  
  

}