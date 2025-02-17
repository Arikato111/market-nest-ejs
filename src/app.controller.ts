import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    res.cookie('hello', { store: [] }, { httpOnly: true, sameSite: true });
    console.log(req.cookies);
    return res.render('pages/index', { title: 'Home' });
  }
}
