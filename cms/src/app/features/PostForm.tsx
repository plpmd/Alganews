import { useEffect, useState } from 'react'
import styled from "styled-components"
import { Tag } from 'react-tag-input'
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
import MarkdownEditor from "../components/MarkdownEditor"
import TagInput from "../components/TagInput"
import WordPriceCounter from '../components/WordPriceCounter'
import Button from '../components/Button/Button'
import countWordsInMarkdown from '../../core/utils/countWordsInMarkdown'
import info from '../../core/utils/info'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
import { PostService } from 'plpmd-sdk'

interface PostFormProps {
  postId?: number
}

export default function PostForm(props: PostFormProps) {

  const navigate = useNavigate()
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [publishing, setPublishing] = useState(false)

  async function insertNewPost() {
    const newPost = { body, title, tags: tags.map(tag => tag.text), imageUrl }
    await PostService.insertNewPost(newPost)

    info({
      title: 'Post salvo com sucesso',
      description: `Você acabou de criar o post`
    })
  }

  async function updateExistingPost(postId: number) {
    const updatePost = { body, title, tags: tags.map(tag => tag.text), imageUrl }
    await PostService.updateExistingPost(postId, updatePost)

    info({
      title: 'Post atualizado',
      description: `Você atualizou o post com sucesso`
    })
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setPublishing(true)
      props.postId
        ? await updateExistingPost(props.postId)
        : await insertNewPost()

      navigate('../', { replace: true })

    } finally {
      setPublishing(false)
    }

  }

  function fetchPost(postId: number) {
    PostService.getExistingPost(postId)
      .then(post => {
        setTitle(post.title)
        setBody(post.body)
        setImageUrl(post.imageUrls.default)
        setTags(post.tags.map(tag => ({ id: tag, text: tag })))
      })
  }

  useEffect(() => {
    if (props.postId)
      fetchPost(props.postId)
  }, [props.postId])

  return <Wrapper onSubmit={handleFormSubmit}>
    <Loading show={publishing} />
    <Input
      label="Título"
      placeholder="Insira o título aqui"
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}
    />
    <ImageUpload
      onImageUpload={setImageUrl}
      label="Thumbnail do post"
      preview={imageUrl}
    />

    <MarkdownEditor
      onChange={setBody}
      value={body}
    />
    <TagInput
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((_, i) => i !== index))}
      placeholder="Insira as tags deste post"
    />
    <SubmitWrapper>
      <WordPriceCounter
        pricePerWord={0.25}
        wordsCount={countWordsInMarkdown(body)} />

      <Button
        variant="primary"
        label='Salvar post'
        type='submit'
        disabled={!title || !imageUrl || !body || !tags.length}
      />
    </SubmitWrapper>
  </Wrapper>
}

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;

`

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`