import { BaseModel } from "./BaseModel";

export interface User extends BaseModel {
    id: number;
    userName: string;
    firstName: string;
}
