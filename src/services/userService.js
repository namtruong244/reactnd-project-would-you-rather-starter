import {_getUsers} from "../utils/_DATA";

export const userService = {
    getAll() {
        return _getUsers();
    }
}
