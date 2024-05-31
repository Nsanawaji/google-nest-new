import { Controller, Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nsanawajiotuekong:UctCFexIXA2VaWQY@cluster0.vvgqnrp.mongodb.net/google-nest',
    ),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
