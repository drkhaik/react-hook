
import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
    const { data: dataBlog, isLoading, isError } = useFetch("https://jsonplaceholder.typicode.com/posts")
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log("check data blog", dataBlog)

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newDataSimple = dataBlog.slice(0, 9);
            setNewData(newDataSimple);
            // console.log('check new Data: ', newData)
        }
    }, [dataBlog])
    const handleAddNewBlog = (blog) => {
        // console.log("check blog in Blog.js", blog)
        let data = newData;
        data.unshift(blog);
        setShow(false)
        setNewData(data);
        // console.log("check new Data", newData)
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data);
    }

    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
                </Modal.Body>
            </Modal>
            <div className="blog-container">
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog">
                            <div className="title"> Title: {item.title} </div>
                            <span onClick={() => deletePost(item.id)}>X</span>
                            <div className="content"> Title: {item.body} </div>
                            <button>
                                <Link to={`/blog/${item.id}`}>View detail</Link>
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
                }
            </div>
        </>
    )
}

export default Blog;