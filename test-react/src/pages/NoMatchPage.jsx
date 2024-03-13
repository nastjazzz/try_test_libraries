import {Link} from 'react-router-dom'

function NoMatchPage() {
    return (
        <div>
            <h2 data-testid='no-match-page'>Nothing to see here!</h2>
            <p>
                <Link to='/' data-testid='home-link-bla'>Go to the home page</Link>
            </p>
        </div>
    );
}

export default NoMatchPage;