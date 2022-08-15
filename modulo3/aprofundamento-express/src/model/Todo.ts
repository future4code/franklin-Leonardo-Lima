export default class ToDo {
  userId!: number;
  id!: number;
  title!: string;
  completed!: boolean;

  constructor(userId: number, id: number, title: string, completed: boolean) {
    (this.id = id), (this.title = title), (this.completed = completed);
    this.userId = userId;
  }
}
