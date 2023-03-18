export const HOST = 'https://amictf-backend.herokuapp.com/v1';

export const REQUESTS = {
    LOGIN: 'LOGIN',
    REGISTRATION: 'REGISTRATION',
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
};

export const ALL_NAMES = {
    EMAIL: 'email',
    PASSWORD: 'password',
    USERNAME: 'username',
    CONFIRMED_PASSWORD: 'confirmPassword',
    CURRENT_PASSWORD: 'currentPassword',
    NEW_PASSWORD: 'newPassword',
};

export const REQUESTS_BODY_NAMES = {
    [REQUESTS.LOGIN]: {
        EMAIL: 'email',
        PASSWORD: 'password',
    },
    [REQUESTS.REGISTRATION]: {
        EMAIL: 'email',
        USERNAME: 'username',
        PASSWORD: 'password',
        CONFIRMED_PASSWORD: 'confirmPassword',
    },
    [REQUESTS.CHANGE_NAME]: {
        USERNAME: 'username',
    },
    [REQUESTS.CHANGE_PASSWORD]: {
        CURRENT_PASSWORD: 'currentPassword',
        NEW_PASSWORD: 'newPassword',
        CONFIRMED_PASSWORD: 'confirmPassword',
    },
};
