import usePageTitle from "../../core/hooks/usePageTitle"
import usePosts from "../../core/hooks/usePosts"
import ErrorBoundary from "../components/ErrorBoundary"
import PostList from "../features/PostList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layout/Default/Default.layout"



export default function Home() {
  usePageTitle('Home')


  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px' }}>
      <UserTopTags />
      <UserEarnings />
    </div>

    <UserPerformance />

    <ErrorBoundary component="postagens">
      <PostList />
    </ErrorBoundary>
  </DefaultLayout>
}