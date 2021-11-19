class Error {

    handleCloseLoader() {
        ROOT_LOADER.innerHTML = '';
    }

    render() {
        const html = `
        <div class="error-container">
            <p class="error__text">Error 404</p>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();