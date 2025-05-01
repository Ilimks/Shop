export interface User {
    id: number;
    name: string;
    surname: string;
    number: string;
    email: string;
    address: string;
    isAdmin: boolean;
    favorites: number[];
}
  
export interface CreateUserDto {
    name: string;
    surname: string;
    number: string;
    email: string;
    address: string;
    favorites?: number[];
}
  
export interface UpdateUserDto extends Partial<CreateUserDto> {}
  