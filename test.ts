
class User {

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public username: string,
  ) { };

}

class GenericRepository<T> {

  private entities: T[];

  constructor() {
    this.entities = [];
  };

  getAll(): T[] {
    return this.entities;
  }

  includeOne(entity: T): void {
    this.entities.push(entity);
  }

}

export class UserRepository extends GenericRepository<User> {
  
  private static _instance: UserRepository;

  private constructor() { 
    super();
  };

  static get instance(): UserRepository {
    if (!UserRepository._instance) {
      this._instance = new UserRepository();
    }
    return this._instance;
  }

}

UserRepository.instance.includeOne({
  id: 1,
  name: "João",
  username: "joao",
  email: "joao@gmail.com"
});
console.log(UserRepository.instance.getAll());