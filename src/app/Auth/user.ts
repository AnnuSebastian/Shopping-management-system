import { Role } from "./role";

export interface User {
    id : number,
    name : String,
    email : String,
    password : String,
    dateOfBirth : Date,
    role : Role
}
