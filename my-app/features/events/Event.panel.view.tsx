import { FunctionComponent } from "react";

export interface EventPanelViewProps {
    children?: never;
}

export const EventPanelView: FunctionComponent<EventPanelViewProps> = () => {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
  <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="Paul Skorupskas"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}