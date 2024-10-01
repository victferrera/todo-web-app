import React, { FormEvent } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.css';
import { FaTrash } from "react-icons/fa";

interface Props {
    show: boolean,
    title: string,
    body: string,
    comments: Array<Comment>
    handleClose: () => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    handleDelete: (commentId: number) => void;
}

const CustomModal: React.FC<Props> = ({ show, title, comments, handleClose, handleSubmit, handleDelete }) => {
    return <>
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    <span className="text-3xl">{title}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span className="text-xl font-bold">Description</span>
                <p className="text-justify mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <hr></hr>
                <span className="text-xl font-bold">Comments</span>
                <div className="flex flex-col justify-center gap-y-3 mt-2">
                    <span className="text-gray-600">Add a comment</span>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-3" id="addTodoComment">
                        <textarea className="focus:outline-blue-500 rounded-xl shadow-md border-2 border-blue-200 p-3" name="commentToAdd" rows={5}></textarea>
                        <button type="submit" className="bg-[#76B7CD] p-2 rounded-md hover:bg-[#3da7ca]">Save</button>
                    </form>
                    <hr></hr>
                    <div className="flex flex-col gap-y-5">
                        {comments.length > 0 ?
                            comments.map(c =>
                                <div key={c.id} className="flex flex-row justify-between">
                                    <p>{c.text}</p>
                                    <span onClick={() => handleDelete(c.id)}><FaTrash className="hover:text-[#DA852A] hover:cursor-pointer" /></span>
                                </div>) :
                            <span className="text-2xl text-center font-bold">Nothing here 😔</span>}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default CustomModal;