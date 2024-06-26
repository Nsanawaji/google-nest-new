import { Module } from "@nestjs/common"
import { ConfigService } from "@nestjs/config";
import { MongooseModule} from "@nestjs/mongoose";
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService,): Promise<any> => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService]
    }),
  ],
  controllers: [],
  providers: [ConfigService],
})
export class DatabaseModule {}
