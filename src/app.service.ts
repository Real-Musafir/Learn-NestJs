import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 as uuid } from 'uuid';

interface Report {
  amount: number;
  source: string;
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }

  getRemportById(type: ReportType, id: String) {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }

  createReport(type: ReportType, { amount, source }: Report) {
    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type,
    };

    data.report.push(newReport);
    return newReport;
  }

  updateReport(type: ReportType, id: string, body: Report) {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };

    return data.report[reportIndex];
  }
}
