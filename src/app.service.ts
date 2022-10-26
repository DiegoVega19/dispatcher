import { Injectable } from '@nestjs/common';
import {
  ProxyModuleOptions,
  ProxyModuleOptionsFactory,
} from '@finastra/nestjs-proxy';
import * as config from 'config-yml';

@Injectable()
export class AppService implements ProxyModuleOptionsFactory {
  createModuleConfig = (): ProxyModuleOptions => ({
    services: config.services,
  });
}
