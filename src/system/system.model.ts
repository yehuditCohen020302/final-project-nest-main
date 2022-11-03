import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
    urlName: { type: String, required: true, unique: true},
    urlImage:{type: String, required: true},
    subject: { type: String, required: true },
    manager_id: { type: String, required: true },
    description: { type: String, required: true },
    communicationDetails: { type: Object,  required: true }
})

export class System {
    urlName: string;
    urlImage: string;
    subject: string;
    manager_id: string;
    description: string;
    communicationDetails: Object;
}