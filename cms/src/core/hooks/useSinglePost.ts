import { Post, PostService } from "plpmd-sdk";
import { useCallback, useState } from "react";
import info from "../utils/info";

export default function useSinglePost() {
  const [post, setPost] = useState<Post.Detailed>()
  const [loading, setLoading] = useState(false)

  const fetchSinglePost = useCallback(async function (postId: number) {
    setLoading(true)
    PostService
      .getExistingPost(postId)
      .then(setPost)
      .finally(() => setLoading(false))
  }, [])


  async function publishPost(postId: number){
    await PostService.publishExistingPost(postId)
    info({
      title: 'Post publicado',
      description: 'Você publicou o post com sucesso'
    })
  }

  return {
    post, loading, fetchSinglePost, publishPost
  }
}