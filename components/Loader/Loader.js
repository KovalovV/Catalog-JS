class Loader {

    handleCloseLoader() {
        ROOT_LOADER.innerHTML = '';
    }

    render() {
        const html = `
        <div class="loader-container">
            <img src="components/Loader/img/loader.svg" class="loader__img">
        </div>
        `;

        ROOT_LOADER.innerHTML = html;
    }
}

const loader = new Loader();