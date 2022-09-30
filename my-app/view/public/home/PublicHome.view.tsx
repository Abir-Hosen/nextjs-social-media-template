import { TimelineViewProps } from "features/timeline";
import dynamic from "next/dynamic";
import { FunctionComponent } from "react";
import { PublicLayout } from "view/layout/public/Public.layout";

export interface PublicHomeViewProps {
    childern?: never;
}

const TimelineView = dynamic<TimelineViewProps>(
    () => import('features/timeline').then((i) => i.TimelineView)
);

export const PublicHomeView: FunctionComponent<PublicHomeViewProps> = () => {
    return (
        <PublicLayout className="flex">
            <TimelineView />
        </PublicLayout>
    )
}