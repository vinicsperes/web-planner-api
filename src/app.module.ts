import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { MongoDBModule } from './database/connection'

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongoDBModule,
    ], controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
