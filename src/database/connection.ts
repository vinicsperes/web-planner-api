import { MongooseModule } from "@nestjs/mongoose";

export const MongoDBModule = MongooseModule.forRootAsync({
    inject: [],
    useFactory: () => ({
        uri: process.env.MONGO_URI,
    }),
})
