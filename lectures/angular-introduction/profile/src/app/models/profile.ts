import { ContactInfo } from './contactinfo';

export class Profile {
    name: string;
    age: number;
    contactinfo: ContactInfo[];
    isAdmin: boolean;
    poked: number;
}