import { getRandomColor } from "@/shared/utils/colors";
import { Option, TagListHandle } from "@/shared/utils/types";
import { useProjectStore } from "@/stores/project.store";
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
import {
  ChangeEvent,
  forwardRef,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export const InputWithTag = forwardRef<TagListHandle>(
  function InputWithTagComponent(props, ref) {
    const [tags, setTags] = useState<Option[]>([]);
    const [isOpenAutoComplete, setIsOpenAutoComplete] = useState(false);
    const [filteredTags, setFilteredTags] = useState<Option[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [currentActiveSuggestion, setCurrentActiveSuggestion] =
      useState<HTMLElement | null>(null);
    const [projectTags, setCurrentProjectTags] = useState<Option[]>([]);

    const activeColor = useColorModeValue("orange", "purple");
    const currentProject = useProjectStore((state) => state.currentProject);

    useEffect(() => {
      document.addEventListener("keydown", handleKeyBoardEvent);

      return () => document.removeEventListener("keydown", handleKeyBoardEvent);
    });

    useEffect(() => {
      if (!currentProject.tags) {
      }
      setCurrentProjectTags(currentProject.tags);
      setFilteredTags(currentProject.tags);
    }, [currentProject]);

    useImperativeHandle(ref, () => ({ tags }));

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
        if (newTag && !isExistTag(tags, newTag)) {
          const colorScheme = getColorScheme(newTag);
          setTags([...tags, { name: newTag, colorScheme }]);
        }
      }
    };

    const isExistTag = (tags: Option[], target: string) => {
      return tags.some(
        (tag) => tag.name.toLowerCase() === target.toLowerCase(),
      );
    };

    const onFocusCapture = () => {
      setIsOpenAutoComplete(filteredTags.length !== 0);
      styleBackgroundFirstChild();
    };

    const onBlurCapture = () => {
      setIsOpenAutoComplete(false);
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newTag = e.target.value;
      const filtered = projectTags.filter((projectTag) =>
        projectTag.name.toLowerCase().includes(newTag.toLowerCase()),
      );

      if (newTag) {
        if (!isExistTag(projectTags, newTag)) {
          const randomColor = getRandomColor(tags);
          filtered.push({
            name: `Create new "${newTag}"`,
            colorScheme: randomColor,
          });
        }
      }

      setFilteredTags(filtered);
      if (filtered.length > 0) {
        setIsOpenAutoComplete(true);
      } else {
        setIsOpenAutoComplete(false);
      }
      styleBackgroundFirstChild();
    };

    const handleOnClickItem = (item: string) => {
      const match = item.match(/^Create new \"(.+)\"/);
      let newTag = item;
      if (match && match.length > 1) {
        newTag = match[1];
      }
      if (!isExistTag(tags, newTag)) {
        const colorScheme = getColorScheme(newTag);
        setTags([...tags, { name: newTag, colorScheme }]);
      }
    };

    const getColorScheme = (newTag: string) => {
      const projectTag = projectTags.find((tag) => tag.name === newTag);

      if (projectTag) {
        return projectTag.colorScheme;
      } else {
        const randomColor = getRandomColor(tags);
        console.log(randomColor);
        return randomColor;
      }
    };

    const handleHoverListItem = (e: MouseEvent) => {
      if (currentActiveSuggestion) {
        currentActiveSuggestion.style.background = "";
      }
      const node = e.target as HTMLElement;
      node.style.background = activeColor;

      setCurrentActiveSuggestion(node);
    };

    const handleOnDeleteTag = (tag: string) => {
      const newTags = tags.filter((currentTag) => currentTag.name !== tag);
      setTags([...newTags]);
    };

    return (
      <>
        <Popover isOpen={isOpenAutoComplete} autoFocus={false} matchWidth>
          <PopoverTrigger>
            <Box>
              <Flex gap={2} wrap="wrap">
                {tags.map((tag, index) => (
                  <Tag
                    key={index}
                    cursor="pointer"
                    colorScheme={tag.colorScheme}
                  >
                    {tag.name}
                    <TagCloseButton
                      onClick={() => handleOnDeleteTag(tag.name)}
                    />
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
                    onClick={() => handleOnClickItem(tag.name)}
                    p={2}
                    borderRadius="5px"
                    tabIndex={0}
                    onMouseEnter={handleHoverListItem}
                  >
                    {tag.name}
                  </ListItem>
                ))}
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  },
);
