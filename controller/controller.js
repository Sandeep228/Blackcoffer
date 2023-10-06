const Item = require("../models/ItemSchema");

const average = async (req, res) => {
  try {
    const average = await Item.find();

    res.status(200).json(average);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const year = async (req, res) => {
  try {
    const year = await Item.find();
    console.log(year);

    res.status(200).json({ msg: "year sent", data: year });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const energy = async (req, res) => {
  try {
    const response = await Item.find({ sector: "Energy" });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const manufacturing = async (req, res) => {
  try {
    const response = await Item.find({ sector: "Manufacturing" });
    return res.status(200).json({ msg: "manufacturing sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const aero = async (req, res) => {
  try {
    const response = await Item.find({ sector: "Aerospace & defence" });
    return res.status(200).json({ msg: "aero sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const gas = async (req, res) => {
  try {
    const response = await Item.find({ topic: "gas" });
    return res.status(200).json({ msg: "gas sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const oil = async (req, res) => {
  try {
    const response = await Item.find({ topic: "oil" });
    return res.status(200).json({ msg: "oil sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const consumption = async (req, res) => {
  try {
    const response = await Item.find({ topic: "consumption" });
    return res.status(200).json({ msg: "consumption sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const world = async (req, res) => {
  try {
    const response = await Item.find({ region: "World" });
    return res.status(200).json({ msg: "world sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const northernamerica = async (req, res) => {
  try {
    const response = await Item.find({ region: "Northern America" });
    return res
      .status(200)
      .json({ msg: "northernamerica sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const centralamerica = async (req, res) => {
  try {
    const response = await Item.find({ region: "Central America" });
    return res.status(200).json({ msg: "centralamerica sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// const india = async (req, resp) => {
//   try {
//     let table = await connection();
//     let response = await table.find({ country: 'India' }).toArray();
//     resp.status(200).json({ msg: 'India sent', data: response });
//   } catch (err) {
//     resp.status(400).json({ msg: 'err' });
//   }
// };

const usa = async (req, res) => {
  try {
    const response = await Item.find({ region: "Northern America" });
    return res.status(200).json({ msg: "USA sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const russia = async (req, res) => {
  try {
    const response = await Item.find({ country: "Russia" });
    return res.status(200).json({ msg: "Russia sent", data: response });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const political = async (req, res) => {
  try {
    const response = await Item.find({ pestle: "Political" });
    console.log(response);
    return res.status(200).json({ msg: "political sent", data: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const technological = async (req, res) => {
  try {
    const response = await Item.find({ pestle: "Technological" });
    console.log(response);
    return res.status(200).json({ msg: "political sent", data: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const test = async (req, res) => {
  await within(india, res, 7000);
};

async function within(fn, res, duration) {
  const id = setTimeout(
    () =>
      res.json({
        message: "There was an error with the upstream service!",
      }),
    duration
  );

  try {
    let data = await fn();
    clearTimeout(id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function india(req, res) {
  try {
    const response = await Item.find({ country: "India" });
    console.log(response);
    return res.status(200).json({ msg: "India sent", data: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  average,
  energy,
  manufacturing,
  aero,
  gas,
  oil,
  consumption,
  world,
  northernamerica,
  centralamerica,
  india,
  usa,
  russia,
  political,
  technological,
  test,
  year,
};
