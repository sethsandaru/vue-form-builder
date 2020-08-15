
export default class SidebarRenderer {
    runnerId = '' // to recognize which components are triggering...
    component = null
    data = {}

    constructor(
        runnerId,
        component,
        data = {}
    ) {
        this.runnerId = runnerId
        this.component = component
        this.data = data
    }
}