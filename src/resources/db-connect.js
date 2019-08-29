import monk from 'monk'

const URL = '127.0.0.1/talent2';
export const db = monk(URL);