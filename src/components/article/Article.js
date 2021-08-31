import { wrapper } from "./article.module.scss";

const ArticleComp = props => {
    return (
        <div className={wrapper}>
            <h3>This is the header</h3>
                <p>something to write bla bla</p>
            <author>
                Name:
            </author>
        </div>
    );
};

export default ArticleComp;