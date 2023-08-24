import DefaultLayout from "../layout/Default/Default.layout";

import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";
import { useParams } from "react-router-dom";

export default function EditPostView() {
  usePageTitle('Editar post')
  const params = useParams<{ id: string} >()
  return <DefaultLayout><PostForm postId={Number(params.id)}/></DefaultLayout>

}