const RequestStatus = {
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
    BAD_REQUEST: 400,
    AUTH_FAILURE: 401
}

class NoFoundError extends Error{
    constructor(message='No found') {
        super(message);
        this.status = RequestStatus.NOT_FOUND;
    }
}

class BadRequestError extends Error{
    constructor(message='Bad Request') {
        super(message);
        this.status = RequestStatus.BAD_REQUEST
    }
}

class InternalServerError extends Error{
    constructor(message='Internal Server Error') {
        super(message);
        this.status = RequestStatus.INTERNAL_ERROR
    }
}

module.exports = {
    NoFoundError,
    InternalServerError,
    BadRequestError
}