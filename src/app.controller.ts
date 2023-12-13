import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getAllReports() {
    return [];
  }

  @Get(':id')
  getRemportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put(':id')
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}
