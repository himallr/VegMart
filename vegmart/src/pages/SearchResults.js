import React from "react";
import { Link } from "react-router-dom";

function SearchResult({ results }) {
    return (
        <div className="lists">
            {
                results.map((result, id) => {
                    return (
                        <Link className="bt btn-secondary" to="/groceries"><div key={id}>{result.name}</div></Link>
                    )
                })
            }
        </div>
    )
}

export default SearchResult;