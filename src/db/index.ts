import mongoose from 'mongoose';

const { MONGO_URI = '' } = process.env;
export class DbConnection {
    async connect(): Promise<void> {
        try {
            await mongoose.connect(MONGO_URI, {
            });
            console.log(`Successfully connected to ${MONGO_URI}`);
        } catch (error) {
            const err: any = error;
            if (error instanceof Error) {
                console.log('ERROR', err)
            }
            throw Error(`Error connecting to database ${MONGO_URI}: ${err.message}`);
        }
    }
}
