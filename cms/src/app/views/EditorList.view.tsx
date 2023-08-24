import DefaultLayout from "../layout/Default/Default.layout";

import usePageTitle from "../../core/hooks/usePageTitle";
import EditorList from "../features/EditorList";

export default function EditorListView() {
  usePageTitle('Lista de editores')
  return <DefaultLayout>
    <EditorList />
  </DefaultLayout>

}