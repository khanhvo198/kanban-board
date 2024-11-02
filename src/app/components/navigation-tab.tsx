import { FC } from "react"
import { DescriptionTab } from "./description-tab"
import { CommentsTab } from "./comments-tab"
import { ActivitiesTab } from "./activities-tab"

interface NavigationTabProps {
  tab: string
}

export const NavigationTab: FC<NavigationTabProps> = ({ tab }) => {
  if (tab === "DESCRIPTION") {
    return <DescriptionTab />
  } else if (tab === "COMMENTS") {
    return <CommentsTab />
  } else if (tab === "ACTIVITIES") {
    return <ActivitiesTab />
  }
}
