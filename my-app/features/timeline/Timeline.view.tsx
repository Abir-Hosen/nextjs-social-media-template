import { EventPanelViewProps } from "features/events";
import { StoryGlanceViewProps } from "features/story";
import { UserPanelNavViewViewProps } from "features/user";
import dynamic from "next/dynamic";
import { FunctionComponent } from "react";

export interface TimelineViewProps {
    children?: never;
}

const UserPanelNavView = dynamic<UserPanelNavViewViewProps>(
    () => import('features/user').then((i) => i.UserPanelNavView)
);

const StoryGlanceView = dynamic<StoryGlanceViewProps>(
    () => import('features/story').then((i) => i.StoryGlanceView)
);

const EventPanelView = dynamic<EventPanelViewProps>(
    () => import('features/events').then((i) => i.EventPanelView)
);

export const TimelineView: FunctionComponent<TimelineViewProps> = () => {
    return (
        <>
            <div className=" text-center">
                <div className="row">
                    <div className="col">
                        <UserPanelNavView/>
                    </div>
                    <div className="col-6">
                        <StoryGlanceView/>
                    </div>
                    <div className="col">
                        <EventPanelView/>
                    </div>
                </div>
            </div>
        </>
    )
}