import {
  Box,
  Flex,
  Input,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagCloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";

const projectTags = ["Design", "Web"];

export const InputWithTag = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [isOpenAutoComplete, setIsOpenAutoComplete] = useState(false);
  const [filteredTags, setFilteredTags] = useState<string[]>(projectTags);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [currentActiveSuggestion, setCurrentActiveSuggestion] =
    useState<HTMLElement | null>(null);

  const activeColor = useColorModeValue("orange", "purple");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyBoardEvent);

    return () => document.removeEventListener("keydown", handleKeyBoardEvent);
  });

  const styleBackgroundNode = (node: HTMLElement) => {
    node.style.background = activeColor;
    setCurrentActiveSuggestion(node);
  };

  const styleBackgroundFirstChild = () => {
    if (currentActiveSuggestion) {
      currentActiveSuggestion.style.background = "";
    }

    if (listRef.current?.firstElementChild) {
      const firstChild = listRef.current.firstElementChild as HTMLElement;
      styleBackgroundNode(firstChild);
    }
  };

  const styleBackgroudNextChild = () => {
    if (currentActiveSuggestion) {
      const nextChild = currentActiveSuggestion.nextSibling as HTMLElement;
      if (nextChild) {
        styleBackgroundNode(nextChild);
        currentActiveSuggestion.style.background = "";
      }
    }
  };

  const styleBackgroundPreviousChild = () => {
    if (currentActiveSuggestion) {
      const previousChild =
        currentActiveSuggestion.previousSibling as HTMLElement;
      if (previousChild) {
        styleBackgroundNode(previousChild);
        currentActiveSuggestion.style.background = "";
      }
    }
  };

  const trimTag = (tag: string) => {
    return tag.trimStart().trimEnd();
  };

  const handleKeyBoardEvent = (e: globalThis.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      styleBackgroudNextChild();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      styleBackgroundPreviousChild();
    }

    if (e.key === "Enter") {
      let newTag = "";
      if (currentActiveSuggestion && currentActiveSuggestion.innerText) {
        newTag = currentActiveSuggestion.innerText;

        const reg = /^Create new \"(.+)\"/;
        const match = currentActiveSuggestion.innerText.match(reg);
        if (match && match?.length > 1) {
          newTag = match[1];
        }
      } else if (inputRef.current?.value) {
        newTag = inputRef.current.value;
      }
      newTag = trimTag(newTag);
      if (newTag) {
        setTags([...tags, newTag]);
      }
    }
  };

  const onFocusCapture = () => {
    setIsOpenAutoComplete(filteredTags.length !== 0);
    styleBackgroundFirstChild();
  };

  const onBlurCapture = () => {
    setIsOpenAutoComplete(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = projectTags.filter((projectTag) =>
      projectTag.toLowerCase().includes(value.toLowerCase()),
    );
    if (value) {
      const isExistTag = projectTags.some(
        (projectTag) => projectTag.toLowerCase() === value.toLowerCase(),
      );

      if (!isExistTag) {
        filtered.push(`Create new "${value}"`);
      }
    }

    setFilteredTags(filtered);
    styleBackgroundFirstChild();
  };

  const handleOnClickItem = (item: string) => {
    setTags([...tags, item]);
  };

  const handleHoverListItem = (e: MouseEvent) => {
    if (currentActiveSuggestion) {
      currentActiveSuggestion.style.background = "";
    }
    const node = e.target as HTMLElement;
    node.style.background = activeColor;

    setCurrentActiveSuggestion(node);
  };

  return (
    <>
      <Popover isOpen={isOpenAutoComplete} autoFocus={false} matchWidth>
        <PopoverTrigger>
          <Box>
            <Flex gap={2} wrap="wrap">
              {tags.map((tag, index) => (
                <Tag key={index} colorScheme="cyan">
                  {tag}
                  <TagCloseButton />
                </Tag>
              ))}
            </Flex>

            <Input
              ref={inputRef}
              variant="flushed"
              onFocusCapture={onFocusCapture}
              onBlurCapture={onBlurCapture}
              onChange={handleOnChange}
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <List spacing={2} ref={listRef}>
              {filteredTags.map((tag, index) => (
                <ListItem
                  key={index}
                  cursor="pointer"
                  onClick={() => handleOnClickItem(tag)}
                  p={2}
                  borderRadius="5px"
                  tabIndex={0}
                  onMouseEnter={handleHoverListItem}
                >
                  {tag}
                </ListItem>
              ))}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
