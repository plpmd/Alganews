import DefaultLayout from "../layout/Default/Default.layout";

import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";

export default function CreatePostView() {
  usePageTitle('Novo post')
  return <DefaultLayout><PostForm/></DefaultLayout>

}