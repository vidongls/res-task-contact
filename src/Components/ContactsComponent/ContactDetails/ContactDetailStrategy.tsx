import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import { EditorState, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
interface Props {}

const ContactDetailStrategy = (props: Props) => {
  const { Content } = Layout
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [show, setShow] = useState<boolean>(false)
  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState)
  }

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <Content className="details-info-content strategy-box">
      {show ? (
        <>
          <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={onEditorStateChange}
          />
          <Button type="primary">Update</Button>
          <Button onClick={handleShow}>Cancel</Button>
        </>
      ) : (
        <Button type="primary" onClick={handleShow}>
          Edit
        </Button>
      )}
    </Content>
  )
}

export default React.memo(ContactDetailStrategy)
