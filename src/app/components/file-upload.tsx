import { AddIcon } from "@chakra-ui/icons"
import { Input, InputGroup } from "@chakra-ui/react"
import React, { ReactNode, useRef } from "react"

type FileUploadProps = {
  accept?: string
  multiple?: boolean
  children?: ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileUpload = (props: FileUploadProps) => {
  const { accept, multiple, onChange, children } = props
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => inputRef.current?.click()

  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }

  return (
    <InputGroup w="16px" h="16px">
      <Input
        ref={inputRef}
        type={'file'}
        multiple={multiple || false}
        hidden
        accept={accept}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnFileChange(e)}
      />
      <AddIcon cursor="pointer" onClick={handleClick} />
    </InputGroup>
  )
}
