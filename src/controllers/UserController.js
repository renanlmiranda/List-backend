const User = require('../models/user');

module.exports = {
  async findOne(req, res) {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });
    return res.json({ user });
  },

  async findAll(req, res) {
    const users = await User.find({});
    return res.json(users);
  },

  async create(req, res) {
    const payload = req.body;
    try {
      const userValidation = await User.findOne({ cpf: payload.cpf });

      if (userValidation) {
        throw new Error('CPF already exists!');
      }

      const newUser = {
        name: payload.name,
        age: payload.age,
        maritalStatus: payload.maritalStatus,
        cpf: payload.cpf,
        city: payload.city,
        state: payload.state,
      };

      const user = await new User(newUser);
      await user.save();

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    const id = req.params.userId;
    const payload = req.body;

    const user = await User.findOne({ _id: id });

    user.set({ ...payload, updatedAt: new Date() });
    await user.save();

    return res.json({ user });
  },

  async delete(req, res) {
    const id = req.params.userId;

    try {
      await User.remove({ _id: id });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }

    return res.json({ removed: true });
  },
};
