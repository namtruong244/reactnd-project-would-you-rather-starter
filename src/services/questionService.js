import {_getQuestions} from "../utils/_DATA";

export const questionService = {
    getAll() {
        return _getQuestions();
    }
}
