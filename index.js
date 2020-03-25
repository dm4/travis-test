let lib_path = `./bin/${process.platform}/${process.arch}/ssvm.node`;
let ssvm = require(lib_path);

module.exports = ssvm;
