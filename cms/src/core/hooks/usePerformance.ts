import { MetricService } from "plpmd-sdk";
import { useCallback, useState } from "react";
import { ChartProps } from "../../app/components/Chart/Chart";
import transformEditorMonthlyEarningsIntoChartJs from "../utils/transformEditorMonthlyEarningsIntoChartJs";

export default function usePerformance() {
  const [error, setError] = useState<Error>()
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()


  const fetchEditorEarnings = useCallback(async function () {
    MetricService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])


  return {
    fetchEditorEarnings,
    editorEarnings,
    error
  }
}