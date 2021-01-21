import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {

     public sid :string; 
     public dev : boolean =true; 
}
