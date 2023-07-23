const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 100
    },
    address: [{
        _id: false,
        city: String,
        state: String,
        country: String,
        pincode: Number
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

async function createUser() {
    try {
        const vivek = new User({ name: 'Vivek', age: 22 });
        await vivek.save();
        return vivek;
    }
    catch (err) {
        console.log(err);
    }
}

async function addAddress(id, address) {
    const user = await User.findById(id);
    user.address.push(address);
    await user.save();
    return user;
}

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationship-db');
    console.log('Connection Open!');
    // const user = await createUser();
    const user = await addAddress("64bce00421cdbb0ff1edd07d", {
        city: 'New Delhi',
        state: 'Delhi',
        country: 'India',
        pincode: 110025
    })
    console.log('Address saved to the user');
    console.log(user);
    await mongoose.disconnect();
    console.log('Connection Closed');
}

main();