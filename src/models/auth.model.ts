export type login = {
    email: string;
    password: string;
};

export type register = login & {
    fullName: string;
    confirmPassword: string;
};