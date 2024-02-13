let fullname: string = process.argv[2];
  const words = fullname.split(" ");
  const firstInitial = words[0].charAt(0).toUpperCase();
  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();
  const initials = `${firstInitial}.${lastInitial}`;
console.log(initials);
