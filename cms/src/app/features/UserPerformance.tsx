import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import withBoundary from "../../core/hoc/withBoundary"
import usePerformance from "../../core/hooks/usePerformance"
import Chart from "../components/Chart/Chart"

function UserPerformance() {
  const { editorEarnings, error, fetchEditorEarnings } = usePerformance()

  useEffect(() => {
    fetchEditorEarnings()
  }, [fetchEditorEarnings])

  if(error)
    throw error

  if (!editorEarnings)
    return <div>
      <Skeleton height={227}/>
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}

export default  withBoundary(UserPerformance, 'performance')