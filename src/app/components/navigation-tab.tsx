import { FC } from "react"
import { ActivitiesTab } from "./activities-tab"
import { CommentsTab } from "./comments-tab"
import { CheckListsTab } from "./checklists-tab"

interface NavigationTabProps {
  tab: string
}

export const NavigationTab: FC<NavigationTabProps> = ({ tab }) => {
  if (tab === "CHECKLISTS") {
    return <CheckListsTab />
  } else if (tab === "COMMENTS") {
    return <CommentsTab />
  } else if (tab === "ACTIVITIES") {
    return <ActivitiesTab />
  }
}
