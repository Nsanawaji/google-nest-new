import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async googleLogin(req) {
    if (!req.user) {
      return 'No user';
    }
    return {
      message: 'User info from google',
      user: req.user,
    };
  }
}
