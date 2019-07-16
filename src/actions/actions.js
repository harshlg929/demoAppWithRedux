import { LOGIN, SIGNUP } from './actionsTypes';

export function login(data) {
    return { type: LOGIN, data };
}

export function signup() {
    return { type: SIGNUP };
}

