import './footer.css';
export function Footer() {
    const template = (
        <>
            <address className="address">
                <p>J´s Scripts®</p>
                <p>
                    All the data in this app is extracted from the api
                    https://rickandmortyapi.com/about
                </p>
            </address>
        </>
    );

    return template;
}
