import { FunctionComponent } from "react";

export interface UserPanelNavViewViewProps {
    children?: never;
}

export const UserPanelNavView: FunctionComponent<UserPanelNavViewViewProps> = () => {
    return (
        <>
            <div className="offcanvas-body d-block px-2 px-lg-0">
              <div className="card overflow-hidden">
                <div className="h-50px" style={{backgroundImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                  <div className="card-body pt-0">
                    <div className="text-center">
                    <div className="avatar avatar-lg mt-n5 mb-3">
                      <a href="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/avatar/07.jpg" alt=""/></a>
                    </div>
                    <h5 className="mb-0"> <a href="#!">Abir Hosen </a> </h5>
                    <small>Web Developer at ADN Diginet</small>
                    <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

                    <div className="hstack gap-2 gap-xl-3 justify-content-center">
                      <div>
                        <h6 className="mb-0">256</h6>
                        <small>Post</small>
                      </div>
                      <div className="vr"></div>
                      <div>
                        <h6 className="mb-0">2.5K</h6>
                        <small>Followers</small>
                      </div>
                      <div className="vr"></div>
                      <div>
                        <h6 className="mb-0">365</h6>
                        <small>Following</small>
                      </div>
                    </div>
                  </div>

                  <hr/>

                  <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                    <li className="nav-item">
                      <a className="nav-link" href="my-profile.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt=""/><span>Feed </span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt=""/><span>Connections </span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/earth-outline-filled.svg" alt=""/><span>Latest News </span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="events.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/calendar-outline-filled.svg" alt=""/><span>Events </span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="groups.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/chat-outline-filled.svg" alt=""/><span>Groups </span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="notifications.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt=""/><span>Notifications </span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="settings.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/cog-outline-filled.svg" alt=""/><span>Settings </span></a>
                    </li>
                  </ul>
                </div>
                <div className="card-footer text-center py-2">
                  <a className="btn btn-link btn-sm" href="my-profile.html">View Profile </a>
                </div>
              </div>

              <ul className="nav small mt-4 justify-content-center lh-1">
                <li className="nav-item">
                  <a className="nav-link" href="my-profile-about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="settings.html">Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="https://support.webestica.com/login">Support </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="docs/index.html">Docs </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="help.html">Help</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="privacy-and-terms.html">Privacy &amp; terms</a>
                </li>
              </ul>
              <p className="small text-center mt-1">©2022 <a className="text-body" target="_blank" href="https://www.webestica.com/"> Webestica </a></p>
            </div>
        </>
    )
}