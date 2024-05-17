import mongoose from "mongoose";
const Schema = mongoose.Schema;

const homeSchema = new Schema ({
    phoneNumber: {
        type: String
    },

    email: {
        type: String

    }
})

const home = mongoose.model("home", homeSchema);
export default home