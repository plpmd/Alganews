import { useEffect } from 'react'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components"
import useUser from "../../core/hooks/useUser"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"


export default function UserEarnings() {
  const {user, fetchUser } = useUser()

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (!user)
    return <Wrapper style={{height: 123}}>
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
    </Wrapper>

  return <Wrapper>
    <ValueDescriptor
      color="primary"
      description="ganhos no mês"
      value={user.metrics.monthlyEarnings}
      isCurrency
    />
    <ValueDescriptor
      color="primary"
      description="ganhos na semana"
      value={user.metrics.weeklyEarnings}
      isCurrency
    />
    <ValueDescriptor
      color="default"
      description="ganhos de sempre"
      value={user.metrics.lifetimeEarnings}
      isCurrency
    />
    <ValueDescriptor
      color="default"
      description="total de palavras"
      value={user.metrics.lifetimeWords}
    />
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`