import { Box } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";
import { ActivitiesTab } from "./activities-tab";
import { CommentsTab } from "./comments-tab";
import { DetailTab } from "./detail-tab";

interface NavigationTabProps {
  tab: string;
}

export const NavigationTab: FC<NavigationTabProps> = ({ tab }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(500);

  const onResize = () => {
    if (boxRef) {
      console.log(window.innerHeight);
      setHeight(window.innerHeight - 330);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Box ref={boxRef} overflowY="scroll" height={height}>
      {tab === "DETAIL" ? (
        <DetailTab />
      ) : tab === "COMMENTS" ? (
        <CommentsTab />
      ) : (
        <ActivitiesTab />
      )}
    </Box>
  );
};
