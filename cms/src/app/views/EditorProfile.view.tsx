import ErrorBoundary from "../components/ErrorBoundary";
import EditorProfile from "../features/EditorProfile";
import DefaultLayout from "../layout/Default/Default.layout";

function EditorProfileView() {
  return <DefaultLayout>
    <ErrorBoundary>
      <EditorProfile />
    </ErrorBoundary>
  </DefaultLayout>
}

export default EditorProfileView