import SimplSchema from 'simpl-schema';

export default new SimplSchema({
    title: String,
    description: String,
    userId: {
        type: String,
        optional: true
    },
    views: {
        type: SimplSchema.Integer,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true
    },
    type: String,
});