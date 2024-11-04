import { FC } from "react"
import { ActivitiesTab } from "./activities-tab"
import { CommentsTab } from "./comments-tab"
import { DetailTab } from "./detail-tab"

interface NavigationTabProps {
  tab: string
}

export const NavigationTab: FC<NavigationTabProps> = ({ tab }) => {
  if (tab === "DETAIL") {
    return <DetailTab />
  } else if (tab === "COMMENTS") {
    return <CommentsTab />
  } else if (tab === "ACTIVITIES") {
    return <ActivitiesTab />
  }
}
