import React from 'react'
import SearchBook from "./searchBook";
class googleBookClient extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>GoogleBook Client</h1>
                <SearchBook/>
            </div>
        )
    }
}
export default googleBookClient