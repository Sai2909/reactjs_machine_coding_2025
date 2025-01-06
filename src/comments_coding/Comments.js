import React, { useState } from 'react';

const Comments = () => {
    const dummyComments = [
        { body: "This is Comment1" },
        { body: "This is Comment2" },
        { body: "This is Comment3" },
    ];

    const [comment, setComment] = useState(dummyComments);
    const [commentBody, setCommentBody] = useState('');

    const onComment = (e) => {
        e.preventDefault();
        if (commentBody.trim() === '') return;
        const newComment = { body: commentBody };
        setComment((prev) => [newComment, ...prev]);
        setCommentBody('');
    };

    return (
        <form className="ms-5" onSubmit={onComment}>
            <label className="form-label mt-2">Machine Coding Comments</label>
            <div className="mb-3 d-flex">
                <input
                    type="text"
                    placeholder="What are your thoughts?"
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                    className="form-control w-25"
                />
                <button type="submit" className="btn btn-primary ms-2">
                    Comment
                </button>
            </div>
            <div>
                <MultipleComments comment={comment} />
            </div>
        </form>
    );
};

export default Comments;

const MultipleComments = ({ comment }) => {
    const [isReplay, setIsReplay] = useState({})

    const toggleReplay = (index) => {
        setIsReplay(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    }
    return (
        <div className="mt-3">
            {comment.map((com, index) => (
                <div
                    key={index}
                    className="d-flex align-items-center mb-2 p-2 border rounded"
                >
                    <p className="flex-grow-1 m-0">{com.body}</p>
                    <button className="btn btn-outline-secondary ms-2 reply-btn" onClick={() => toggleReplay(index)}>
                        {isReplay[index] ? "cancel" : "replay"}
                    </button>
                    {
                        isReplay[index] && <input
                            type="text"
                            placeholder="Write a reply..."
                            className="form-control ms-2 reply-input"
                            style={{ maxWidth: '200px' }}
                        />
                    }
                </div>
            ))}
        </div>
    );
};
