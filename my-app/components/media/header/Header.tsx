import { Link } from "components/common/link";
import { FunctionComponent } from "react";

export interface HeaderProps {
    activeMenu?: string;
    showBar?: boolean;
    classNameName?: string;
    childern?: never;
}

export const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <div>
            <header>
                <div className="navbar navbar-light py-lg-4 pt-3 px-0 pb-0">
                    <div className="container">
                        <div className="row w-100 align-items-center g-lg-2 g-0">
                            <div className="col-xxl-2 col-lg-3">
                                Logo
                            </div>
                            <div className="col-xxl-6 col-lg-5 d-none d-lg-block">
                                <div>
                                    <nav className="nav">
                                        <Link className="nav-link active" aria-current="page" href="#">Active</Link>
                                        <Link className="nav-link" href="">Link</Link>
                                        <Link className="nav-link" href="#">Link</Link>
                                        <Link className="nav-link disabled">Disabled</Link>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">
                                <div className="list-inline">
                                    <div className="list-inline-item">
                                        <a href="./pages/shop-wishlist.html" className="text-muted position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                                </path>
                                            </svg>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                5
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="list-inline-item">
                                        <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}