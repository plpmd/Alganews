import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import info from '../core/utils/info';
import '../core/imports.css';
import CreatePostView from './views/CreatePost.view';
import EditorListView from './views/EditorList.view';
import EditorProfileView from './views/EditorProfile.view';
import Home from './views/Home.view';
import NotFound404 from './views/NotFound404.view';
import EditPostView from './views/EditPost.view';

export default function App (){

  useEffect(() => {
    window.onunhandledrejection = function(error: PromiseRejectionEvent) {
      info({
        title: error.reason.response?.data.title || 'Erro',
        description: error.reason.response?.data.detail || error.reason.message
      })
    }
  },[])

  return <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/editores'} element={<EditorListView />} />
        <Route path={'/editores/:id'} element={<EditorProfileView />} />
        <Route path={'/post/criar'} element={<CreatePostView />} />
        <Route path={'/post/editar/:id'} element={<EditPostView />} />
        <Route path={'/404'} element={<NotFound404 />} />
        <Route path={'*'} element={<Navigate to='/404'/>} />
      </Routes>
    </BrowserRouter>
}