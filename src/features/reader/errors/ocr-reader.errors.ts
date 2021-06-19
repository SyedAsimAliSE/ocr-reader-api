export class FailedToProcessError extends Error {
    constructor(image: string) {
        super(`Failed to process: ${image}`)
        this.name = 'FailedToProcessError'
    }
}
