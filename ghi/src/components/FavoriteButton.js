import React from "react";

const FavoriteButton = () => {
    return (
        <>
            <button style={{ zIndex: 2 }} type="button" className="btn btn-outline-success mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-tree-fill" viewBox="0 0 16 16">
                    <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z"></path>
                </svg>
                Save to your Bucket List
            </button>
        </>
    )
}

export default FavoriteButton;
