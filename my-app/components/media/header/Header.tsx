import { Link } from "components/common/link";
import { FunctionComponent } from "react";

export interface HeaderProps {
    activeMenu?: string;
    showBar?: boolean;
    className?: string;
    childern?: never;
}

export const Header: FunctionComponent<HeaderProps> =() =>{
    return(
        <div>
            <header>
                <div>
                    <Link href='/'>
                        <>Logo</>
                    </Link>
                    <Link href='/abir_hosen'>
                        <>Logo</>
                    </Link>
                </div>
                This is master header
            </header>
        </div>
    )
}