const mongoose = require("mongoose");

const tagValidator = (tags) => {
    const regex = /^[a-zA-Z0-9]+$/;
    const tagSet = new Set();
    for (const tag of tags) {
        if (!tag || !regex.test(tag)) return false;
        if (tagSet.has(tag)) return false;
        tagSet.add(tag)
    }
    return true
}

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        maxLength: 50
    },
    category: {
        type: String,
        required: true,
        enum: ["Electronics", "Clothing", "Books", "Home Appliances"]
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    SKU: {
        type: String,
        required: true,
        unique: true,
        match: [/^PROD-[a-zA-Z0-9]{4}$/, "It's not matching the required pattern"]
    },
    tags: {
        type: [String],
        validate: {
            validator: tagValidator,
            message: "This is not matching our requirement"
        }
    }
})