import { User } from '../models/User';

export class UserRepository {
  private static _instance: UserRepository;

  private users: User[];

  private idCount: number;

  private constructor() {
    this.idCount = 1;
    this.users = [];
    this.users.push({
      id: 1,
      name: "João",
      username: "joao",
      email: "joao@gmail.com"
    });
  }

  static get instance(): UserRepository {
    if (!UserRepository._instance) {
      UserRepository._instance = new UserRepository();
    }
    return this._instance;
  }

  public findAll(): User[] {
    return this.users;
  }

  public findOne(id: string): User | undefined {
    return this.users.find(user => user.id === Number(id));
  }
  
  public save(user: User): User {
    user.id = ++this.idCount;
    this.users.push(user);
    return user;
  }

  public update(user: User) {
    const findUser = this.users.find((item, index) => {
      if (item.id === user.id) {
        this.users[index] = user;
      }
    });

    return findUser;
  }

  public delete(id: number): boolean {
    const deleted: boolean = false;
    this.users.find((user, index) => {
      if (user.id === id) {
        this.users.splice(index, 1);
      }
    })

    return deleted;
  }
}