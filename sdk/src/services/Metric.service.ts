import { Metric } from "../@types";
import Service from "../Service";

class MetricService extends Service {
  static getTop3Tags() {
    return this.Http
      .get<Metric.EditorTagRatio>('/metrics/editor/top3-tags')
      .then(this.getData)
  }

  static getEditorMonthlyEarnings() {
    return this.Http
      .get<Metric.EditorMonthlyEarnings>('/metrics/editor/monthly-earnings')
      .then(this.getData)
  }

  static getMonthlyRevenuesExpenses() {
    return this.Http
      .get<Metric.MonthlyRevenuesExpenses>(
        '/metrics/monthly-revenues-expenses',
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
  }

  
  static getMonthlyRevenuesExpensesChartJs() {
    return this.Http
      .get<Metric.MonthlyRevenuesExpensesChartJs>(
        '/metrics/monthly-revenues-expenses',
        {
          headers: {
            'Content-Type': 'application/vnd.alganews.charjs+json'
          }
        }
      )
  }
}

export default MetricService