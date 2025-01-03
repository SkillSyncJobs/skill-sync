
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    companyName: {
        type: String, 
        required: true,
        trim: true,
    },
    companyPhoneNumber: {
        type: String, 
        required: true,
        trim: true
    },
    companyEmail: {
        type: String,
        trim: true,
    },
    
   
    password: {
        type: String, 
        required: true,
        minlength: 6,
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 6,
    },

    industryType: {
        type: String,
        required: true,
        trim: true
    },
    headquarterLocation: {
        type: String,
        required: true,
        trim: true
    },
    companySize: {
        type: String,
        required: true,
        
    },
    yearOfEstablishment: {
        type: String,
        required: true,
    },
    pointOfContactFirstName: {
        type: String,
        required: true,
        trim: true,
    },
    pointOfContactLastName: {
        type: String,
        required: true,
        trim: true,
    },
    pointOfContactDesignation: {
        type: String,
        required: true,
        trim: true
    },
    pointOfContactEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    pointOfContactPhoneNumber: {
        type: String,
        required: true,
    },
    jobRoles: {
        type: Object,
        required: true,
        trim: true
    },
    areasOfExpertiseSought: {
        type: Object,
        required: true,
        trim: true
    },
    companyLogo: {
        type: String,
        trim: true
    },
    companyWebsite: {
        type: String,
        trim: true,
    },
    linkedInProfile: {
        type: String,
        trim: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    verificationToken: String,
    verificationTokenExpire: Date
}, {
    timestamps: true
});


const Company = mongoose.model('Company', companySchema);

export default Company;