import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';

export default {

  async getAll(req: Request, res: Response) {
    const users: User[] = UserRepository.instance.findAll();

    return res.json(users);
  },

  async get(req: Request, res: Response) {
    const user: User | undefined = UserRepository.instance.findOne(req.params.id);

    return res.json(user);
  },

  async save(req: Request, res: Response) {
    const user: User = UserRepository.instance.save(req.body);

    return res.json(user);
  },

  async update(req: Request, res: Response) {
    const user: User | undefined = UserRepository.instance.update(req.body);

    return res.json(user);
  },

  async delete(req: Request, res: Response) {
    const deleted: boolean = UserRepository.instance.delete(Number(req.params.id));

    return !deleted ? res.status(200).json() : res.status(404).json();
  },

}