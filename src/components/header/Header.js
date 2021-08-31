import { wrapper } from "./header.module.scss";

const HeaderComp = props => {
    return (
        <div className={wrapper}>
            <h1>This is the header</h1>
        </div>
    );
};

export default HeaderComp;