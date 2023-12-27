import { Role } from "./role";

export interface LoginResponseDto {
    name : String,
    email : String,
    role : Role,
    token : String
}
