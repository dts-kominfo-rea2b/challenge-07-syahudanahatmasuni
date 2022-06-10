const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (marah) => {
  try {
    const [resIXX, resVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    
    const result = [...resIXX, ...resVGC]

    return result?.filter(item=> item.hasil === marah)?.length || 0
  } catch (error) {
    console.log("ada error: " + error);
  }
};

module.exports = {
  promiseOutput,
};
