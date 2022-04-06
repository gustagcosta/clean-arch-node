import { Either } from '../../shared/either'
import { Todo } from '../../entities/todo'

export type CreateTodoResponse = Either<Error, Todo>