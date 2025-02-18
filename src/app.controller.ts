import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import Pages from './views/_register';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('id')
  checkApi() {
    return { msg: 'Hello' };
  }

  @Get()
  async getHello(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.cookie('hello', { store: [] }, { httpOnly: true, sameSite: true });
    console.log(req.cookies);
    return await Pages.render(Pages.index(), { title: 'home' });
  }
}
