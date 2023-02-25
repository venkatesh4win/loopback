import { ApplicationConfig } from '@loopback/core';
import { SagoApplication } from './application';
export * from './application';
export { PackageInfo, PackageKey, SagoApplication } from './application';
export declare function main(options?: ApplicationConfig): Promise<SagoApplication>;
