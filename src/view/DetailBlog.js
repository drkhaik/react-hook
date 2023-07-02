
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../customize/fetch';
import "./Blog.scss";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleBackData = () => {
        history.push("/blog")
    }

    const { data: dataBlogDetail, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    console.log("check data blog detail", dataBlogDetail)

    return (
        <>
            <div> <span onClick={handleBackData}>&lt;-- Back </span></div>
            <hr />
            <div>Detail blog id = {id}</div>
            {dataBlogDetail
                &&
                <div className='blog-detail'>
                    <div className='blog-title'>
                        {isLoading === true ? 'Loading data ...' : dataBlogDetail.title}
                    </div>
                    <div className='blog-content'>
                        {dataBlogDetail.body}
                    </div>
                </div>
            }

        </>
    )
}

export default DetailBlog;