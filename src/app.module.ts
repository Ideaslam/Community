import { Module } from '@nestjs/common';
 
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainModule } from './main/main.module';
 
import { typeOrmConfig } from './config/typeorm.config';
 
 

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
 
    MainModule,
   
     
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
