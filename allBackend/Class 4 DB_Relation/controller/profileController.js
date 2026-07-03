const profile = require("../modules/profile");

const getAllProfile = async (req, res) => {
    try {
        const result = await profile.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const addProfile = async (req, res) => {
    
        const { phone, age, city ,studentId } = req.body;
        const user = await profile.findOne({ where: { phone } });
        if (user) return res.status(400).json({ message: "Profile already exists" });
        
        await profile.create({ phone, age, city , studentId});
        res.status(201).json({ message: "Profile created" });
     
};

const deleteProfile = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await profile.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Profile not found" });
        }

        await user.destroy();

        res.status(200).json({ message: "Profile deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getAllProfile, addProfile, deleteProfile };