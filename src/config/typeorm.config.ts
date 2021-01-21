import { TypeOrmModuleOptions } from '@nestjs/typeorm';
 import * as config from "config";
//const config = require("config");
//process.env["NODE_CONFIG_DIR"] = __dirname + "/src/config/";
import { DbConfig } from './db.config';



var dbConfig = config.get<DbConfig>("dbConfig");
//let entityPath=[__dirname + "/../**/*.entity.{js,ts}"]; 
console.log(dbConfig);

dbConfig.entities=  [__dirname + "/../**/*.entity.{js,ts}"] ;
 
  
export const typeOrmConfig: TypeOrmModuleOptions =  <TypeOrmModuleOptions>dbConfig;
