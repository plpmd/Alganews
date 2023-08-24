import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import styled from "styled-components";
import useTopTags from "../../core/hooks/useTopTags";
import CircleChart from "../components/CircleChart";


export default function UserTopTags() {
  const { topTags, fetchTopTags } = useTopTags()
  

  useEffect(() => {
    fetchTopTags()
  }, [fetchTopTags])

  if (!topTags.length)
    return <Wrapper>
      <Skeleton height={88} width={88} circle />
      <Skeleton height={88} width={88} circle />
      <Skeleton height={88} width={88} circle />
    </Wrapper>


  return <Wrapper>
    {topTags.map((tag, i) => {
      return <CircleChart
        key={i}
        progress={tag.percentage}
        size={88}
        caption={tag.tagName}
        theme={i === 0 ? 'primary' : 'default'}
      />
    })}
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`