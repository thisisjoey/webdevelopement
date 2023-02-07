const { ab, ac } = require('./3-module-1');
const { aa } = require('./3-module-1');
//console.log(name);
const thisisfunction = (thisisargument) => {
    console.log(`hello ${thisisargument} ! how are you`);
}
thisisfunction('bhupesh');
const temp = 'joshi';
const temp1 = 'joey';
thisisfunction(aa);
thisisfunction(ab);
setTimeout(() => { console.log(aa); }, 2000);