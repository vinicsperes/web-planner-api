import { MongooseModule } from "@nestjs/mongoose";

export const MongoDBModule = MongooseModule.forRootAsync({
    inject: [],
    useFactory: () => ({
        uri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.w0hvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    }),
})
