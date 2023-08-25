const shipper = {};
const customer = {};
const transporter = {};

/** Initial engine params */
const _r = null;
const _x = null;
const _u = null;
const _i = null;
const _v = null;

const createShipper = async (r = null, x, u) => {
  return (r * x) / u;
};

const createCustomer = async (u, x, i, v) => {
  return (i * x) / (u * v);
};

const createTransporter = async (u, x) => {
  const R_X = (x, u) => {
    return null;
  };

  return R_X();
};

class Process {
  shipper = 0;
  customer = 1;
  constructor() {
    let isEquillibrium = false;
    const processChecker = this.shipper - this.customer;
    if (processChecker === 0) {
      isEquillibrium = true;
    }
    return isEquillibrium;
  }

  async start() {
    let u, x, v, i;
    await createCustomer(u, x, v, i);
    await createShipper(x, u);
    await createTransporter(u, x);
  }
  halt() {}
}

const _process = new Process();

_process.start();
