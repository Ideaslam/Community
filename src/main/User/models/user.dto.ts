import { Base } from "src/main/Shared/models/Base.model";

export class UserFilterDto{
 
}

export class UserCreateDto{
  
}


export class UserUpdateDto{
 
}


export class UserDto extends Base {
   
    id :number ; 
    countryCode? :string ; 
    phoneNumber? :string ; 
    email :string ; 
    level?: number  ; 
    isActive :string ; 
    isDeleted :number ; 
 
}

