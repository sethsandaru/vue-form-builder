
const ALERT_DIALOG = {
    /**
     * Show Alert Dialog
     * @param message
     * @param stopTime
     */
    show(message, stopTime = 3000) {
        const alert = document.createElement('div')
        alert.className = 'v-form-alert'
        alert.innerText = message

        document.getElementsByTagName('body')[0].append(
            alert
        )

        setTimeout(function () {
            alert.remove()
        }, stopTime || 3000)
    }
}

export {
    ALERT_DIALOG
}