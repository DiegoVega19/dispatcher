import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProxyModule } from '@finastra/nestjs-proxy';

@Module({
  imports: [
    ProxyModule.forRootAsync({
      useClass: AppService
    })
  ],
  providers: [AppService],
})
export class AppModule {}
