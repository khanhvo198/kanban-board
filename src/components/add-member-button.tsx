import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";

export const AddMemberButton = () => {
  const peoples = ["Daniel haha", "Test totoo", "Simon Tyth", "John toise"];

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <IconButton
          aria-label="add-member"
          icon={<AddIcon />}
          mb={1}
          borderRadius="full"
          size="sm"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Stack direction="column">
            <Text textAlign="center">Add new member</Text>
            <AutoComplete multiple onChange={(vals) => console.log(vals)}>
              <AutoCompleteInput placeholder="Search..." variant="filled">
                {({ tags }) =>
                  tags.map((tag, tid) => (
                    <AutoCompleteTag
                      key={tid}
                      label={tag.label}
                      onRemove={tag.onRemove}
                    />
                  ))
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {peoples.map((person, cid) => (
                  <AutoCompleteItem
                    key={`option-${cid}`}
                    value={person}
                    textTransform="capitalize"
                  >
                    {person}
                  </AutoCompleteItem>
                ))}
              </AutoCompleteList>
            </AutoComplete>
          </Stack>
        </PopoverBody>
        <PopoverFooter>
          <Button>Invite</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
