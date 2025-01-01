import mongoose from "mongoose";

const schema = new mongoose.Schema({
    CompanyName: {type: String, required: true},
    CompanyAdress: {type: String, required: true},
    CompanyEmail: {type: String, required: false},
    Password: {type: String, required: true},
    ConfirmPassword: {type: String, required: true},
    IndustryType: {type: String, required: true},
    WhereisyourHeadquarterlocated: {type: String, required: true},
    CompanySize: {type: String, required: true},
    YearofEstablishment: {type: String, required: true},
    FirstName: {type: String, required: true},
    LastName: {type: String, required: true},
    Designation: {type: String, required: true},
    Email: {type: String, required: true},
    PhoneNumber: {type: String, required: true},
    TypicalRoles: {type: String, required: true},
    AreasofExpertiseSought: {type: String, required: true},
    Companylogo: {type: String, required: false},
    CompanyWebsite: {type: String, required: false},
    LinkedinProfile: {type: String, required: false},
    lastLogin: {type: Date, default: Date.now},
    isVerified: {type: Boolean, default: false}});

const companySchema = mongoose.model("company", schema);
export default companySchema;