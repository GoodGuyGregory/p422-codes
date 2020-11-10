import { ContactInfo } from '../models/contactinfo';
import { Profile } from '../models/profile';

export const PROFILES: Profile[] = [
    { name: 'Greg', age: 26, contactinfo: [{ type: 'Home', phone: '555-867-5309', address: '123 street rd', email: 'greg@bar.com' }] },
    { name: 'Marty', age: 55, contactinfo: [{ type: 'Home', phone: '555-555-5309', address: '400 straight road', email: 'marty@bar.com' }] },
    { name: 'Diablo', age: 60, contactinfo: [{ type: 'Home', phone: '555-424-4209', address: '321 wrong way drive', email: 'diablo@bar.com' }] }
]