import { Either } from '../../shared/either'
import { Todo } from '../../entities/todo'

export type ChangeTodoStatusResponse = Either<Error, Todo>